import * as ethers from 'ethers'
import {LogEvent, Func, ContractBase} from './abi.support'
import {ABI_JSON} from './EthRegistrarController.abi'

export const abi = new ethers.Interface(ABI_JSON);

export const events = {
    NameRegistered: new LogEvent<([name: string, label: string, owner: string, baseCost: bigint, premium: bigint, expires: bigint] & {name: string, label: string, owner: string, baseCost: bigint, premium: bigint, expires: bigint})>(
        abi, '0x69e37f151eb98a09618ddaa80c8cfaf1ce5996867c489f45b555b412271ebf27'
    ),
    NameRenewed: new LogEvent<([name: string, label: string, cost: bigint, expires: bigint] & {name: string, label: string, cost: bigint, expires: bigint})>(
        abi, '0x3da24c024582931cfaf8267d8ed24d13a82a8068d5bd337d30ec45cea4e506ae'
    ),
    OwnershipTransferred: new LogEvent<([previousOwner: string, newOwner: string] & {previousOwner: string, newOwner: string})>(
        abi, '0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0'
    ),
}

export const functions = {
    MIN_REGISTRATION_DURATION: new Func<[], {}, bigint>(
        abi, '0x8a95b09f'
    ),
    available: new Func<[name: string], {name: string}, boolean>(
        abi, '0xaeb8ce9b'
    ),
    commit: new Func<[commitment: string], {commitment: string}, []>(
        abi, '0xf14fcbc8'
    ),
    commitments: new Func<[_: string], {}, bigint>(
        abi, '0x839df945'
    ),
    makeCommitment: new Func<[name: string, owner: string, duration: bigint, secret: string, resolver: string, data: Array<string>, reverseRecord: boolean, ownerControlledFuses: number], {name: string, owner: string, duration: bigint, secret: string, resolver: string, data: Array<string>, reverseRecord: boolean, ownerControlledFuses: number}, string>(
        abi, '0x65a69dcf'
    ),
    maxCommitmentAge: new Func<[], {}, bigint>(
        abi, '0xce1e09c0'
    ),
    minCommitmentAge: new Func<[], {}, bigint>(
        abi, '0x8d839ffe'
    ),
    nameWrapper: new Func<[], {}, string>(
        abi, '0xa8e5fbc0'
    ),
    owner: new Func<[], {}, string>(
        abi, '0x8da5cb5b'
    ),
    prices: new Func<[], {}, string>(
        abi, '0xd3419bf3'
    ),
    recoverFunds: new Func<[_token: string, _to: string, _amount: bigint], {_token: string, _to: string, _amount: bigint}, []>(
        abi, '0x5d3590d5'
    ),
    register: new Func<[name: string, owner: string, duration: bigint, secret: string, resolver: string, data: Array<string>, reverseRecord: boolean, ownerControlledFuses: number], {name: string, owner: string, duration: bigint, secret: string, resolver: string, data: Array<string>, reverseRecord: boolean, ownerControlledFuses: number}, []>(
        abi, '0x74694a2b'
    ),
    renew: new Func<[name: string, duration: bigint], {name: string, duration: bigint}, []>(
        abi, '0xacf1a841'
    ),
    renounceOwnership: new Func<[], {}, []>(
        abi, '0x715018a6'
    ),
    rentPrice: new Func<[name: string, duration: bigint], {name: string, duration: bigint}, ([base: bigint, premium: bigint] & {base: bigint, premium: bigint})>(
        abi, '0x83e7f6ff'
    ),
    reverseRegistrar: new Func<[], {}, string>(
        abi, '0x80869853'
    ),
    supportsInterface: new Func<[interfaceID: string], {interfaceID: string}, boolean>(
        abi, '0x01ffc9a7'
    ),
    transferOwnership: new Func<[newOwner: string], {newOwner: string}, []>(
        abi, '0xf2fde38b'
    ),
    valid: new Func<[name: string], {name: string}, boolean>(
        abi, '0x9791c097'
    ),
    withdraw: new Func<[], {}, []>(
        abi, '0x3ccfd60b'
    ),
}

export class Contract extends ContractBase {

    MIN_REGISTRATION_DURATION(): Promise<bigint> {
        return this.eth_call(functions.MIN_REGISTRATION_DURATION, [])
    }

    available(name: string): Promise<boolean> {
        return this.eth_call(functions.available, [name])
    }

    commitments(arg0: string): Promise<bigint> {
        return this.eth_call(functions.commitments, [arg0])
    }

    makeCommitment(name: string, owner: string, duration: bigint, secret: string, resolver: string, data: Array<string>, reverseRecord: boolean, ownerControlledFuses: number): Promise<string> {
        return this.eth_call(functions.makeCommitment, [name, owner, duration, secret, resolver, data, reverseRecord, ownerControlledFuses])
    }

    maxCommitmentAge(): Promise<bigint> {
        return this.eth_call(functions.maxCommitmentAge, [])
    }

    minCommitmentAge(): Promise<bigint> {
        return this.eth_call(functions.minCommitmentAge, [])
    }

    nameWrapper(): Promise<string> {
        return this.eth_call(functions.nameWrapper, [])
    }

    owner(): Promise<string> {
        return this.eth_call(functions.owner, [])
    }

    prices(): Promise<string> {
        return this.eth_call(functions.prices, [])
    }

    rentPrice(name: string, duration: bigint): Promise<([base: bigint, premium: bigint] & {base: bigint, premium: bigint})> {
        return this.eth_call(functions.rentPrice, [name, duration])
    }

    reverseRegistrar(): Promise<string> {
        return this.eth_call(functions.reverseRegistrar, [])
    }

    supportsInterface(interfaceID: string): Promise<boolean> {
        return this.eth_call(functions.supportsInterface, [interfaceID])
    }

    valid(name: string): Promise<boolean> {
        return this.eth_call(functions.valid, [name])
    }
}
