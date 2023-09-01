import { getW3E } from "@/store"
import { Contract, Interface, InterfaceAbi } from "ethers"
import { getW3 } from "w3-evm"

export function writeContract(target: string, abi: Interface | InterfaceAbi){
  const signer = getW3E.signer()
  if(!signer) throw new Error('writeContract function was called but no user is not connected')

  return new Contract(target, abi, signer)
}

export const readContract = {

}