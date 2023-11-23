'use client'

import { CrossmintPayButton } from "@crossmint/client-sdk-react-ui";

interface CrossmintProps {
    collectionId: string;
    projectId: string;
    environment?: string;
}
  
const CrossMint: React.FC<CrossmintProps> = ({ projectId, collectionId, environment='staging' }) => {
    return (
        <CrossmintPayButton
            clientId=""
            projectId={projectId}
            collectionId={collectionId}
            environment={environment}
            mintConfig={{
                "totalPrice":"0.001",
                "creatorContractAddress":"0xA88062256A1D879b8771D2Df2ba489AC46853fe1",
                //"instanceId":"<INSTANCEID>",
                "mintCount":"1",
                //"mintIndices":"<MINTINDICES>",
                //"merkleProofs":"<MERKLEPROOFS>",
            }}
            //mintTo="<YOUR_USER_WALLET_ADDRESS>"
            locale="en-US"
            currency="GBP"
        />
    )
}

export default CrossMint