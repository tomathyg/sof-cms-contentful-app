'use client'

import { useEffect } from 'react';
import { detectManifoldEthereumProvider } from '@manifoldxyz/frontend-provider-utils';

export default function ManifoldBuyButton() {
  useEffect(() => {
    let mounted = true;  // Track if the component is mounted to avoid state updates on unmounted component

    async function getProvider() {
      const provider = await detectManifoldEthereumProvider();
      if (provider && mounted) {
        console.log('Manifold Ethereum provider detected:', provider);
        // ... use the provider as needed
      }
    }

    getProvider();

    return () => {
      mounted = false;  // Clean up the mounted flag when the component is unmounted
    };
  }, []);

  return (
    <div
      data-widget="m-claim-buy-only"
      data-id={1}
    ></div>
  );
}
