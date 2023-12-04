"use client"
import React, { ReactNode } from 'react';
import { createWeb3Modal, defaultConfig } from '@web3modal/ethers5/react'

// 1. Get projectId
const projectId = '529b370309f8399d924ad659a8cb60b6'

// 2. Set chains
const mainnet = {
  chainId: 10,
  name: 'Optimism',
  currency: 'ETH',
  explorerUrl: 'https://optimistic.etherscan.io',
  rpcUrl: 'https://mainnet.optimism.io'
}

// 3. Create modal
const metadata = {
  name: 'Scenes',
  description: 'By Sound of Fractures',
  url: 'https://scenes.soundoffractures.com/',
  icons: []
}

createWeb3Modal({
  ethersConfig: defaultConfig({ metadata }),
  chains: [mainnet],
  projectId
})

interface Web3ModalProviderProps {
  children: ReactNode;
}

export function Web3ModalProvider({ children }: Web3ModalProviderProps) {
  return <>{children}</>;
}