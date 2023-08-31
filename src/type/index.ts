import type { Provider, Signer } from 'ethers'

export type Client = {
  providers?: Provider[],
  provider?: Provider
  signer?: Signer
}