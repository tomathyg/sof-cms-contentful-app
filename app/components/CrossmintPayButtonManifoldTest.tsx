'use client'

import { CrossmintPayButton } from "@crossmint/client-sdk-react-ui";

interface CrossmintProps {
    
}
  
const CrossmintPayButtonManifoldTest: React.FC<CrossmintProps> = ({ }) => {

    return (
        <>
        <div className='flex flex-col justify-center items-center'>
            <CrossmintPayButton
                projectId='2057f412-b6cf-4bbf-a8c2-30103528fe36'
                collectionId='02a89756-decb-453a-8218-1ed89ec76361'
                environment='production'
                mintConfig={{
                    "contractAddress": '0x1eb73fee2090fb1c20105d5ba887e3c3ba14a17e',
                    "creatorContractAddress": '0x15344952786c2cd8cffbaf6f1fb258d5ae23c34f',
                    "instanceId": '59406576',
                    "mintCount": '1',
                    "totalPrice": '0.0065',
                    "mintIndices": [],
                    "merkleProofs": [],
                }}
                locale="en-US"
                /*currency="GBP"
                className="xmint-btn"
                getButtonText={(connecting, paymentMethod) => connecting ? "Connecting" : `BUY TO COLLECT`}*/
            />
            </div>
        </>
    )
}

export default CrossmintPayButtonManifoldTest