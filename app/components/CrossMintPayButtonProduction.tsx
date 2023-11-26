'use client'

import { CrossmintPayButton } from "@crossmint/client-sdk-react-ui";

interface CrossmintProps {
    collectionId: string;
    projectId: string;
    environment?: string;
}
  
const CrossMint: React.FC<CrossmintProps> = ({ projectId, collectionId, environment='production' }) => {
    console.log("PRODUCTION PROJECT ID:", projectId);
    console.log("PRODUCTION COLLECTION ID:", collectionId);
    return (
        <CrossmintPayButton
            projectId={projectId}
            collectionId={collectionId}
            environment={environment}
            /*mintConfig={{
                type: "erc-721",
                totalPrice:"0.001",
                to:"_TO_",
                numberOfTokens:"1"
            }}*/
            mintConfig={{
                "totalPrice":"0.001",
                "numberOfTokens":"1",
                //"to": "_WALLET_ADDRESS_"
            }}
            //mintTo="_WALLET_ADDRESS_"
            //emailTo="_EMAIL_TO_"
            locale="en-US"
            currency="GBP"
            className="xmint-btn"
            getButtonText={(connecting, paymentMethod) =>
                connecting ? "Connecting" : `Crossmint NFT`
            }
        />
    )
}

export default CrossMint