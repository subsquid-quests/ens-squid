import * as ethers from 'ethers'
import {LogEvent, Func, ContractBase} from './abi.support'
import {ABI_JSON} from './AuctionRegistrar.abi'

export const abi = new ethers.Interface(ABI_JSON);

export const events = {
    AuctionStarted: new LogEvent<([hash: string, registrationDate: bigint] & {hash: string, registrationDate: bigint})>(
        abi, '0x87e97e825a1d1fa0c54e1d36c7506c1dea8b1efd451fe68b000cf96f7cf40003'
    ),
    NewBid: new LogEvent<([hash: string, bidder: string, deposit: bigint] & {hash: string, bidder: string, deposit: bigint})>(
        abi, '0xb556ff269c1b6714f432c36431e2041d28436a73b6c3f19c021827bbdc6bfc29'
    ),
    BidRevealed: new LogEvent<([hash: string, owner: string, value: bigint, status: number] & {hash: string, owner: string, value: bigint, status: number})>(
        abi, '0x7b6c4b278d165a6b33958f8ea5dfb00c8c9d4d0acf1985bef5d10786898bc3e7'
    ),
    HashRegistered: new LogEvent<([hash: string, owner: string, value: bigint, registrationDate: bigint] & {hash: string, owner: string, value: bigint, registrationDate: bigint})>(
        abi, '0x0f0c27adfd84b60b6f456b0e87cdccb1e5fb9603991588d87fa99f5b6b61e670'
    ),
    HashReleased: new LogEvent<([hash: string, value: bigint] & {hash: string, value: bigint})>(
        abi, '0x292b79b9246fa2c8e77d3fe195b251f9cb839d7d038e667c069ee7708c631e16'
    ),
    HashInvalidated: new LogEvent<([hash: string, name: string, value: bigint, registrationDate: bigint] & {hash: string, name: string, value: bigint, registrationDate: bigint})>(
        abi, '0x1f9c649fe47e58bb60f4e52f0d90e4c47a526c9f90c5113df842c025970b66ad'
    ),
}

export const functions = {
    releaseDeed: new Func<[_hash: string], {_hash: string}, []>(
        abi, '0x0230a07c'
    ),
    getAllowedTime: new Func<[_hash: string], {_hash: string}, bigint>(
        abi, '0x13c89a8f'
    ),
    invalidateName: new Func<[unhashedName: string], {unhashedName: string}, []>(
        abi, '0x15f73331'
    ),
    shaBid: new Func<[hash: string, owner: string, value: bigint, salt: string], {hash: string, owner: string, value: bigint, salt: string}, string>(
        abi, '0x22ec1244'
    ),
    cancelBid: new Func<[bidder: string, seal: string], {bidder: string, seal: string}, []>(
        abi, '0x2525f5c1'
    ),
    entries: new Func<[_hash: string], {_hash: string}, [_: number, _: string, _: bigint, _: bigint, _: bigint]>(
        abi, '0x267b6922'
    ),
    ens: new Func<[], {}, string>(
        abi, '0x3f15457f'
    ),
    unsealBid: new Func<[_hash: string, _value: bigint, _salt: string], {_hash: string, _value: bigint, _salt: string}, []>(
        abi, '0x47872b42'
    ),
    transferRegistrars: new Func<[_hash: string], {_hash: string}, []>(
        abi, '0x5ddae283'
    ),
    sealedBids: new Func<[_: string, _: string], {}, string>(
        abi, '0x5e431709'
    ),
    state: new Func<[_hash: string], {_hash: string}, number>(
        abi, '0x61d585da'
    ),
    transfer: new Func<[_hash: string, newOwner: string], {_hash: string, newOwner: string}, []>(
        abi, '0x79ce9fac'
    ),
    isAllowed: new Func<[_hash: string, _timestamp: bigint], {_hash: string, _timestamp: bigint}, boolean>(
        abi, '0x93503337'
    ),
    finalizeAuction: new Func<[_hash: string], {_hash: string}, []>(
        abi, '0x983b94fb'
    ),
    registryStarted: new Func<[], {}, bigint>(
        abi, '0x9c67f06f'
    ),
    launchLength: new Func<[], {}, number>(
        abi, '0xae1a0b0c'
    ),
    newBid: new Func<[sealedBid: string], {sealedBid: string}, []>(
        abi, '0xce92dced'
    ),
    eraseNode: new Func<[labels: Array<string>], {labels: Array<string>}, []>(
        abi, '0xde10f04b'
    ),
    startAuctions: new Func<[_hashes: Array<string>], {_hashes: Array<string>}, []>(
        abi, '0xe27fe50f'
    ),
    acceptRegistrarTransfer: new Func<[hash: string, deed: string, registrationDate: bigint], {hash: string, deed: string, registrationDate: bigint}, []>(
        abi, '0xea9e107a'
    ),
    startAuction: new Func<[_hash: string], {_hash: string}, []>(
        abi, '0xede8acdb'
    ),
    rootNode: new Func<[], {}, string>(
        abi, '0xfaff50a8'
    ),
    startAuctionsAndBid: new Func<[hashes: Array<string>, sealedBid: string], {hashes: Array<string>, sealedBid: string}, []>(
        abi, '0xfebefd61'
    ),
}

export class Contract extends ContractBase {

    getAllowedTime(_hash: string): Promise<bigint> {
        return this.eth_call(functions.getAllowedTime, [_hash])
    }

    shaBid(hash: string, owner: string, value: bigint, salt: string): Promise<string> {
        return this.eth_call(functions.shaBid, [hash, owner, value, salt])
    }

    entries(_hash: string): Promise<[_: number, _: string, _: bigint, _: bigint, _: bigint]> {
        return this.eth_call(functions.entries, [_hash])
    }

    ens(): Promise<string> {
        return this.eth_call(functions.ens, [])
    }

    sealedBids(arg0: string, arg1: string): Promise<string> {
        return this.eth_call(functions.sealedBids, [arg0, arg1])
    }

    state(_hash: string): Promise<number> {
        return this.eth_call(functions.state, [_hash])
    }

    isAllowed(_hash: string, _timestamp: bigint): Promise<boolean> {
        return this.eth_call(functions.isAllowed, [_hash, _timestamp])
    }

    registryStarted(): Promise<bigint> {
        return this.eth_call(functions.registryStarted, [])
    }

    launchLength(): Promise<number> {
        return this.eth_call(functions.launchLength, [])
    }

    rootNode(): Promise<string> {
        return this.eth_call(functions.rootNode, [])
    }
}
