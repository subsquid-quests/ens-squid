import * as ethers from 'ethers'
import {LogEvent, Func, ContractBase} from './abi.support'
import {ABI_JSON} from './BaseRegistrar.abi'

export const abi = new ethers.Interface(ABI_JSON);

export const events = {
    ControllerAdded: new LogEvent<([controller: string] & {controller: string})>(
        abi, '0x0a8bb31534c0ed46f380cb867bd5c803a189ced9a764e30b3a4991a9901d7474'
    ),
    ControllerRemoved: new LogEvent<([controller: string] & {controller: string})>(
        abi, '0x33d83959be2573f5453b12eb9d43b3499bc57d96bd2f067ba44803c859e81113'
    ),
    NameMigrated: new LogEvent<([id: bigint, owner: string, expires: bigint] & {id: bigint, owner: string, expires: bigint})>(
        abi, '0xea3d7e1195a15d2ddcd859b01abd4c6b960fa9f9264e499a70a90c7f0c64b717'
    ),
    NameRegistered: new LogEvent<([id: bigint, owner: string, expires: bigint] & {id: bigint, owner: string, expires: bigint})>(
        abi, '0xb3d987963d01b2f68493b4bdb130988f157ea43070d4ad840fee0466ed9370d9'
    ),
    NameRenewed: new LogEvent<([id: bigint, expires: bigint] & {id: bigint, expires: bigint})>(
        abi, '0x9b87a00e30f1ac65d898f070f8a3488fe60517182d0a2098e1b4b93a54aa9bd6'
    ),
    OwnershipTransferred: new LogEvent<([previousOwner: string, newOwner: string] & {previousOwner: string, newOwner: string})>(
        abi, '0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0'
    ),
    Transfer: new LogEvent<([from: string, to: string, tokenId: bigint] & {from: string, to: string, tokenId: bigint})>(
        abi, '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef'
    ),
    Approval: new LogEvent<([owner: string, approved: string, tokenId: bigint] & {owner: string, approved: string, tokenId: bigint})>(
        abi, '0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925'
    ),
    ApprovalForAll: new LogEvent<([owner: string, operator: string, approved: boolean] & {owner: string, operator: string, approved: boolean})>(
        abi, '0x17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31'
    ),
}

export const functions = {
    supportsInterface: new Func<[interfaceID: string], {interfaceID: string}, boolean>(
        abi, '0x01ffc9a7'
    ),
    getApproved: new Func<[tokenId: bigint], {tokenId: bigint}, string>(
        abi, '0x081812fc'
    ),
    approve: new Func<[to: string, tokenId: bigint], {to: string, tokenId: bigint}, []>(
        abi, '0x095ea7b3'
    ),
    transferFrom: new Func<[from: string, to: string, tokenId: bigint], {from: string, to: string, tokenId: bigint}, []>(
        abi, '0x23b872dd'
    ),
    reclaim: new Func<[id: bigint, owner: string], {id: bigint, owner: string}, []>(
        abi, '0x28ed4f6c'
    ),
    ens: new Func<[], {}, string>(
        abi, '0x3f15457f'
    ),
    'safeTransferFrom(address,address,uint256)': new Func<[from: string, to: string, tokenId: bigint], {from: string, to: string, tokenId: bigint}, []>(
        abi, '0x42842e0e'
    ),
    transferPeriodEnds: new Func<[], {}, bigint>(
        abi, '0x4ae05da7'
    ),
    setResolver: new Func<[resolver: string], {resolver: string}, []>(
        abi, '0x4e543b26'
    ),
    ownerOf: new Func<[tokenId: bigint], {tokenId: bigint}, string>(
        abi, '0x6352211e'
    ),
    MIGRATION_LOCK_PERIOD: new Func<[], {}, bigint>(
        abi, '0x6b1bd1c5'
    ),
    balanceOf: new Func<[owner: string], {owner: string}, bigint>(
        abi, '0x70a08231'
    ),
    renounceOwnership: new Func<[], {}, []>(
        abi, '0x715018a6'
    ),
    owner: new Func<[], {}, string>(
        abi, '0x8da5cb5b'
    ),
    isOwner: new Func<[], {}, boolean>(
        abi, '0x8f32d59b'
    ),
    available: new Func<[id: bigint], {id: bigint}, boolean>(
        abi, '0x96e494e8'
    ),
    setApprovalForAll: new Func<[to: string, approved: boolean], {to: string, approved: boolean}, []>(
        abi, '0xa22cb465'
    ),
    addController: new Func<[controller: string], {controller: string}, []>(
        abi, '0xa7fc7a07'
    ),
    previousRegistrar: new Func<[], {}, string>(
        abi, '0xab14ec59'
    ),
    'safeTransferFrom(address,address,uint256,bytes)': new Func<[from: string, to: string, tokenId: bigint, _data: string], {from: string, to: string, tokenId: bigint, _data: string}, []>(
        abi, '0xb88d4fde'
    ),
    GRACE_PERIOD: new Func<[], {}, bigint>(
        abi, '0xc1a287e2'
    ),
    renew: new Func<[id: bigint, duration: bigint], {id: bigint, duration: bigint}, bigint>(
        abi, '0xc475abff'
    ),
    nameExpires: new Func<[id: bigint], {id: bigint}, bigint>(
        abi, '0xd6e4fa86'
    ),
    controllers: new Func<[_: string], {}, boolean>(
        abi, '0xda8c229e'
    ),
    baseNode: new Func<[], {}, string>(
        abi, '0xddf7fcb0'
    ),
    isApprovedForAll: new Func<[owner: string, operator: string], {owner: string, operator: string}, boolean>(
        abi, '0xe985e9c5'
    ),
    acceptRegistrarTransfer: new Func<[label: string, deed: string, _: bigint], {label: string, deed: string}, []>(
        abi, '0xea9e107a'
    ),
    transferOwnership: new Func<[newOwner: string], {newOwner: string}, []>(
        abi, '0xf2fde38b'
    ),
    removeController: new Func<[controller: string], {controller: string}, []>(
        abi, '0xf6a74ed7'
    ),
    register: new Func<[id: bigint, owner: string, duration: bigint], {id: bigint, owner: string, duration: bigint}, bigint>(
        abi, '0xfca247ac'
    ),
}

export class Contract extends ContractBase {

    supportsInterface(interfaceID: string): Promise<boolean> {
        return this.eth_call(functions.supportsInterface, [interfaceID])
    }

    getApproved(tokenId: bigint): Promise<string> {
        return this.eth_call(functions.getApproved, [tokenId])
    }

    ens(): Promise<string> {
        return this.eth_call(functions.ens, [])
    }

    transferPeriodEnds(): Promise<bigint> {
        return this.eth_call(functions.transferPeriodEnds, [])
    }

    ownerOf(tokenId: bigint): Promise<string> {
        return this.eth_call(functions.ownerOf, [tokenId])
    }

    MIGRATION_LOCK_PERIOD(): Promise<bigint> {
        return this.eth_call(functions.MIGRATION_LOCK_PERIOD, [])
    }

    balanceOf(owner: string): Promise<bigint> {
        return this.eth_call(functions.balanceOf, [owner])
    }

    owner(): Promise<string> {
        return this.eth_call(functions.owner, [])
    }

    isOwner(): Promise<boolean> {
        return this.eth_call(functions.isOwner, [])
    }

    available(id: bigint): Promise<boolean> {
        return this.eth_call(functions.available, [id])
    }

    previousRegistrar(): Promise<string> {
        return this.eth_call(functions.previousRegistrar, [])
    }

    GRACE_PERIOD(): Promise<bigint> {
        return this.eth_call(functions.GRACE_PERIOD, [])
    }

    nameExpires(id: bigint): Promise<bigint> {
        return this.eth_call(functions.nameExpires, [id])
    }

    controllers(arg0: string): Promise<boolean> {
        return this.eth_call(functions.controllers, [arg0])
    }

    baseNode(): Promise<string> {
        return this.eth_call(functions.baseNode, [])
    }

    isApprovedForAll(owner: string, operator: string): Promise<boolean> {
        return this.eth_call(functions.isApprovedForAll, [owner, operator])
    }
}
