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
            mintConfig={{
                "totalPrice":"0.001",
                "numberOfTokens":"1",
            }}
            //mintTo="_WALLET_ADDRESS_"
            //emailTo="_EMAIL_TO_"
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