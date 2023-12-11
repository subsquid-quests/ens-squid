import * as ethers from 'ethers'
import {LogEvent, Func, ContractBase} from './abi.support'
import {ABI_JSON} from './Deed.abi'

export const abi = new ethers.Interface(ABI_JSON);

export const events = {
    OwnerChanged: new LogEvent<([newOwner: string] & {newOwner: string})>(
        abi, '0xa2ea9883a321a3e97b8266c2b078bfeec6d50c711ed71f874a90d500ae2eaf36'
    ),
    DeedClosed: new LogEvent<[]>(
        abi, '0xbb2ce2f51803bba16bc85282b47deeea9a5c6223eabea1077be696b3f265cf13'
    ),
}

export const functions = {
    creationDate: new Func<[], {}, bigint>(
        abi, '0x05b34410'
    ),
    destroyDeed: new Func<[], {}, []>(
        abi, '0x0b5ab3d5'
    ),
    setOwner: new Func<[newOwner: string], {newOwner: string}, []>(
        abi, '0x13af4035'
    ),
    registrar: new Func<[], {}, string>(
        abi, '0x2b20e397'
    ),
    value: new Func<[], {}, bigint>(
        abi, '0x3fa4f245'
    ),
    previousOwner: new Func<[], {}, string>(
        abi, '0x674f220f'
    ),
    owner: new Func<[], {}, string>(
        abi, '0x8da5cb5b'
    ),
    setBalance: new Func<[newValue: bigint, throwOnFailure: boolean], {newValue: bigint, throwOnFailure: boolean}, []>(
        abi, '0xb0c80972'
    ),
    closeDeed: new Func<[refundRatio: bigint], {refundRatio: bigint}, []>(
        abi, '0xbbe42771'
    ),
    setRegistrar: new Func<[newRegistrar: string], {newRegistrar: string}, []>(
        abi, '0xfaab9d39'
    ),
}

export class Contract extends ContractBase {

    creationDate(): Promise<bigint> {
        return this.eth_call(functions.creationDate, [])
    }

    registrar(): Promise<string> {
        return this.eth_call(functions.registrar, [])
    }

    value(): Promise<bigint> {
        return this.eth_call(functions.value, [])
    }

    previousOwner(): Promise<string> {
        return this.eth_call(functions.previousOwner, [])
    }

    owner(): Promise<string> {
        return this.eth_call(functions.owner, [])
    }
}
