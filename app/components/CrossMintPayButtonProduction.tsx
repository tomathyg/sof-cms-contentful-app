'use client'

import { CrossmintPayButton } from "@crossmint/client-sdk-react-ui";

interface CrossmintProps {
    collectionId: string;
    projectId: string;
    environment?: string;
}
  
const CrossMint: React.FC<CrossmintProps> = ({ projectId, collectionId, environment='production' }) => {
    return (
        <CrossmintPayButton
            projectId={projectId}
            collectionId={collectionId}
            environment={environment}
            mintConfig={{
                type: "erc-721",
                totalPrice:"0.001",
                to:"_TO_",
                numberOfTokens:"1"
            }}
            locale="en-US"
            currency="GBP"
        />
    )
}

export default CrossMint