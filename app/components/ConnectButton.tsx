'use client'
import { useEffect, useState } from 'react';
import { useWeb3Modal, useDisconnect, useWeb3ModalAccount } from '@web3modal/ethers5/react'
//import { useState, useEffect } from 'react';

export default function ConnectButton() {

  /*const { themeMode, themeVariables, setThemeMode, setThemeVariables } = useWeb3ModalTheme()

  setThemeMode('dark')

  setThemeVariables({
    '--w3m-color-mix': '#00BB7F',
    '--w3m-color-mix-strength': 40
  })*/

  const { open } = useWeb3Modal();
  const { disconnect } = useDisconnect();
  const { isConnected } = useWeb3ModalAccount();

  /*const [walletConnected, setWalletConnected] = useState(false);

  useEffect(() => {
    setWalletConnected(true);
  }, []);*/

  const handleButtonClick = async () => {
    try {
      if (isConnected) {
        await disconnect();  // Await the disconnect operation
      } else {
        await open();       // Await the connect operation
      }
    } catch (error) {
      console.error('Error with wallet connection/disconnection:', error);
    }
  };

  // Render nothing on the server
  /*if (!walletConnected) {
    return null;
  }*/

  return (
    <>
      <button 
        className={`font-sans text-xsm xsm:text-base uppercase border border-off-white rounded-lg py-2 px-4 ${isConnected ? 'hidden' : ''}`} 
        onClick={handleButtonClick}
      >
        Connect
      </button>

      <button 
        className={`font-sans text-xsm xsm:text-base uppercase border border-off-white rounded-lg py-2 px-4 bg-orange ${!isConnected ? 'hidden' : ''}`} 
        onClick={handleButtonClick}
      >
        Disconnect
      </button>
    </>
  );
}
