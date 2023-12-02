'use client'

import Script from 'next/script'
import React from 'react';

interface ManifoldWidgetProps {
    id: string;
}

const ManifoldWidget: React.FC<ManifoldWidgetProps> = ({ id }) => {

    console.log("ID:", id);
    

    return (
        <>
        <Script
            src="https://marketplace.manifoldxyz.dev/3.5.10/marketplace.umd.min.js"
        />
        <div
            data-widget="m-listing-attributes"
            data-id={1}
            data-network="1"
        ></div>
        
        </>
    )
}

export default ManifoldWidget