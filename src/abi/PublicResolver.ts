import * as ethers from 'ethers'
import {LogEvent, Func, ContractBase} from './abi.support'
import {ABI_JSON} from './PublicResolver.abi'

export const abi = new ethers.Interface(ABI_JSON);

export const events = {
    AuthorisationChanged: new LogEvent<([node: string, owner: string, target: string, isAuthorised: boolean] & {node: string, owner: string, target: string, isAuthorised: boolean})>(
        abi, '0xe1c5610a6e0cbe10764ecd182adcef1ec338dc4e199c99c32ce98f38e12791df'
    ),
    'TextChanged(bytes32,string,string)': new LogEvent<([node: string, indexedKey: string, key: string] & {node: string, indexedKey: string, key: string})>(
        abi, '0xd8c9334b1a9c2f9da342a0a2b32629c1a229b6445dad78947f674b44444a7550'
    ),
    'TextChanged(bytes32,string,string,string)': new LogEvent<([node: string, indexedKey: string, key: string, value: string] & {node: string, indexedKey: string, key: string, value: string})>(
        abi, '0x448bc014f1536726cf8d54ff3d6481ed3cbc683c2591ca204274009afa09b1a1'
    ),
    PubkeyChanged: new LogEvent<([node: string, x: string, y: string] & {node: string, x: string, y: string})>(
        abi, '0x1d6f5e03d3f63eb58751986629a5439baee5079ff04f345becb66e23eb154e46'
    ),
    NameChanged: new LogEvent<([node: string, name: string] & {node: string, name: string})>(
        abi, '0xb7d29e911041e8d9b843369e890bcb72c9388692ba48b65ac54e7214c4c348f7'
    ),
    InterfaceChanged: new LogEvent<([node: string, interfaceID: string, implementer: string] & {node: string, interfaceID: string, implementer: string})>(
        abi, '0x7c69f06bea0bdef565b709e93a147836b0063ba2dd89f02d0b7e8d931e6a6daa'
    ),
    ContenthashChanged: new LogEvent<([node: string, hash: string] & {node: string, hash: string})>(
        abi, '0xe379c1624ed7e714cc0937528a32359d69d5281337765313dba4e081b72d7578'
    ),
    AddrChanged: new LogEvent<([node: string, a: string] & {node: string, a: string})>(
        abi, '0x52d7d861f09ab3d26239d492e8968629f95e9e318cf0b73bfddc441522a15fd2'
    ),
    AddressChanged: new LogEvent<([node: string, coinType: bigint, newAddress: string] & {node: string, coinType: bigint, newAddress: string})>(
        abi, '0x65412581168e88a1e60c6459d7f44ae83ad0832e670826c05a4e2476b57af752'
    ),
    ABIChanged: new LogEvent<([node: string, contentType: bigint] & {node: string, contentType: bigint})>(
        abi, '0xaa121bbeef5f32f5961a2a28966e769023910fc9479059ee3495d4c1a696efe3'
    ),
    VersionChanged: new LogEvent<([node: string, newVersion: bigint] & {node: string, newVersion: bigint})>(
        abi, '0xc6621ccb8f3f5a04bb6502154b2caf6adf5983fe76dfef1cfc9c42e3579db444'
    ),
}

export const functions = {
    supportsInterface: new Func<[interfaceID: string], {interfaceID: string}, boolean>(
        abi, '0x01ffc9a7'
    ),
    setText: new Func<[node: string, key: string, value: string], {node: string, key: string, value: string}, []>(
        abi, '0x10f13a8c'
    ),
    interfaceImplementer: new Func<[node: string, interfaceID: string], {node: string, interfaceID: string}, string>(
        abi, '0x124a319c'
    ),
    ABI: new Func<[node: string, contentTypes: bigint], {node: string, contentTypes: bigint}, [_: bigint, _: string]>(
        abi, '0x2203ab56'
    ),
    setPubkey: new Func<[node: string, x: string, y: string], {node: string, x: string, y: string}, []>(
        abi, '0x29cd62ea'
    ),
    setContenthash: new Func<[node: string, hash: string], {node: string, hash: string}, []>(
        abi, '0x304e6ade'
    ),
    'addr(bytes32)': new Func<[node: string], {node: string}, string>(
        abi, '0x3b3b57de'
    ),
    setAuthorisation: new Func<[node: string, target: string, isAuthorised: boolean], {node: string, target: string, isAuthorised: boolean}, []>(
        abi, '0x3e9ce794'
    ),
    text: new Func<[node: string, key: string], {node: string, key: string}, string>(
        abi, '0x59d1d43c'
    ),
    setABI: new Func<[node: string, contentType: bigint, data: string], {node: string, contentType: bigint, data: string}, []>(
        abi, '0x623195b0'
    ),
    name: new Func<[node: string], {node: string}, string>(
        abi, '0x691f3431'
    ),
    setName: new Func<[node: string, name: string], {node: string, name: string}, []>(
        abi, '0x77372213'
    ),
    'setAddr(bytes32,uint256,bytes)': new Func<[node: string, coinType: bigint, a: string], {node: string, coinType: bigint, a: string}, []>(
        abi, '0x8b95dd71'
    ),
    contenthash: new Func<[node: string], {node: string}, string>(
        abi, '0xbc1c58d1'
    ),
    pubkey: new Func<[node: string], {node: string}, ([x: string, y: string] & {x: string, y: string})>(
        abi, '0xc8690233'
    ),
    'setAddr(bytes32,address)': new Func<[node: string, a: string], {node: string, a: string}, []>(
        abi, '0xd5fa2b00'
    ),
    setInterface: new Func<[node: string, interfaceID: string, implementer: string], {node: string, interfaceID: string, implementer: string}, []>(
        abi, '0xe59d895d'
    ),
    'addr(bytes32,uint256)': new Func<[node: string, coinType: bigint], {node: string, coinType: bigint}, string>(
        abi, '0xf1cb7e06'
    ),
    authorisations: new Func<[_: string, _: string, _: string], {}, boolean>(
        abi, '0xf86bc879'
    ),
}

export class Contract extends ContractBase {

    supportsInterface(interfaceID: string): Promise<boolean> {
        return this.eth_call(functions.supportsInterface, [interfaceID])
    }

    interfaceImplementer(node: string, interfaceID: string): Promise<string> {
        return this.eth_call(functions.interfaceImplementer, [node, interfaceID])
    }

    ABI(node: string, contentTypes: bigint): Promise<[_: bigint, _: string]> {
        return this.eth_call(functions.ABI, [node, contentTypes])
    }

    'addr(bytes32)'(node: string): Promise<string> {
        return this.eth_call(functions['addr(bytes32)'], [node])
    }

    text(node: string, key: string): Promise<string> {
        return this.eth_call(functions.text, [node, key])
    }

    name(node: string): Promise<string> {
        return this.eth_call(functions.name, [node])
    }

    contenthash(node: string): Promise<string> {
        return this.eth_call(functions.contenthash, [node])
    }

    pubkey(node: string): Promise<([x: string, y: string] & {x: string, y: string})> {
        return this.eth_call(functions.pubkey, [node])
    }

    'addr(bytes32,uint256)'(node: string, coinType: bigint): Promise<string> {
        return this.eth_call(functions['addr(bytes32,uint256)'], [node, coinType])
    }

    authorisations(arg0: string, arg1: string, arg2: string): Promise<boolean> {
        return this.eth_call(functions.authorisations, [arg0, arg1, arg2])
    }
}
