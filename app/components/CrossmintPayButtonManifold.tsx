'use client'

import { useState } from 'react';
import { CrossmintPayButton } from "@crossmint/client-sdk-react-ui";

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
}
  
const CrossmintPayButtonManifold: React.FC<CrossmintProps> = ({ projectId, collectionId, creatorContractAddress, contractAddress, instanceId, nftPrice, mintFee, environment }) => {
    console.log(`${environment} PROJECT ID:`, projectId);
    console.log(`${environment} COLLECTION ID:`, collectionId);
    console.log(`${environment} CREATOR CONTRACT ADDRESS:`, creatorContractAddress);
    console.log(`${environment} CONTRACT ADDRESS:`, contractAddress);
    console.log(`${environment} CONTRACT INSTANCE ID:`, instanceId);

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
                //mintTo="_TO_"
                //emailTo="_EMAIL_"
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
                currency="GBP"
                className="xmint-btn"
                getButtonText={(connecting, paymentMethod) => connecting ? "Connecting" : `BUY TO COLLECT`}
            />
            </div>
        </>
    )
}

export default CrossmintPayButtonManifold