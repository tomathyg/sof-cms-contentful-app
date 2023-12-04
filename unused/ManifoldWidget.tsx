'use client'

import Script from 'next/script'
import React from 'react';

interface ManifoldWidgetProps {
    id: string;
}

const ManifoldWidget: React.FC<ManifoldWidgetProps> = ({ id }) => {

    console.log("ID:", id);

    return (
        <div className='manifold-widgets'>
            
            {/*<div className="ManifoldConnect">
            <div  
                data-widget="m-connect"
                data-grant-type="signature"
                data-client-id="5e3c520583ce5cfea8eca03039bb7f519fd1314a1ecd5e0c827b1d69f0f703d0"  
                data-app-name="SCENES"  
                data-network="10"
            >
            </div>
            </div>
            <div
                data-widget="m-listing-attributes"
                data-id={1}
                data-network="10"
            ></div>*/}
            <div  
                data-widget="m-connect"  
                data-client-id="5e3c520583ce5cfea8eca03039bb7f519fd1314a1ecd5e0c827b1d69f0f703d0"
                data-app-name="SCENES"
                data-multi="true"
                data-network="10"
                data-wallet-connect-project-id="529b370309f8399d924ad659a8cb60b6"
            ></div>
            <div
                data-widget="m-claim-buy-only"
                data-id={id}
            ></div>
        </div>
    )
}

export default ManifoldWidget