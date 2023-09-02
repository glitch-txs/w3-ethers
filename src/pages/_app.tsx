import Context from '@/context'
import { createEthersClient } from '@/init'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Injected } from 'w3-evm-react'
import { WalletConnect } from 'w3-evm-walletconnect'

/* WalletConnect Project Id */
const projectId = process.env.NEXT_PUBLIC_PROJECT_ID as string

/* Set up connectors */
const browserWallet = new Injected()
const walletConnect = new WalletConnect({ 
  projectId,
  showQrModal: true,
  optionalChains:[1, 137]
})

const client = createEthersClient({
  connectors: [browserWallet, walletConnect],
  providers:[],
  defaultChain: 1,
  SSR: true
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Context client={client} >
      <Component {...pageProps} />
    </Context>
    )
}
