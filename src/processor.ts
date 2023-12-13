import { lookupArchive } from "@subsquid/archive-registry";
import {
  BlockHeader,
  DataHandlerContext,
  EvmBatchProcessor,
  EvmBatchProcessorFields,
  Log as _Log,
  Transaction as _Transaction,
} from "@subsquid/evm-processor";

import * as baseRegistrarAbi from "./abi/BaseRegistrar";
import * as ensRegistry from "./abi/Registry";
import * as resolver from "./abi/PublicResolver";
import * as ethRegistrarControllerAbi from "./abi/EthRegistrarController";
import * as ethRegistrarOldControllerAbi from "./abi/EthRegistrarControllerOld";
import * as nameWrapperAbi from "./abi/NameWrapper";

export const REGISTRY_CONTRACT = "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e";
export const REGISTRY_OLD_CONTRACT =
  "0x314159265dd8dbb310642f98f50c066173c1259b";
export const BASE_REGISTRAR_CONTRACT =
  "0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85".toLowerCase();
export const REGIS_CONTROLLER_OLD_CONTRACT =
  "0x283Af0B28c62C092C9727F1Ee09c02CA627EB7F5".toLowerCase();
export const REGIS_CONTROLLER_CONTRACT =
  "0x253553366da8546fc250f225fe3d25d0c782303b".toLowerCase();
export const NAME_WRAPPER_CONTRACT =
  "0xd4416b13d2b3a9abae7acd5d6c2bbdbe25686401".toLowerCase();

export const processor = new EvmBatchProcessor()
  .setDataSource({
    archive: 'http://localhost:8000/network/ethereum-mainnet'
  })
  .setFields({
    log: {
      topics: true,
      data: true,
      transactionHash: true,
    },
    transaction: {
      from: true,
      value: true,
      hash: true,
    },
  })
  .setBlockRange({
    from: 3000000,
  })
  .addLog({
    address: [BASE_REGISTRAR_CONTRACT],
    topic0: [
      baseRegistrarAbi.events["NameRegistered"].topic,
      baseRegistrarAbi.events["NameRenewed"].topic,
      baseRegistrarAbi.events["Transfer"].topic,
    ],
    transaction: true,
  })
  .addLog({
    address: [REGIS_CONTROLLER_CONTRACT],
    topic0: [
      ethRegistrarControllerAbi.events["NameRegistered"].topic,
      ethRegistrarControllerAbi.events["NameRenewed"].topic,
    ],
    transaction: true,
  })
  .addLog({
    address: [REGIS_CONTROLLER_OLD_CONTRACT],
    topic0: [
      ethRegistrarOldControllerAbi.events["NameRegistered"].topic,
      ethRegistrarOldControllerAbi.events["NameRenewed"].topic,
    ],
    transaction: true,
  })
  .addLog({
    address: [NAME_WRAPPER_CONTRACT],
    topic0: [
      nameWrapperAbi.events["NameWrapped"].topic,
      nameWrapperAbi.events["NameUnwrapped"].topic,
      nameWrapperAbi.events["FusesSet"].topic,
      nameWrapperAbi.events["ExpiryExtended"].topic,
      nameWrapperAbi.events["TransferSingle"].topic,
      nameWrapperAbi.events["TransferBatch"].topic,
    ],
    transaction: true,
  })
  .addLog({
    address: [REGISTRY_OLD_CONTRACT],
    topic0: [
      ensRegistry.events["NewOwner"].topic,
      ensRegistry.events["NewResolver"].topic,
      ensRegistry.events["NewTTL"].topic,
      ensRegistry.events["Transfer"].topic,
    ],
    transaction: true,
  })
  .addLog({
    address: [REGISTRY_CONTRACT],
    topic0: [
      ensRegistry.events["NewOwner"].topic,
      ensRegistry.events["NewResolver"].topic,
      ensRegistry.events["NewTTL"].topic,
      ensRegistry.events["Transfer"].topic,
    ],
    transaction: true,
  })
  .addLog({
    topic0: [
      resolver.events["ABIChanged"].topic,
      resolver.events["AddrChanged"].topic,
      resolver.events["AddressChanged"].topic,
      resolver.events["AuthorisationChanged"].topic,
      resolver.events["ContenthashChanged"].topic,
      resolver.events["InterfaceChanged"].topic,
      resolver.events["NameChanged"].topic,
      resolver.events["PubkeyChanged"].topic,
      resolver.events["TextChanged(bytes32,string,string)"].topic,
      resolver.events["TextChanged(bytes32,string,string,string)"].topic,
      resolver.events["VersionChanged"].topic,
    ],
    transaction: true,
  });

export type Fields = EvmBatchProcessorFields<typeof processor>;
export type Block = BlockHeader<Fields>;
export type Log = _Log<Fields>;
export type Transaction = _Transaction<Fields>;
export type ProcessorContext<Store> = DataHandlerContext<Store, Fields>;
