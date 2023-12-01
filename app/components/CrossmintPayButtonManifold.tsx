'use client'

import { useState, useEffect } from 'react';
import { CrossmintPayButton } from "@crossmint/client-sdk-react-ui";
import { useWeb3ModalAccount } from '@web3modal/ethers5/react'

//import { ethers } from 'ethers';

// Function to initialize the provider
/*const getProvider = () => {
  if (typeof window !== 'undefined' && typeof window.ethereum !== 'undefined') {
    // We are in the browser and metamask is running.
    return new ethers.providers.Web3Provider(window.ethereum);
  } else {
    // We are on the server *OR* the user is not running metamask
    // Handle this case according to your requirements.
  }
};*/

interface CrossmintProps {
    collectionId: string;
    projectId: string;
    creatorContractAddress: string;
    contractAddress: string;
    instanceId: string;
    nftPrice: string;
    mintFee: string;
    environment?: string;
    //account?: string;
}
  
const CrossmintPayButtonManifold: React.FC<CrossmintProps> = ({ projectId, collectionId, creatorContractAddress, contractAddress, instanceId, nftPrice, mintFee, environment }) => {
    console.log(`${environment} PROJECT ID:`, projectId);
    console.log(`${environment} COLLECTION ID:`, collectionId);
    console.log(`${environment} CREATOR CONTRACT ADDRESS:`, creatorContractAddress);
    console.log(`${environment} CONTRACT ADDRESS:`, contractAddress);
    console.log(`${environment} CONTRACT INSTANCE ID:`, instanceId);
    //console.log("ACCOUNT", account);

    //const [connectedWallet, setConnectedWallet] = useState('');
    const { address, chainId, isConnected } = useWeb3ModalAccount();

    const [shouldDisplayButton, setShouldDisplayButton] = useState(false);

    useEffect(() => {
        // Once the component mounts, we check if the wallet is connected
        // and then set shouldDisplayButton accordingly
        setShouldDisplayButton(isConnected);
    }, [isConnected]);


    /*useEffect(() => {
        // Retrieve the connected wallet address from localStorage
        //const walletAddress = localStorage.getItem('walletAddress');

        //if (address) {
            console.log("WC ADDRESS:", address);
            setConnectedWallet(address);
        //}
    }, [address]);*/
    //console.log(window.ethereum);

    /*useEffect(() => {
        // Optionally, you can use the account prop for some logic here
    }, [account]);*/

    const [mintAmount, setMintAmount] = useState(1);

    const handleDecrement = () => {
        if (mintAmount <= 1) return;
        setMintAmount(mintAmount - 1);
    }

    const handleIncrement = () => {
        if (mintAmount >= 2) return;
        setMintAmount(mintAmount + 1);
    }
    console.log("MINT AMOUNT:", mintAmount);

    let totalPrice = Number(nftPrice) * mintAmount + Number(mintFee) * mintAmount;
    console.log("TOTAL PRICE:", totalPrice);

    const mintConfig={
        "contractAddress": `${contractAddress}`,
        "creatorContractAddress": `${creatorContractAddress}`,
        "instanceId": `${instanceId}`,
        "mintCount": mintAmount.toString(),
        "totalPrice": totalPrice.toString(),
        "mintIndices": [],
        "merkleProofs": [],
    }

    console.log("MINT CONFIG:", mintConfig);


    /*if (!isConnected) {
        return null; // Or render some alternative content
    }*/

    // Only render the CrossmintPayButton if shouldDisplayButton is true
    if (!shouldDisplayButton) {
        return (
            <div className='uppercase text-lg text-center'>
                <p>Connect your wallet<br />to buy with card or ETH</p>
            </div>
        )
    }

    return (
        <>
        <div className='flex flex-col justify-center items-center'>
            <div className='mb-4 text-xl'>
                <button className='' onClick={handleDecrement}> - </button>
                <input
                    className='bg-transparent text-center border-none select-none focus:outline-none w-[100px] p-0'
                    readOnly
                    type="text"
                    value={mintAmount} />
                <button onClick={handleIncrement}> + </button>
            </div>
            <CrossmintPayButton
                projectId={projectId}
                collectionId={collectionId}
                environment={environment}
                checkoutProps={{
                    display: "same-tab",  // "same-tab" | "new-tab" | "popup"
                    paymentMethods: ["ETH", "fiat"],
                    delivery: "all" //"custodial" | "non-custodial" | "all"
                }}
                mintTo={address}
                //emailTo="hello@soundoffractures.com"
                //recipient="_WALLET_ADDRESS_"
                /*mintConfig={{
                    "contractAddress": `${contractAddress}`,
                    "creatorContractAddress": `${creatorContractAddress}`,
                    "instanceId": `${instanceId}`,
                    "mintCount": "mintAmount.toString()",
                    "mintIndices": [],
                    "merkleProofs": [],
                    "totalPrice": "0.001"
                    //type: "erc-721",
                    //totalPrice: (nftCost * mintAmount).toString(),
                    //_quantity: mintAmount
                    //"mintFor": ""
                }}*/
                // 0x95d452fc85869a7834189f41ec6bb0915f943aa3
                // Core Contract Creator 0x5133522ea5A0494EcB83F26311A095DDD7a9D4b6
                //"type": "erc-721"
                //"type": "manifold-erc-721"
                mintConfig={mintConfig}
                locale="en-US"
                /*currency="GBP"
                className="xmint-btn"
                getButtonText={(connecting, paymentMethod) => connecting ? "Connecting" : `BUY TO COLLECT`}*/
            />
            </div>
        </>
    )
}

export default CrossmintPayButtonManifold