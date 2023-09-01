import { useMemo, useState } from 'react'
import { Contract, Interface, InterfaceAbi } from "ethers"
import { getW3E } from '@/store'


const useWriteContract = ({ target, abi, fn } : { target: string, abi: Interface | InterfaceAbi, fn: string }) => {

  const [status, setStatus] = useState<string>()
  const [data, setData] = useState<unknown>()
  /**
   * Hash
   * Track Process
   * Error
   * Success Subscription
   * 
   */

  const write = useMemo(()=>{
    const signer = getW3E.signer()
    if(!signer) return
    const contract = new Contract(target, abi, signer)
    
    return async (args: unknown)=>{
      const tx = await contract[fn](args)
      setStatus('processing')
      const hashdonno = await tx.wait()
      setStatus('Finished')
    }
  
    return 
  },[])

  return { write, status }
}

export default useWriteContract