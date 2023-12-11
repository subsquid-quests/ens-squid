import * as ethers from 'ethers'
import {LogEvent, Func, ContractBase} from './abi.support'
import {ABI_JSON} from './Registry.abi'

export const abi = new ethers.Interface(ABI_JSON);

export const events = {
    Transfer: new LogEvent<([node: string, owner: string] & {node: string, owner: string})>(
        abi, '0xd4735d920b0f87494915f556dd9b54c8f309026070caea5c737245152564d266'
    ),
    NewOwner: new LogEvent<([node: string, label: string, owner: string] & {node: string, label: string, owner: string})>(
        abi, '0xce0457fe73731f824cc272376169235128c118b49d344817417c6d108d155e82'
    ),
    NewResolver: new LogEvent<([node: string, resolver: string] & {node: string, resolver: string})>(
        abi, '0x335721b01866dc23fbee8b6b2c7b1e14d6f05c28cd35a2c934239f94095602a0'
    ),
    NewTTL: new LogEvent<([node: string, ttl: bigint] & {node: string, ttl: bigint})>(
        abi, '0x1d4f9bbfc9cab89d66e1a1562f2233ccbf1308cb4f63de2ead5787adddb8fa68'
    ),
}

export const functions = {
    resolver: new Func<[node: string], {node: string}, string>(
        abi, '0x0178b8bf'
    ),
    owner: new Func<[node: string], {node: string}, string>(
        abi, '0x02571be3'
    ),
    setSubnodeOwner: new Func<[node: string, label: string, owner: string], {node: string, label: string, owner: string}, []>(
        abi, '0x06ab5923'
    ),
    setTTL: new Func<[node: string, ttl: bigint], {node: string, ttl: bigint}, []>(
        abi, '0x14ab9038'
    ),
    ttl: new Func<[node: string], {node: string}, bigint>(
        abi, '0x16a25cbd'
    ),
    setResolver: new Func<[node: string, resolver: string], {node: string, resolver: string}, []>(
        abi, '0x1896f70a'
    ),
    setOwner: new Func<[node: string, owner: string], {node: string, owner: string}, []>(
        abi, '0x5b0fc9c3'
    ),
}

export class Contract extends ContractBase {

    resolver(node: string): Promise<string> {
        return this.eth_call(functions.resolver, [node])
    }

    owner(node: string): Promise<string> {
        return this.eth_call(functions.owner, [node])
    }

    ttl(node: string): Promise<bigint> {
        return this.eth_call(functions.ttl, [node])
    }
}
