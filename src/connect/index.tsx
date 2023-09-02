import { useConnect } from 'w3-evm-react'

export default function Connect() {

  const { connectors, connectW3, disconnectW3, wait } = useConnect()
  
  return (
    <>
      {connectors.map((connector) =>(
      <button key={connector.id} disabled={Boolean(wait)} onClick={()=>connectW3({ connector })}>
        {connector.icon && <img src={connector.icon} alt={connector.name} />}
        {connector.name}
      </button>
      ))}
    </>
  )
}