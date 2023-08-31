import { Provider, BrowserProvider } from 'ethers'
import { Chain, Connector, initW3, getW3, subW3 } from 'w3-evm'
import { FallbackProvider } from 'ethers'
import { setW3E } from '@/store'

type ethersOptions = {
  connectors: Connector[]
  providers: Provider[]
  defaultChain: Chain | number
  SSR: boolean
}

export function createEthersClient(options: ethersOptions){

  const { connectors, defaultChain, SSR, providers} = options
  const w3props = initW3({
    connectors,
    defaultChain,
    SSR,
  })

  const walletProvider = getW3.walletProvider()

  /* if user was connected we create the signer right away */
  if(!SSR && walletProvider){
    const provider = new BrowserProvider(walletProvider)
    provider.getSigner().then(setW3E.signer)
  }

  /* subscribe to the wallet provider to create the signer */
  subW3.walletProvider( newProvider =>{
    if(!newProvider){
      setW3E.signer(undefined)
      return
    }
    const provider = new BrowserProvider(newProvider)
    provider.getSigner().then(setW3E.signer)
  })

  /* Provider can target specific chains */
  if(defaultChain){
    setW3E.provider(new FallbackProvider([
        // Create a FallbackProvider
    ]))
  }

  /* store all provider to create customizable fallback providers */
  setW3E.providers(providers)
  
  return w3props
}