import * as ethers from 'ethers'
import {LogEvent, Func, ContractBase} from './abi.support'
import {ABI_JSON} from './EthRegistrarControllerOld.abi'

export const abi = new ethers.Interface(ABI_JSON);

export const events = {
    NameRegistered: new LogEvent<([name: string, label: string, owner: string, cost: bigint, expires: bigint] & {name: string, label: string, owner: string, cost: bigint, expires: bigint})>(
        abi, '0xca6abbe9d7f11422cb6ca7629fbf6fe9efb1c621f71ce8f02b9f2a230097404f'
    ),
    NameRenewed: new LogEvent<([name: string, label: string, cost: bigint, expires: bigint] & {name: string, label: string, cost: bigint, expires: bigint})>(
        abi, '0x3da24c024582931cfaf8267d8ed24d13a82a8068d5bd337d30ec45cea4e506ae'
    ),
    NewPriceOracle: new LogEvent<([oracle: string] & {oracle: string})>(
        abi, '0xf261845a790fe29bbd6631e2ca4a5bdc83e6eed7c3271d9590d97287e00e9123'
    ),
    OwnershipTransferred: new LogEvent<([previousOwner: string, newOwner: string] & {previousOwner: string, newOwner: string})>(
        abi, '0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0'
    ),
}

export const functions = {
    supportsInterface: new Func<[interfaceID: string], {interfaceID: string}, boolean>(
        abi, '0x01ffc9a7'
    ),
    withdraw: new Func<[], {}, []>(
        abi, '0x3ccfd60b'
    ),
    setPriceOracle: new Func<[_prices: string], {_prices: string}, []>(
        abi, '0x530e784f'
    ),
    renounceOwnership: new Func<[], {}, []>(
        abi, '0x715018a6'
    ),
    setCommitmentAges: new Func<[_minCommitmentAge: bigint, _maxCommitmentAge: bigint], {_minCommitmentAge: bigint, _maxCommitmentAge: bigint}, []>(
        abi, '0x7e324479'
    ),
    commitments: new Func<[_: string], {}, bigint>(
        abi, '0x839df945'
    ),
    rentPrice: new Func<[name: string, duration: bigint], {name: string, duration: bigint}, bigint>(
        abi, '0x83e7f6ff'
    ),
    register: new Func<[name: string, owner: string, duration: bigint, secret: string], {name: string, owner: string, duration: bigint, secret: string}, []>(
        abi, '0x85f6d155'
    ),
    MIN_REGISTRATION_DURATION: new Func<[], {}, bigint>(
        abi, '0x8a95b09f'
    ),
    minCommitmentAge: new Func<[], {}, bigint>(
        abi, '0x8d839ffe'
    ),
    owner: new Func<[], {}, string>(
        abi, '0x8da5cb5b'
    ),
    isOwner: new Func<[], {}, boolean>(
        abi, '0x8f32d59b'
    ),
    valid: new Func<[name: string], {name: string}, boolean>(
        abi, '0x9791c097'
    ),
    renew: new Func<[name: string, duration: bigint], {name: string, duration: bigint}, []>(
        abi, '0xacf1a841'
    ),
    available: new Func<[name: string], {name: string}, boolean>(
        abi, '0xaeb8ce9b'
    ),
    maxCommitmentAge: new Func<[], {}, bigint>(
        abi, '0xce1e09c0'
    ),
    commit: new Func<[commitment: string], {commitment: string}, []>(
        abi, '0xf14fcbc8'
    ),
    transferOwnership: new Func<[newOwner: string], {newOwner: string}, []>(
        abi, '0xf2fde38b'
    ),
    makeCommitment: new Func<[name: string, owner: string, secret: string], {name: string, owner: string, secret: string}, string>(
        abi, '0xf49826be'
    ),
}

export class Contract extends ContractBase {

    supportsInterface(interfaceID: string): Promise<boolean> {
        return this.eth_call(functions.supportsInterface, [interfaceID])
    }

    commitments(arg0: string): Promise<bigint> {
        return this.eth_call(functions.commitments, [arg0])
    }

    rentPrice(name: string, duration: bigint): Promise<bigint> {
        return this.eth_call(functions.rentPrice, [name, duration])
    }

    MIN_REGISTRATION_DURATION(): Promise<bigint> {
        return this.eth_call(functions.MIN_REGISTRATION_DURATION, [])
    }

    minCommitmentAge(): Promise<bigint> {
        return this.eth_call(functions.minCommitmentAge, [])
    }

    owner(): Promise<string> {
        return this.eth_call(functions.owner, [])
    }

    isOwner(): Promise<boolean> {
        return this.eth_call(functions.isOwner, [])
    }

    valid(name: string): Promise<boolean> {
        return this.eth_call(functions.valid, [name])
    }

    available(name: string): Promise<boolean> {
        return this.eth_call(functions.available, [name])
    }

    maxCommitmentAge(): Promise<bigint> {
        return this.eth_call(functions.maxCommitmentAge, [])
    }

    makeCommitment(name: string, owner: string, secret: string): Promise<string> {
        return this.eth_call(functions.makeCommitment, [name, owner, secret])
    }
}
