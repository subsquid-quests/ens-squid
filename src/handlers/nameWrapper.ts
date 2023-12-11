import {
  Account,
  Domain,
  ExpiryExtended,
  FusesSet,
  NameUnwrapped,
  NameWrapped,
  WrappedDomain,
  WrappedTransfer,
} from "../model";
import { Log } from "../processor";
import {
  EMPTY_ADDRESS,
  ETH_NODE,
  checkValidLabel,
  concat,
  createEventID,
} from "../utils";
import { decodeHex, DataHandlerContext } from "@subsquid/evm-processor";
import { Store } from "../db";
import { EntityBuffer } from "../entityBuffer";
import { _createDomain } from "./registry";
import { Bytes } from "@subsquid/evm-processor/lib/interfaces/evm";

function _decodeName(
  buf: Uint8Array,
  ctx: DataHandlerContext<Store>
): Array<string> | null {
  let offset = 0;
  let list: number[] = [];
  const dot = 0x2e; // ASCII code for '.'
  let len = buf[offset++];
  let firstLabel = "";

  if (len === 0) {
    return [firstLabel, "."];
  }

  while (len) {
    let label = Array.from(buf.slice(offset, offset + len)); // Convert Uint8Array to array
    offset += len;

    let labelString = Buffer.from(label).toString("hex");

    if (!checkValidLabel(labelString, ctx)) {
      return null;
    }

    // if (offset > 1) {
    //   list.push(dot);
    // } else {
    //   firstLabel = Buffer.from(label).toString();
    // }

    if (offset > 1 || firstLabel !== "") {
      list.push(dot);
    } else {
      firstLabel = Buffer.from(label).toString();
    }

    // Now you can use concat with a regular array
    if (label.length > 0) {
      list = list.concat(label);
    }
    len = buf[offset++];
  }

  return [firstLabel, String.fromCharCode(...list)];
}

const PARENT_CANNOT_CONTROL: number = parseInt("65536", 10);

function checkPccBurned(fuses: number): boolean {
  return (fuses & PARENT_CANNOT_CONTROL) == PARENT_CANNOT_CONTROL;
}

async function createOrLoadAccount(
  address: string,
  ctx: any
): Promise<Account> {
  let account = await ctx.store.get(Account, address);
  if (account == undefined) {
    account = new Account({ id: address });
    await ctx.store.upsert(account);
  }

  return account;
}

async function createOrLoadDomain(
  node: string,
  ctx: DataHandlerContext<Store>,
  log: Log
): Promise<Domain> {
  let domain = await ctx.store.get(Domain, {
    where: { id: node },
    relations: {
      parent: true,
      owner: true,
      resolver: true,
      resolvedAddress: true,
      registrant: true,
      wrappedOwner: true,
    },
  });

  const owner = new Account({ id: EMPTY_ADDRESS });
  await ctx.store.upsert(owner);

  if (domain == undefined) {
    domain = new Domain({ id: node });

    domain.owner = owner;
    domain.isMigrated = true;
    domain.createdAt = BigInt(log.block.timestamp);
    domain.subdomainCount = 0;

    await ctx.store.upsert(domain);
  }
  return domain;
}

async function _makeWrappedTransfer(
  blockNumber: number,
  transactionID: Bytes,
  eventID: string,
  node: BigInt,
  to: string,
  ctx: DataHandlerContext<Store>,
  log: Log
): Promise<void> {
  const _to = await createOrLoadAccount(to, ctx);
  const namehash = "0x" + node.toString().slice(2).padStart(64, "0");
  let domain = await createOrLoadDomain(namehash, ctx, log);
  let wrappedDomain = await ctx.store.get(WrappedDomain, {
    where: { id: namehash },
    relations: { owner: true },
  });

  if (wrappedDomain == undefined) {
    wrappedDomain = new WrappedDomain({ id: namehash });
    wrappedDomain.domain = domain;
    wrappedDomain.expiryDate = BigInt(0);
    wrappedDomain.fuses = 0;
  }
  wrappedDomain.owner = _to;

  await ctx.store.upsert(wrappedDomain);

  domain.wrappedOwner = _to;

  await ctx.store.upsert(domain);

  const wrappedTransfer = new WrappedTransfer({ id: eventID });
  wrappedTransfer.domain = domain;
  wrappedTransfer.blockNumber = blockNumber;
  wrappedTransfer.transactionID = decodeHex(transactionID);
  wrappedTransfer.owner = _to;
  EntityBuffer.add(wrappedTransfer);
}

export async function handleNameWrapped(
  event: {
    node: string;
    name: string;
    owner: string;
    fuses: number;
    expiry: bigint;
  },
  log: Log,
  ctx: DataHandlerContext<Store>
) {
  let decoded = _decodeName(decodeHex(event.name), ctx);
  let label: string | null = null;
  let name: string | null = null;

  if (decoded !== null) {
    label = decoded[0];
    name = decoded[1];
  }
  let node = event.node;
  let expiryDate = event.expiry;
  let fuses = Number(event.fuses);
  let blockNumber = log.block.height;
  let transactionID = log.transaction?.hash;
  let owner = await createOrLoadAccount(event.owner, ctx);
  let domain = await createOrLoadDomain(node, ctx, log);

  if (!domain.labelName && label) {
    domain.labelName = label;
    domain.name = name;
  }
  if (
    checkPccBurned(fuses) &&
    (!domain.expiryDate || expiryDate > domain.expiryDate!)
  ) {
    domain.expiryDate = expiryDate;
  }
  domain.wrappedOwner = owner;
  await ctx.store.upsert(domain);

  let wrappedDomain = new WrappedDomain({ id: node });
  wrappedDomain.domain = domain;
  wrappedDomain.expiryDate = expiryDate;
  wrappedDomain.fuses = fuses;
  wrappedDomain.owner = owner;
  wrappedDomain.name = name;

  await ctx.store.upsert(wrappedDomain);

  let nameWrappedEvent = new NameWrapped({
    id: createEventID(blockNumber, log.logIndex),
  });
  nameWrappedEvent.domain = domain;
  nameWrappedEvent.name = name;
  nameWrappedEvent.fuses = fuses;
  nameWrappedEvent.expiryDate = expiryDate;
  nameWrappedEvent.owner = owner;
  nameWrappedEvent.blockNumber = blockNumber;
  nameWrappedEvent.transactionID = decodeHex(transactionID!);

  // return nameWrappedEvent;
  EntityBuffer.add(nameWrappedEvent);
}

export async function handleNameUnwrapped(
  event: {
    node: string;
    owner: string;
  },
  log: Log,
  ctx: DataHandlerContext<Store>
) {
  let node = event.node;
  let blockNumber = log.block.height;
  let transactionID = log.transaction?.hash;
  let owner = await createOrLoadAccount(event.owner, ctx);
  let domain = await createOrLoadDomain(event.node, ctx, log);

  // if (!domain.subdomainCount || !domain.parent) return;

  domain.wrappedOwner = null;
  if (domain.expiryDate && domain.parent?.id !== ETH_NODE) {
    domain.expiryDate = null;
  }

  await ctx.store.upsert(domain);

  let nameUnwrappedEvent = new NameUnwrapped({
    id: createEventID(blockNumber, log.logIndex),
  });
  nameUnwrappedEvent.domain = domain;
  nameUnwrappedEvent.owner = owner;
  nameUnwrappedEvent.blockNumber = blockNumber;
  nameUnwrappedEvent.transactionID = decodeHex(transactionID!);
  await ctx.store.upsert(nameUnwrappedEvent);

  await ctx.store.remove(WrappedDomain, event.node);
}

export async function handleFusesSet(
  event: {
    node: string;
    fuses: number;
  },
  log: Log,
  ctx: DataHandlerContext<Store>
) {
  let node = event.node;
  let fuses = event.fuses;
  let blockNumber = log.block.height;
  let transactionID = log.transaction?.hash;
  let wrappedDomain = await ctx.store.get(WrappedDomain, event.node);
  let domain = await createOrLoadDomain(node, ctx, log);

  if (wrappedDomain) {
    wrappedDomain.fuses = Number(fuses);
    await ctx.store.upsert(wrappedDomain);

    if (wrappedDomain.expiryDate && checkPccBurned(wrappedDomain.fuses)) {
      if (!domain.expiryDate || wrappedDomain.expiryDate > domain.expiryDate!) {
        domain.expiryDate = wrappedDomain.expiryDate;
        // EntityBuffer.add(domain);
        await ctx.store.upsert(domain);
      }
    }
  }

  let fusesBurnedEvent = new FusesSet({
    id: createEventID(blockNumber, log.logIndex),
  });
  fusesBurnedEvent.domain = domain;
  fusesBurnedEvent.fuses = Number(fuses);
  fusesBurnedEvent.blockNumber = blockNumber;
  fusesBurnedEvent.transactionID = decodeHex(transactionID!);
  EntityBuffer.add(domain);
  EntityBuffer.add(fusesBurnedEvent);
}

export async function handleExpiryExtended(
  event: {
    node: string;
    expiry: bigint;
  },
  log: Log,
  ctx: DataHandlerContext<Store>
) {
  let node = event.node;
  let expiry = event.expiry;
  let blockNumber = log.block.height;
  let transactionID = log.transaction?.hash;
  let wrappedDomain = await ctx.store.get(WrappedDomain, node);

  let domain = await createOrLoadDomain(event.node, ctx, log);

  if (domain.subdomainCount === undefined) return;

  if (wrappedDomain) {
    wrappedDomain.expiryDate = event.expiry;
    // EntityBuffer.add(wrappedDomain);
    await ctx.store.upsert(wrappedDomain);

    if (checkPccBurned(wrappedDomain.fuses)) {
      if (!domain.expiryDate || expiry > domain.expiryDate!) {
        domain.expiryDate = expiry;
        // EntityBuffer.add(domain);
        await ctx.store.upsert(domain);
      }
    }
  }

  let expiryExtendedEvent = new ExpiryExtended({
    id: createEventID(blockNumber, log.logIndex),
  });
  expiryExtendedEvent.domain = domain;
  expiryExtendedEvent.expiryDate = expiry;
  expiryExtendedEvent.blockNumber = blockNumber;
  expiryExtendedEvent.transactionID = decodeHex(transactionID!);

  EntityBuffer.add(expiryExtendedEvent);
}

export async function handleTransferSingle(
  event: {
    operator: string;
    from: string;
    to: string;
    id: bigint;
    value: bigint;
  },
  log: Log,
  ctx: any
) {
  await _makeWrappedTransfer(
    log.block.height,
    log.transaction?.hash!,
    createEventID(log.block.height, log.logIndex).concat("-0"),
    event.id,
    event.to,
    ctx,
    log
  );
}

export async function handleTransferBatch(
  event: {
    operator: string;
    from: string;
    to: string;
    ids: bigint[];
  },
  log: Log,
  ctx: any
): Promise<void> {
  // const transferBatch = [];
  for (let i = 0; i < event.ids.length; i++) {
    const wrappedTransfer = await _makeWrappedTransfer(
      log.block.height,
      log.transaction?.hash!,
      createEventID(log.block.height, log.logIndex)
        .concat("-")
        .concat(i.toString()),
      event.ids[i],
      event.to,
      ctx,
      log
    );
    // transferBatch.push(wrappedTransfer);
  }
}
