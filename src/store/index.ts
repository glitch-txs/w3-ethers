import { createStore } from 'vanilla-cafe'
import type { Provider, Signer } from 'ethers'

type EthersStore = {
  /**
   * Providers selected on initial configuration
   */
  providers: Provider[]
  /**
   * Fallback provider
   */
  provider?: Provider
  /**
   * Signer
   */
  signer?: Signer
}

export const { set: setW3E, get: getW3E, sub: subW3E } = createStore<EthersStore>({
  providers:[],
  provider: undefined,
  signer: undefined
})