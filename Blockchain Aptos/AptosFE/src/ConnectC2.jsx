import './App.css'
import { useWallet } from "@manahippo/aptos-wallet-adapter"

// # Tương tác aptos: connect ví
function ConnectC2() {
  const { account, connect, wallets, connected, disconnect } = useWallet();

  return (
    <div className="App">
      <div>{account?.address || "0x00"}</div>
      {wallets.map((wallet,i) => {
        const option = wallet.adapter;
        return (
          <button
            onClick={async () => {
              await connect(option.name)
            }}
            key={i}
          >
            {option.name}
          </button>
        )
      })}
    </div>
  )
}

export default ConnectC2
