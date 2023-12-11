import ethUtil from "ethereumjs-util";
import { ethers } from "ethers";

export const ETH_NODE =
  "93cdeb708b7545dc668eb9280176169d1c33cfd8ed6f04690a0bcc88a93fc4ae";
export const ROOT_NODE =
  "0x0000000000000000000000000000000000000000000000000000000000000000";
export const EMPTY_ADDRESS = "0x0000000000000000000000000000000000000000";

export function makeSubnode(node: string, label: string): string {
  // Concatenate the byte arrays
  const concatenatedArray = new Uint8Array(
    byteArrayFromHex(node.slice(2)).length +
      byteArrayFromHex(label.slice(2)).length
  );
  concatenatedArray.set(byteArrayFromHex(node.slice(2)), 0);
  concatenatedArray.set(
    byteArrayFromHex(label.slice(2)),
    byteArrayFromHex(node.slice(2)).length
  );
  // Calculate the keccak256 hash
  return ethers.keccak256(concatenatedArray);
}

export type ByteArray = Uint8Array;

export function concat(a: ByteArray, b: ByteArray): ByteArray {
  let out = new Uint8Array(a.length + b.length);
  for (let i = 0; i < a.length; i++) {
    out[i] = a[i];
  }
  for (let j = 0; j < b.length; j++) {
    out[a.length + j] = b[j];
  }
  return out;
}

export function createEventID(blockNumber: number, logIndex: number): string {
  return `${blockNumber}-${logIndex}`;
}

export function checkValidLabel(name: string, ctx: any): boolean {
  for (let i = 0; i < name.length; i++) {
    let c = name.charCodeAt(i);
    if (c === 0) {
      // ctx.log.warn("Invalid label '{}' contained null byte. Skipping.", [name]);
      return false;
    } else if (c === 46) {
      ctx.log.warn(
        "Invalid label '{}' contained separator char '.'. Skipping.",
        [name]
      );
      return false;
    }
  }

  return true;
}

export function byteArrayFromHex(s: string): ByteArray {
  if (s.length % 2 !== 0) {
    throw new TypeError("Hex string must have an even number of characters");
  }
  const out = new Uint8Array(s.length / 2);
  for (let i = 0; i < s.length; i += 2) {
    const byte = parseInt(s.substring(i, i + 2), 16);
    if (isNaN(byte)) {
      throw new TypeError(
        `Invalid hexadecimal character in input at position ${i}: ${s.substring(
          i,
          i + 2
        )}`
      );
    }
    out[i / 2] = byte;
  }
  return <ByteArray>out;
}

export function uint256ToByteArray(i: BigInt): Uint8Array {
  const hex = i.toString(16).padStart(64, "0");
  return byteArrayFromHex(hex);
}

export function uint8ArrayToHex(uint8Array: Uint8Array): string {
  return Array.from(uint8Array, (byte) => {
    return ("0" + (byte & 0xff).toString(16)).slice(-2);
  }).join("");
}

// Define byteArrayToHex function
export function byteArrayToHex(byteArray: ByteArray): string {
  let hexString = "";
  for (const byte of byteArray) {
    hexString += byte.toString(16).padStart(2, "0");
  }
  return hexString;
}
