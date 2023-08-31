import Context from '@/context'
import { createEthersClient } from '@/init'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Injected } from 'w3-evm-react'
import { WalletConnect } from 'w3-evm-walletconnect'

/* Icons */
import walletconnect from 'public/walletconnect.svg'
import wallet from 'public/extension-wallet.png'

/* WalletConnect Project Id */
const projectId = 'YOUR_PROJECT_ID'

/* Set up connectors */
const browserWallet = new Injected({ icon: wallet })
const walletConnect = new WalletConnect({ 
  projectId,
  icon: walletconnect,
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
