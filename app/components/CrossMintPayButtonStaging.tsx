'use client'

import { CrossmintPayButton } from "@crossmint/client-sdk-react-ui";

interface CrossmintProps {
    collectionId: string;
    projectId: string;
    environment?: string;
}
  
const CrossMint: React.FC<CrossmintProps> = ({ collectionId, projectId, environment='staging' }) => {
    console.log("PROJECT ID:", projectId);
    console.log("COLLECTION ID:", collectionId);
    return (
        <CrossmintPayButton
            projectId={projectId}
            collectionId={collectionId}
            environment={environment}
            /*mintConfig={{
                "contractAddress": "0xfd620803c22ac167f253a3ae4c0844e28039dd3e",
                "totalPrice":"0.001",
                "creatorContractAddress":"0xA88062256A1D879b8771D2Df2ba489AC46853fe1",
                "instanceId":"1",
                "mintCount":"1",
                "mintIndices":"1",
                "merkleProofs":"0x891905fc2c389ee01682e06b68c5871332d65a3b4d5b83b7b0f529734624d97c",
            }}*/
            //mintTo="<YOUR_USER_WALLET_ADDRESS>"
            locale="en-US"
            currency="GBP"
        />
    )
}

export default CrossMint