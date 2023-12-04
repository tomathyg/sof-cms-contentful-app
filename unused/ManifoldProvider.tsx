'use client'

import { useEffect } from 'react';
import { EthereumProvider } from '@manifoldxyz/frontend-provider-types'

declare global {
  interface Window {
    ManifoldEthereumProvider: typeof EthereumProvider;
  }
}

// Access the ManifoldEthereumProvider via window.ManifoldEthereumProvider
import { detectManifoldEthereumProvider } from '@manifoldxyz/frontend-provider-utils'

interface ManifoldProviderProps {
    id: string;
}

const ManifoldProvider: React.FC<ManifoldProviderProps> = ({ id }) => {

    const appName = 'SCENES';
    const clientId = '5e3c520583ce5cfea8eca03039bb7f519fd1314a1ecd5e0c827b1d69f0f703d0';
    const strictAuth = true;

    useEffect(() => {
        const fetchData = async () => {
            // Your async code here
            const manifoldProvider = await detectManifoldEthereumProvider()

            /*const token = await window.ManifoldEthereumProvider.getOAuth({
                grantType: "signature",
                appName: "<your app name>",
                clientId: "<your app client id>"
              });*/

            if (manifoldProvider) {
        
            console.log('Manifold Ethereum successfully detected!')
        
            // From now on, this should always be true:
            // provider === window.ManifoldEthereumProvider
        
            /*const oAuthToken = await manifoldProvider.getOAuth({
                appName,
                clientId,
                grantType,
                strictAuth
            });*/
            } else {
            // if the provider is not detected, detectManifoldEthereumProvider resolves to null
            }
        };
    
        fetchData().catch(console.error);
    }, [id]); // Dependency array, re-run the effect if `id` changes

    return (
        null
    )

}

export default ManifoldProvider;