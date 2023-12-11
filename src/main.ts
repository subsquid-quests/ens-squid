import { TypeormDatabase } from "@subsquid/typeorm-store";
import {
  BASE_REGISTRAR_CONTRACT,
  NAME_WRAPPER_CONTRACT,
  REGISTRY_CONTRACT,
  REGISTRY_OLD_CONTRACT,
  REGIS_CONTROLLER_CONTRACT,
  REGIS_CONTROLLER_OLD_CONTRACT,
  processor,
} from "./processor";

// Import ABI definitions
import * as baseRegistrarAbi from "./abi/BaseRegistrar";
import * as ensRegistry from "./abi/Registry";
import * as resolver from "./abi/PublicResolver";
import * as ethRegistrarControllerAbi from "./abi/EthRegistrarController";
import * as ethRegistrarOldControllerAbi from "./abi/EthRegistrarControllerOld";
import * as nameWrapperAbi from "./abi/NameWrapper";

// Import event handlers
import {
  handleNewOwner,
  handleNewOwnerOldRegistry,
  handleNewResolver,
  handleNewResolverOldRegistry,
  handleNewTTL,
  handleNewTTLOldRegistry,
  handleTransfer,
  handleTransferOldRegistry,
} from "./handlers/registry";
import {
  handleExpiryExtended,
  handleFusesSet,
  handleNameUnwrapped,
  handleNameWrapped,
  handleTransferBatch,
  handleTransferSingle,
} from "./handlers/nameWrapper";
import {
  handleNameRegistered,
  handleNameRegisteredByController,
  handleNameRegisteredByControllerOld,
  handleNameRenewed,
  handleNameRenewedByController,
  handleNameTransferred,
} from "./handlers/baseRegistrar";
import {
  handleABIChanged,
  handleAddrChanged,
  handleAuthorisationChanged,
  handleContentHashChanged,
  handleInterfaceChanged,
  handleMulticoinAddrChanged,
  handleNameChanged,
  handlePubkeyChanged,
  handleTextChanged,
  handleTextChangedWithValue,
  handleVersionChanged,
} from "./handlers/resolver";
import { EntityBuffer } from "./entityBuffer";

processor.run(new TypeormDatabase({ supportHotBlocks: false }), async (ctx) => {
  // Initialize arrays to store decoded events

  // Loop through blocks in the context
  for (let c of ctx.blocks) {
    for (let log of c.logs) {
      // Decode and handle events based on their topics
      if (log.topics[0] === resolver.events["ABIChanged"].topic) {
        const eventData = resolver.events["ABIChanged"].decode(log);
        await handleABIChanged(eventData, log, ctx);
      }
      if (log.topics[0] === resolver.events["AddrChanged"].topic) {
        try {
          const eventData = resolver.events["AddrChanged"].decode(log);

          await handleAddrChanged(eventData, log, ctx);
        } catch (err) {
          ctx.log.error("range error from decoding Addrchanged");
        }
      }
      if (log.topics[0] === resolver.events["AddressChanged"].topic) {
        const eventData = resolver.events["AddressChanged"].decode(log);
        await handleMulticoinAddrChanged(eventData, log, ctx);
      }
      if (log.topics[0] === resolver.events["AuthorisationChanged"].topic) {
        const eventData = resolver.events["AuthorisationChanged"].decode(log);
        await handleAuthorisationChanged(eventData, log, ctx);
      }
      if (log.topics[0] === resolver.events["ContenthashChanged"].topic) {
        const eventData = resolver.events["ContenthashChanged"].decode(log);
        await handleContentHashChanged(eventData, log, ctx);
      }
      if (log.topics[0] === resolver.events["InterfaceChanged"].topic) {
        const eventData = resolver.events["InterfaceChanged"].decode(log);
        await handleInterfaceChanged(eventData, log, ctx);
      }
      if (log.topics[0] === resolver.events["NameChanged"].topic) {
        const eventData = resolver.events["NameChanged"].decode(log);
        await handleNameChanged(eventData, log, ctx);
      }
      if (log.topics[0] === resolver.events["PubkeyChanged"].topic) {
        const eventData = resolver.events["PubkeyChanged"].decode(log);
        await handlePubkeyChanged(eventData, log, ctx);
      }
      if (
        log.topics[0] ===
        resolver.events["TextChanged(bytes32,string,string)"].topic
      ) {
        try {
          const eventData =
            resolver.events["TextChanged(bytes32,string,string)"].decode(log);
          await handleTextChanged(eventData, log, ctx);
        } catch (err) {
          ctx.log.error("reange error from decoding text without value");
        }
      }
      if (
        log.topics[0] ===
        resolver.events["TextChanged(bytes32,string,string,string)"].topic
      ) {
        const eventData =
          resolver.events["TextChanged(bytes32,string,string,string)"].decode(
            log
          );
        await handleTextChangedWithValue(eventData, log, ctx);
      }

      if (log.topics[0] === resolver.events["VersionChanged"].topic) {
        const eventData = resolver.events["VersionChanged"].decode(log);
        await handleVersionChanged(eventData, log, ctx);
      }

      // Check the contract address and handle events accordingly
      if (log.address === REGISTRY_CONTRACT) {
        if (log.topics[0] === ensRegistry.events["NewOwner"].topic) {
          const eventData = ensRegistry.events["NewOwner"].decode(log);
          await handleNewOwner(eventData, log, ctx);
        }
        if (log.topics[0] === ensRegistry.events["NewResolver"].topic) {
          const eventData = ensRegistry.events["NewResolver"].decode(log);
          await handleNewResolver(eventData, log, ctx);
        }
        if (log.topics[0] === ensRegistry.events["NewTTL"].topic) {
          const eventData = ensRegistry.events["NewTTL"].decode(log);
          await handleNewTTL(eventData, log, ctx);
        }
        if (log.topics[0] === ensRegistry.events["Transfer"].topic) {
          const eventData = ensRegistry.events["Transfer"].decode(log);
          await handleTransfer(eventData, log, ctx);
        }
      } else if (log.address === REGISTRY_OLD_CONTRACT) {
        if (log.topics[0] === ensRegistry.events["NewOwner"].topic) {
          const eventData = ensRegistry.events["NewOwner"].decode(log);
          await handleNewOwnerOldRegistry(eventData, log, ctx);
        }
        if (log.topics[0] === ensRegistry.events["NewResolver"].topic) {
          const eventData = ensRegistry.events["NewResolver"].decode(log);
          await handleNewResolverOldRegistry(eventData, log, ctx);
        }
        if (log.topics[0] === ensRegistry.events["NewTTL"].topic) {
          const eventData = ensRegistry.events["NewTTL"].decode(log);
          await handleNewTTLOldRegistry(eventData, log, ctx);
        }
        if (log.topics[0] === ensRegistry.events["Transfer"].topic) {
          const eventData = ensRegistry.events["Transfer"].decode(log);
          await handleTransferOldRegistry(eventData, log, ctx);
        }
      } else if (log.address === NAME_WRAPPER_CONTRACT) {
        if (log.topics[0] === nameWrapperAbi.events["NameWrapped"].topic) {
          const eventData = nameWrapperAbi.events["NameWrapped"].decode(log);
          await handleNameWrapped(eventData, log, ctx);
        }
        if (log.topics[0] === nameWrapperAbi.events["NameUnwrapped"].topic) {
          const eventData = nameWrapperAbi.events["NameUnwrapped"].decode(log);
          await handleNameUnwrapped(eventData, log, ctx);
        }
        if (log.topics[0] === nameWrapperAbi.events["FusesSet"].topic) {
          const eventData = nameWrapperAbi.events["FusesSet"].decode(log);
          await handleFusesSet(eventData, log, ctx);
        }
        if (log.topics[0] === nameWrapperAbi.events["ExpiryExtended"].topic) {
          const eventData = nameWrapperAbi.events["ExpiryExtended"].decode(log);
          await handleExpiryExtended(eventData, log, ctx);
        }
        if (log.topics[0] === nameWrapperAbi.events["TransferSingle"].topic) {
          const eventData = nameWrapperAbi.events["TransferSingle"].decode(log);
          await handleTransferSingle(eventData, log, ctx);
        }
        if (log.topics[0] === nameWrapperAbi.events["TransferBatch"].topic) {
          const eventData = nameWrapperAbi.events["TransferBatch"].decode(log);
          await handleTransferBatch(eventData, log, ctx);
        }
      } else if (log.address === BASE_REGISTRAR_CONTRACT) {
        if (log.topics[0] === baseRegistrarAbi.events["NameRegistered"].topic) {
          const eventData =
            baseRegistrarAbi.events["NameRegistered"].decode(log);
          await handleNameRegistered(eventData, log, ctx);
        }
        if (log.topics[0] === baseRegistrarAbi.events["NameRenewed"].topic) {
          const eventData = baseRegistrarAbi.events["NameRenewed"].decode(log);
          await handleNameRenewed(eventData, log, ctx);
        }
        if (log.topics[0] === baseRegistrarAbi.events["Transfer"].topic) {
          const eventData = baseRegistrarAbi.events["Transfer"].decode(log);
          await handleNameTransferred(eventData, log, ctx);
        }
      } else if (log.address === REGIS_CONTROLLER_CONTRACT) {
        if (
          log.topics[0] ===
          ethRegistrarControllerAbi.events["NameRenewed"].topic
        ) {
          const eventData =
            ethRegistrarControllerAbi.events["NameRenewed"].decode(log);
          await handleNameRenewedByController(eventData, log, ctx);
        }
        if (
          log.topics[0] ===
          ethRegistrarControllerAbi.events["NameRegistered"].topic
        ) {
          const eventData =
            ethRegistrarControllerAbi.events["NameRegistered"].decode(log);
          await handleNameRegisteredByController(eventData, log, ctx);
        }
      } else if (log.address === REGIS_CONTROLLER_OLD_CONTRACT) {
        if (
          log.topics[0] ===
          ethRegistrarOldControllerAbi.events["NameRenewed"].topic
        ) {
          const eventData =
            ethRegistrarOldControllerAbi.events["NameRenewed"].decode(log);
          await handleNameRenewedByController(eventData, log, ctx);
        }
        if (
          log.topics[0] ===
          ethRegistrarOldControllerAbi.events["NameRegistered"].topic
        ) {
          const eventData =
            ethRegistrarOldControllerAbi.events["NameRegistered"].decode(log);
          await handleNameRegisteredByControllerOld(eventData, log, ctx);
        }
      }

      for (let entities of EntityBuffer.flush()) {
        await ctx.store.upsert(entities);
      }
    }
  }

  const startBlock = ctx.blocks.at(0)?.header.height;
  const endBlock = ctx.blocks.at(-1)?.header.height;
  ctx.log.info(`running from ${startBlock} to ${endBlock}`);
});
