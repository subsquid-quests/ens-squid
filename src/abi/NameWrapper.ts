import * as ethers from 'ethers'
import {LogEvent, Func, ContractBase} from './abi.support'
import {ABI_JSON} from './NameWrapper.abi'

export const abi = new ethers.Interface(ABI_JSON);

export const events = {
    ApprovalForAll: new LogEvent<([account: string, operator: string, approved: boolean] & {account: string, operator: string, approved: boolean})>(
        abi, '0x17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31'
    ),
    ControllerChanged: new LogEvent<([controller: string, active: boolean] & {controller: string, active: boolean})>(
        abi, '0x4c97694570a07277810af7e5669ffd5f6a2d6b74b6e9a274b8b870fd5114cf87'
    ),
    ExpiryExtended: new LogEvent<([node: string, expiry: bigint] & {node: string, expiry: bigint})>(
        abi, '0xf675815a0817338f93a7da433f6bd5f5542f1029b11b455191ac96c7f6a9b132'
    ),
    FusesSet: new LogEvent<([node: string, fuses: number] & {node: string, fuses: number})>(
        abi, '0x39873f00c80f4f94b7bd1594aebcf650f003545b74824d57ddf4939e3ff3a34b'
    ),
    NameUnwrapped: new LogEvent<([node: string, owner: string] & {node: string, owner: string})>(
        abi, '0xee2ba1195c65bcf218a83d874335c6bf9d9067b4c672f3c3bf16cf40de7586c4'
    ),
    NameWrapped: new LogEvent<([node: string, name: string, owner: string, fuses: number, expiry: bigint] & {node: string, name: string, owner: string, fuses: number, expiry: bigint})>(
        abi, '0x8ce7013e8abebc55c3890a68f5a27c67c3f7efa64e584de5fb22363c606fd340'
    ),
    OwnershipTransferred: new LogEvent<([previousOwner: string, newOwner: string] & {previousOwner: string, newOwner: string})>(
        abi, '0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0'
    ),
    TransferBatch: new LogEvent<([operator: string, from: string, to: string, ids: Array<bigint>, values: Array<bigint>] & {operator: string, from: string, to: string, ids: Array<bigint>})>(
        abi, '0x4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb'
    ),
    TransferSingle: new LogEvent<([operator: string, from: string, to: string, id: bigint, value: bigint] & {operator: string, from: string, to: string, id: bigint, value: bigint})>(
        abi, '0xc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62'
    ),
    URI: new LogEvent<([value: string, id: bigint] & {value: string, id: bigint})>(
        abi, '0x6bb7ff708619ba0610cba295a58592e0451dee2622938c8755667688daf3529b'
    ),
}

export const functions = {
    _tokens: new Func<[_: bigint], {}, bigint>(
        abi, '0xed70554d'
    ),
    allFusesBurned: new Func<[node: string, fuseMask: number], {node: string, fuseMask: number}, boolean>(
        abi, '0xadf4960a'
    ),
    balanceOf: new Func<[account: string, id: bigint], {account: string, id: bigint}, bigint>(
        abi, '0x00fdd58e'
    ),
    balanceOfBatch: new Func<[accounts: Array<string>, ids: Array<bigint>], {accounts: Array<string>, ids: Array<bigint>}, Array<bigint>>(
        abi, '0x4e1273f4'
    ),
    canModifyName: new Func<[node: string, addr: string], {node: string, addr: string}, boolean>(
        abi, '0x41415eab'
    ),
    controllers: new Func<[_: string], {}, boolean>(
        abi, '0xda8c229e'
    ),
    ens: new Func<[], {}, string>(
        abi, '0x3f15457f'
    ),
    extendExpiry: new Func<[parentNode: string, labelhash: string, expiry: bigint], {parentNode: string, labelhash: string, expiry: bigint}, bigint>(
        abi, '0x6e5d6ad2'
    ),
    getData: new Func<[id: bigint], {id: bigint}, ([owner: string, fuses: number, expiry: bigint] & {owner: string, fuses: number, expiry: bigint})>(
        abi, '0x0178fe3f'
    ),
    isApprovedForAll: new Func<[account: string, operator: string], {account: string, operator: string}, boolean>(
        abi, '0xe985e9c5'
    ),
    isWrapped: new Func<[node: string], {node: string}, boolean>(
        abi, '0xfd0cd0d9'
    ),
    metadataService: new Func<[], {}, string>(
        abi, '0x53095467'
    ),
    name: new Func<[], {}, string>(
        abi, '0x06fdde03'
    ),
    names: new Func<[_: string], {}, string>(
        abi, '0x20c38e2b'
    ),
    onERC721Received: new Func<[to: string, _: string, tokenId: bigint, data: string], {to: string, tokenId: bigint, data: string}, string>(
        abi, '0x150b7a02'
    ),
    owner: new Func<[], {}, string>(
        abi, '0x8da5cb5b'
    ),
    ownerOf: new Func<[id: bigint], {id: bigint}, string>(
        abi, '0x6352211e'
    ),
    recoverFunds: new Func<[_token: string, _to: string, _amount: bigint], {_token: string, _to: string, _amount: bigint}, []>(
        abi, '0x5d3590d5'
    ),
    registerAndWrapETH2LD: new Func<[label: string, wrappedOwner: string, duration: bigint, resolver: string, ownerControlledFuses: number], {label: string, wrappedOwner: string, duration: bigint, resolver: string, ownerControlledFuses: number}, bigint>(
        abi, '0xa4014982'
    ),
    registrar: new Func<[], {}, string>(
        abi, '0x2b20e397'
    ),
    renew: new Func<[tokenId: bigint, duration: bigint], {tokenId: bigint, duration: bigint}, bigint>(
        abi, '0xc475abff'
    ),
    renounceOwnership: new Func<[], {}, []>(
        abi, '0x715018a6'
    ),
    safeBatchTransferFrom: new Func<[from: string, to: string, ids: Array<bigint>, amounts: Array<bigint>, data: string], {from: string, to: string, ids: Array<bigint>, amounts: Array<bigint>, data: string}, []>(
        abi, '0x2eb2c2d6'
    ),
    safeTransferFrom: new Func<[from: string, to: string, id: bigint, amount: bigint, data: string], {from: string, to: string, id: bigint, amount: bigint, data: string}, []>(
        abi, '0xf242432a'
    ),
    setApprovalForAll: new Func<[operator: string, approved: boolean], {operator: string, approved: boolean}, []>(
        abi, '0xa22cb465'
    ),
    setChildFuses: new Func<[parentNode: string, labelhash: string, fuses: number, expiry: bigint], {parentNode: string, labelhash: string, fuses: number, expiry: bigint}, []>(
        abi, '0x33c69ea9'
    ),
    setController: new Func<[controller: string, active: boolean], {controller: string, active: boolean}, []>(
        abi, '0xe0dba60f'
    ),
    setFuses: new Func<[node: string, ownerControlledFuses: number], {node: string, ownerControlledFuses: number}, number>(
        abi, '0x402906fc'
    ),
    setMetadataService: new Func<[_metadataService: string], {_metadataService: string}, []>(
        abi, '0x1534e177'
    ),
    setRecord: new Func<[node: string, owner: string, resolver: string, ttl: bigint], {node: string, owner: string, resolver: string, ttl: bigint}, []>(
        abi, '0xcf408823'
    ),
    setResolver: new Func<[node: string, resolver: string], {node: string, resolver: string}, []>(
        abi, '0x1896f70a'
    ),
    setSubnodeOwner: new Func<[parentNode: string, label: string, owner: string, fuses: number, expiry: bigint], {parentNode: string, label: string, owner: string, fuses: number, expiry: bigint}, string>(
        abi, '0xc658e086'
    ),
    setSubnodeRecord: new Func<[parentNode: string, label: string, owner: string, resolver: string, ttl: bigint, fuses: number, expiry: bigint], {parentNode: string, label: string, owner: string, resolver: string, ttl: bigint, fuses: number, expiry: bigint}, string>(
        abi, '0x24c1af44'
    ),
    setTTL: new Func<[node: string, ttl: bigint], {node: string, ttl: bigint}, []>(
        abi, '0x14ab9038'
    ),
    setUpgradeContract: new Func<[_upgradeAddress: string], {_upgradeAddress: string}, []>(
        abi, '0xb6bcad26'
    ),
    supportsInterface: new Func<[interfaceId: string], {interfaceId: string}, boolean>(
        abi, '0x01ffc9a7'
    ),
    transferOwnership: new Func<[newOwner: string], {newOwner: string}, []>(
        abi, '0xf2fde38b'
    ),
    unwrap: new Func<[parentNode: string, labelhash: string, controller: string], {parentNode: string, labelhash: string, controller: string}, []>(
        abi, '0xd8c9921a'
    ),
    unwrapETH2LD: new Func<[labelhash: string, registrant: string, controller: string], {labelhash: string, registrant: string, controller: string}, []>(
        abi, '0x8b4dfa75'
    ),
    upgrade: new Func<[parentNode: string, label: string, wrappedOwner: string, resolver: string], {parentNode: string, label: string, wrappedOwner: string, resolver: string}, []>(
        abi, '0xee7eba78'
    ),
    upgradeContract: new Func<[], {}, string>(
        abi, '0x1f4e1504'
    ),
    upgradeETH2LD: new Func<[label: string, wrappedOwner: string, resolver: string], {label: string, wrappedOwner: string, resolver: string}, []>(
        abi, '0xe72bf00f'
    ),
    uri: new Func<[tokenId: bigint], {tokenId: bigint}, string>(
        abi, '0x0e89341c'
    ),
    wrap: new Func<[name: string, wrappedOwner: string, resolver: string], {name: string, wrappedOwner: string, resolver: string}, []>(
        abi, '0xeb8ae530'
    ),
    wrapETH2LD: new Func<[label: string, wrappedOwner: string, ownerControlledFuses: number, resolver: string], {label: string, wrappedOwner: string, ownerControlledFuses: number, resolver: string}, []>(
        abi, '0x8cf8b41e'
    ),
}

export class Contract extends ContractBase {

    _tokens(arg0: bigint): Promise<bigint> {
        return this.eth_call(functions._tokens, [arg0])
    }

    allFusesBurned(node: string, fuseMask: number): Promise<boolean> {
        return this.eth_call(functions.allFusesBurned, [node, fuseMask])
    }

    balanceOf(account: string, id: bigint): Promise<bigint> {
        return this.eth_call(functions.balanceOf, [account, id])
    }

    balanceOfBatch(accounts: Array<string>, ids: Array<bigint>): Promise<Array<bigint>> {
        return this.eth_call(functions.balanceOfBatch, [accounts, ids])
    }

    canModifyName(node: string, addr: string): Promise<boolean> {
        return this.eth_call(functions.canModifyName, [node, addr])
    }

    controllers(arg0: string): Promise<boolean> {
        return this.eth_call(functions.controllers, [arg0])
    }

    ens(): Promise<string> {
        return this.eth_call(functions.ens, [])
    }

    getData(id: bigint): Promise<([owner: string, fuses: number, expiry: bigint] & {owner: string, fuses: number, expiry: bigint})> {
        return this.eth_call(functions.getData, [id])
    }

    isApprovedForAll(account: string, operator: string): Promise<boolean> {
        return this.eth_call(functions.isApprovedForAll, [account, operator])
    }

    isWrapped(node: string): Promise<boolean> {
        return this.eth_call(functions.isWrapped, [node])
    }

    metadataService(): Promise<string> {
        return this.eth_call(functions.metadataService, [])
    }

    name(): Promise<string> {
        return this.eth_call(functions.name, [])
    }

    names(arg0: string): Promise<string> {
        return this.eth_call(functions.names, [arg0])
    }

    owner(): Promise<string> {
        return this.eth_call(functions.owner, [])
    }

    ownerOf(id: bigint): Promise<string> {
        return this.eth_call(functions.ownerOf, [id])
    }

    registrar(): Promise<string> {
        return this.eth_call(functions.registrar, [])
    }

    supportsInterface(interfaceId: string): Promise<boolean> {
        return this.eth_call(functions.supportsInterface, [interfaceId])
    }

    upgradeContract(): Promise<string> {
        return this.eth_call(functions.upgradeContract, [])
    }

    uri(tokenId: bigint): Promise<string> {
        return this.eth_call(functions.uri, [tokenId])
    }
}
