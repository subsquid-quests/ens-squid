import { DataHandlerContext, decodeHex } from "@subsquid/evm-processor";
import {
  Account,
  Domain,
  NewOwner,
  Resolver,
  NewResolver,
  NewTTL,
  Transfer,
} from "../model";
import { Log } from "../processor";
import { EMPTY_ADDRESS, ROOT_NODE, createEventID, makeSubnode } from "../utils";
import { Store } from "../db";
import { EntityBuffer } from "../entityBuffer";
import { Contract as ens } from "../abi/NameWrapper";

const BIG_INT_ZERO: bigint = 0n;

export async function _createDomain(
  node: string,
  timestamp: bigint,
  ctx: any
): Promise<Domain> {
  const owner = new Account({ id: EMPTY_ADDRESS });
  await ctx.store.upsert(owner);
  // Create a new domain entity
  let domain = new Domain({ id: node });

  if (node == ROOT_NODE) {
    domain.owner = owner;
    domain.isMigrated = true;
    domain.createdAt = timestamp;
    domain.subdomainCount = 0;

    await ctx.store.upsert(domain);
  }
  return domain;
}

async function _getDomain(
  node: string,
  ctx: DataHandlerContext<Store>,
  timestamp: bigint = BIG_INT_ZERO
): Promise<Domain> {
  let domain = await ctx.store.get(Domain, {
    where: {
      id: node,
    },
    relations: { parent: true, owner: true, resolver: true },
  });

  if (domain === undefined && node == ROOT_NODE) {
    return await _createDomain(node, timestamp, ctx);
  } else {
    // conssole.log("returned domain", domain);
    return domain!;
  }
}

async function _recurseDomainDelete(
  domain: Domain,
  ctx: DataHandlerContext<Store>
): Promise<string | null> {
  if (
    (domain.resolver == undefined ||
      domain.resolver?.id.split("-")[0] == EMPTY_ADDRESS) &&
    domain.owner?.id == EMPTY_ADDRESS &&
    domain.subdomainCount == 0
  ) {
    const parentDomain = await ctx.store.get(Domain, {
      where: {
        id: domain.parent?.id,
      },
    });
    if (parentDomain != undefined) {
      parentDomain.subdomainCount = parentDomain.subdomainCount - 1;
      await ctx.store.upsert(parentDomain);
      return _recurseDomainDelete(parentDomain, ctx);
    }

    return null;
  }

  return domain.id;
}

async function _saveDomain(domain: Domain, ctx: any) {
  await _recurseDomainDelete(domain, ctx);
  EntityBuffer.add(domain);
}

async function _handleNewOwner(
  event: { node: string; label: string; owner: string },
  log: Log,
  ctx: DataHandlerContext<Store>,
  isMigrated: boolean
) {
  let subnode = makeSubnode(event.node, event.label);
  let domain = await _getDomain(subnode, ctx, BigInt(log.block.timestamp));
  try {
    let account = new Account({ id: event.owner });
    await ctx.store.upsert(account);

    let parent = await _getDomain(event.node, ctx);
    if (domain === undefined) {
      domain = new Domain({ id: subnode });
      domain.createdAt = BigInt(log.block.timestamp);
      domain.subdomainCount = 0;
    }

    if (domain.parent === undefined && parent !== undefined) {
      parent.subdomainCount = parent.subdomainCount + 1;
      await ctx.store.upsert(parent);
    }

    if (domain.name == null) {
      let label = await ctx.store.get(Domain, {
        where: {
          labelName: event.label,
        },
      });

      if (label != undefined) {
        domain!.labelName = label.labelName;
      }

      let newLabel = "";
      if (label === undefined) {
        newLabel = "[" + event.label.slice(2) + "]";
      }

      if (
        event.node ==
        "0x0000000000000000000000000000000000000000000000000000000000000000"
      ) {
        domain!.name = label?.labelName || newLabel;
      } else {
        parent = parent!;
        let name = parent?.name;
        if ((label || newLabel) && name) {
          domain.name = label?.labelName
            ? label?.labelName
            : newLabel + "." + name;
        }
      }
    }
    domain.owner = account;
    domain.labelhash = decodeHex(event.label);
    domain.isMigrated = isMigrated;
    await _saveDomain(domain, ctx);

    let domainEvent = new NewOwner({
      id: createEventID(log.block.height, log.logIndex),
    });
    domainEvent.blockNumber = log.block.height;
    domainEvent.transactionID = decodeHex(log.transaction?.hash!);
    domainEvent.parentDomain = parent;
    domainEvent.domain = domain;
    domainEvent.owner = account;

    EntityBuffer.add(domainEvent);
  } catch (err) {
    console.error("Error during _handleNewOwner:", err);

    // Handle the error by setting specific fields to null or as needed
    // domain.owner = null;
    // Set other fields to null or handle them as needed
  }
}

export async function handleNewResolver(
  event: { node: string; resolver: string },
  log: Log,
  ctx: DataHandlerContext<Store>
): Promise<void> {
  let id: string | null;
  let domain = await _getDomain(event.node, ctx)!;

  try {
    if (event.resolver === "0x0") {
      id = null;
    } else {
      id = event.resolver.concat("-").concat(event.node);
    }

    let resolver;

    if (id) {
      resolver = await ctx.store.get(Resolver, {
        where: { id },
        relations: { domain: true },
      });
      if (resolver == undefined) {
        resolver = new Resolver({ id });
        resolver.domain = domain;
        resolver.address = decodeHex(event.resolver);

        await ctx.store.upsert(resolver);

        domain.resolvedAddress = null;
      } else {
        domain.resolvedAddress = resolver.addr;
      }
    } else {
      resolver = new Resolver({ id: EMPTY_ADDRESS });
      await ctx.store.upsert(resolver);
      domain.resolvedAddress = null;
    }

    await _saveDomain(domain, ctx);

    let domainEvent = new NewResolver({
      id: createEventID(log.block.height, log.logIndex),
    });
    domainEvent.blockNumber = log.block.height;
    domainEvent.transactionID = decodeHex(log.transaction?.hash!);
    domainEvent.domain = domain;
    domainEvent!.resolver = resolver;

    EntityBuffer.add(domainEvent);
  } catch (err) {
    // console.error("Error during resolver handling:", err);

    // Set other fields to null or handle them as needed
    domain.resolvedAddress = null;
    await _saveDomain(domain, ctx);
  }
}

export async function handleNewTTL(
  event: {
    node: string;
    ttl: bigint;
  },
  log: Log,
  ctx: DataHandlerContext<Store>
): Promise<void> {
  let node = event.node;
  let domain = await _getDomain(node, ctx);

  // For the edge case that a domain's owner and resolver are set to empty
  // in the same transaction as setting TTL
  if (domain) {
    domain.ttl = event.ttl;
    await ctx.store.upsert(domain);
  }

  let domainEvent = new NewTTL({
    id: createEventID(log.block.height, log.logIndex),
  });
  domainEvent.blockNumber = log.block.height;
  domainEvent.transactionID = decodeHex(log.transaction?.hash!);
  domainEvent.domain = domain;
  domainEvent.ttl = event.ttl;

  EntityBuffer.add(domainEvent);
}

export async function handleTransfer(
  event: {
    node: string;
    owner: string;
  },
  log: Log,
  ctx: DataHandlerContext<Store>
): Promise<void> {
  let node = event.node;
  let account = new Account({ id: event.owner });
  await ctx.store.upsert(account);

  // Update the domain owner
  let domain = await _getDomain(node, ctx)!;

  domain.owner = account;
  await _saveDomain(domain, ctx);

  let domainEvent = new Transfer({
    id: createEventID(log.block.height, log.logIndex),
  });
  domainEvent.blockNumber = log.block.height;
  domainEvent.transactionID = decodeHex(log.transaction?.hash!);
  domainEvent.domain = domain;
  domainEvent.owner = account;

  EntityBuffer.add(domainEvent);
  // return domainEvent;
}

export async function handleNewOwner(
  event: { node: string; label: string; owner: string },
  log: Log,
  ctx: any
) {
  return await _handleNewOwner(event, log, ctx, true);
}

export async function handleNewOwnerOldRegistry(
  event: { node: string; label: string; owner: string },
  log: Log,
  ctx: any
): Promise<void> {
  let subnode = makeSubnode(event.node, event.label);
  let domain = await _getDomain(subnode, ctx, BigInt(log.block.timestamp));

  if (domain == undefined || domain.isMigrated == false) {
    await _handleNewOwner(event, log, ctx, false);
  }
}

export async function handleNewResolverOldRegistry(
  event: { node: string; resolver: string },
  log: Log,
  ctx: any
): Promise<void> {
  let node = event.node;
  let domain = await _getDomain(node, ctx, BigInt(log.block.timestamp))!;
  if (node == ROOT_NODE || !domain.isMigrated) {
    await handleNewResolver(event, log, ctx);
  }
}
export async function handleNewTTLOldRegistry(
  event: {
    node: string;
    ttl: bigint;
  },
  log: Log,
  ctx: any
): Promise<void> {
  let domain = await _getDomain(event.node, ctx)!;
  if (domain.isMigrated == false) {
    await handleNewTTL(event, log, ctx);
  }
}

export async function handleTransferOldRegistry(
  event: {
    node: string;
    owner: string;
  },
  log: Log,
  ctx: any
): Promise<void> {
  let domain = await _getDomain(event.node, ctx)!;
  if (domain?.isMigrated == false) {
    await handleTransfer(event, log, ctx);
  }
}
