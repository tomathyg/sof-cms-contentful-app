'use client'

import { useState } from 'react'

export default function BrevoSignupForm () {
    const formURL = "https://83dff8dc.sibforms.com/serve/MUIFAL4m1DVbmdBfcdReGHgdrgYP3JGk82aelOWkIuHvcbq10-WTJgA960IkDHLKbG1HJLzmewTPDqBKPaB8DqfgfVzdKkYfuN2wAZ2ft1Am_4HIWKdpx3-dI_C9ltXadqUvo4cXz2T_I4ung9JBKpCgU_e54sDDQ_Jb6kudHlo5FqmKnfim6GtApBAoSgquOLKfCHghAPSVEfRe";
    return (
        <iframe
        width="540"
        height="470"
        src={formURL}
        frameBorder="0"
        scrolling="auto"
        allowFullScreen
        style={{display: 'block', marginLeft: 'auto', marginRight: 'auto', maxWidth: '100%' }}
        ></iframe>

    )
}
