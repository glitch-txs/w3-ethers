import { Client } from '@/type'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactNode } from 'react'
import { W3 } from 'w3-evm-react'
import type { Connector } from 'w3-evm'

const queryClient = new QueryClient()

const Context = ({ children, client }: { children: ReactNode, client?: { connectors: Connector[] } }) => {

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <W3 {...client} />
    </QueryClientProvider>
  )
}

export default Context