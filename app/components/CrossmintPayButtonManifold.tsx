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
    environment?: string;
}
  
const CrossmintPayButtonManifold: React.FC<CrossmintProps> = ({ projectId, collectionId, creatorContractAddress, contractAddress, instanceId, environment }) => {
    console.log(`${environment} PROJECT ID:`, projectId);
    console.log(`${environment} COLLECTION ID:`, collectionId);
    console.log(`${environment} CREATOR CONTRACT ADDRESS:`, creatorContractAddress);
    console.log(`${environment} CONTRACT ADDRESS:`, contractAddress);
    console.log(`${environment} CONTRACT INSTANCE ID:`, instanceId);
    const mintConfig = {
        "contractAddress":`${contractAddress}`,
        "creatorContractAddress":`${creatorContractAddress}`,
        "totalPrice":"0.001",
        "instanceId":`${instanceId}`,
        "mintCount":"1",
        "mintIndices":"",
        "merkleProofs":""
    }
    console.log("MINT CONFIG:", mintConfig);

    const [mintAmount, setMintAmount] = useState(1);
    const nftCost = 0.001;

    const handleDecrement = () => {
        if (mintAmount <= 1) return;
        setMintAmount(mintAmount - 1);
    }

    const handleIncrement = () => {
        if (mintAmount >= 3) return;
        setMintAmount(mintAmount + 1);
    }

    console.log("MINT AMOUNT:", mintAmount);

    return (
        <>
        {/*<button onClick={handleDecrement}> - </button>
        <input
            readOnly
            type="number"
            value={mintAmount} />
        <button onClick={handleIncrement}> + </button>*/}
        <CrossmintPayButton
            projectId={projectId}
            collectionId='146bc6f6-5315-45e0-b9d8-7a9d299120b5'
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
            mintConfig={{
                "contractAddress": "0x1eb73fee2090fb1c20105d5ba887e3c3ba14a17e",
                "creatorContractAddress": "0x583dcb86146bc2dc41602794355616ddca405e1e",
		        "instanceId": "60715248",
                "mintCount": 1,
                "mintIndices": [],
                "merkleProofs": [],
                "totalPrice": "0.0015",
            }}
            locale="en-US"
            currency="GBP"
            className="xmint-btn"
            getButtonText={(connecting, paymentMethod) => connecting ? "Connecting" : `${environment} Manifold NFT`}
        />
        </>
    )
}

export default CrossmintPayButtonManifold