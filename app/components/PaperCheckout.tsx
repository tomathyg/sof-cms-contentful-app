'use client'

//import { useState } from 'react'

import { PaperCheckout, PaperCheckoutDisplay } from '@paperxyz/react-client-sdk'

/**
 * We have two magic variables:
 * * `$WALLET` corresponds to the user's wallet
 * *  `$QUANTITY`corresponds to the quantity the user wants to purchase.
 * 
 * If you pass in either {@param recipientWalletAddress} or {@param quantity},
 * it will resolve themselves as expected.
 *
 */

interface NFTPaperCheckoutProps {
  checkoutId: string;
  //clientId: string;
}

const NFTPaperCheckout: React.FC<NFTPaperCheckoutProps> = ({ checkoutId }) => {
//export default function NFTPaperCheckout(props:any) {

  //console.log("PROPS:", props);

  //const [contractId, setContractId] = useState('b80e3ade-fb37-4163-b8db-db566057af2c');

  return (
    <>
    <PaperCheckout
          checkoutId={checkoutId}
          //clientId={clientId}
    			// Note that you should use POPUP if you're doing a solana checkout due to phantom wallet limitations
    			display={PaperCheckoutDisplay.MODAL}
    			//recipientWalletAddress={""}
          mintMethod={{
            name: "mint",
            args: {
              to: "$WALLET",
              numberOfTokens: 1
            },
            //
            payment: {
              currency: "ETH",
              // This number value should be the price for a single quantity.
              // In this example, if the user chose 2 NFT, they'll be paying 8MATIC
              value: "0.001 * $QUANTITY"
            },
            // optional, these are the deafult options
            callOptions: {
              gasOptions: 'medium'
            }
          }}
          /*eligibilityMethod={{
            name: "getClaimIneligibilityReason",
            args: {
    					// This will resolve to "0x123"
              _recipient: "$WALLET",
    					// This will resolve to whatever the user selects while going through the checkout          
              _quantity: "$QUANTITY",
              _tokenId: "0",
            },
          }}*/
          onOpenCheckout={() => { console.log("OPEN CHECKOUT"); }}
          onCloseCheckout={() => { console.log("CLOSE CHECKOUT"); }}
          onPaymentSuccess={() => { console.log("PAYMENT SUCCESS"); }}
          onTransferSuccess={() => { console.log("TRANSFER SUCCESS"); }}

    />
    </>
  )
}

export default NFTPaperCheckout;