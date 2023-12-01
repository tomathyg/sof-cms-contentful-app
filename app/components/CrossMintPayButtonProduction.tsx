'use client'

import { CrossmintPayButton } from "@crossmint/client-sdk-react-ui";
import { useWeb3ModalAccount } from '@web3modal/ethers5/react'
import { useState, useEffect } from 'react';

interface CrossmintProps {
    collectionId: string;
    projectId: string;
    environment?: string;
}
  
const CrossMint: React.FC<CrossmintProps> = ({ projectId, collectionId, environment='production' }) => {
    console.log("PRODUCTION PROJECT ID:", projectId);
    console.log("PRODUCTION COLLECTION ID:", collectionId);
    const [connectedWallet, setConnectedWallet] = useState('');
    const { address, chainId, isConnected } = useWeb3ModalAccount();

    useEffect(() => {
        // Retrieve the connected wallet address from localStorage
        //const walletAddress = localStorage.getItem('walletAddress');

        if (address) {
            console.log("WC ADDRESS:", address);
            setConnectedWallet(address);
        }
    }, [address]);

    return (
        <CrossmintPayButton
            projectId={projectId}
            collectionId={collectionId}
            environment={environment}
            mintConfig={{
                "totalPrice":"0.001",
                "numberOfTokens":"1",
            }}
            mintTo={connectedWallet}
            //mintTo="_WALLET_ADDRESS_"
            //emailTo="_EMAIL_TO_"
            /*checkoutProps={{
                display: "same-tab",  // "same-tab" | "new-tab" | "popup"
                paymentMethods: ["ETH", "fiat"],
                delivery: "all"
            }}*/
            locale="en-US"
            currency="GBP"
            className="xmint-btn"
            getButtonText={(connecting, paymentMethod) =>
                connecting ? "Connecting" : `PAY WITH ETH OR CARD`
            }
        />
    )
}

export default CrossMint