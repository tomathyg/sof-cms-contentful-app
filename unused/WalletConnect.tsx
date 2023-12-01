"use client";
import '../globals.css'
//import { Inter } from 'next/font/google'
import { useState, useEffect } from 'react'
import { ethers } from 'ethers'
import Web3Modal from 'web3modal'
import WalletConnectProvider from '@walletconnect/web3-provider'
import { AccountContext } from '../context/context'
//import 'easymde/dist/easymde.min.css'

//const inter = Inter({ subsets: ['latin'] })

export default function WalletConnector({  }) {
  /* create local state to save account information after signin */
  const [account, setAccount] = useState<String>('');

  /* web3Modal configuration for enabling wallet access */
  async function getWeb3Modal() {
    const web3Modal = new Web3Modal({
      cacheProvider: false,
      providerOptions: {
        walletconnect: {
          package: WalletConnectProvider,
          options: {
            infuraId: "your-infura-id"
          },
        },
      },
    })
    return web3Modal
  }

  /* the connect function uses web3 modal to connect to the user's wallet */
  async function connect() {
    try {
      const web3Modal = await getWeb3Modal()
      const connection = await web3Modal.connect()
      const provider = new ethers.providers.Web3Provider(connection)
      const accounts = await provider.listAccounts()
      setAccount(accounts[0])
      console.log("WALLET:", accounts[0]);
      localStorage.setItem('isWalletConnected', 'true');
      localStorage.setItem('walletAddress', accounts[0]);
    } catch (err) {
      console.log('error:', err)
    }
  }

  function disconnect() {
    setAccount('');
    localStorage.removeItem('walletAddress');
    // Additional steps might be needed here to properly disconnect with the wallet
  }

  useEffect(() => {
    const savedAccount = localStorage.getItem('walletAddress');
    if (savedAccount) {
      setAccount(savedAccount);
    }
  }, []);

  return (
    <AccountContext.Provider value={account}>
      <nav className="nav">
        <div className="header">
          {!account ? (
            <div className="accountInfo">
              <button className='buttonStyle font-sans tracking-wide text-base' onClick={connect}>CONNECT</button>
            </div>
          ) : (
            <>
              <p className="accountInfo">{account}</p>
              <button className='buttonStyle font-sans tracking-wide text-base' onClick={disconnect}>DISCONNECT</button>
            </>
          )}
        </div>
      </nav>
    </AccountContext.Provider>
  )
}