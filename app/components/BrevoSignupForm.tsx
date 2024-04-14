'use client'

import { useState } from 'react'

export default function BrevoSignupForm () {
    const formURL = "https://83dff8dc.sibforms.com/serve/MUIFAJFCpm_TT4zSXEPfdMzTIiQVn0Fvayrp8ta4K6oE8IZBbauYqss_PQNf25lEWZhFRe7lnrRCSb6UAOgZoyCiPNthRWCgX9jkitm1lT_G_PpP7YLPlFtbyhxn-XQrsA7IpPRFX_PqOQhxVGhGOFi8RKmJ9qA_9XC1B8hWGUXFDscljEPOW-H1-uwbxMZGRrRS3L6ASrNfv1O7";
    return (
        <iframe
        width="540"
        height="540"
        src={formURL}
        frameBorder="0"
        scrolling="auto"
        allowFullScreen
        style={{display: 'block', marginLeft: 'auto', marginRight: 'auto', maxWidth: '100%' }}
        ></iframe>

    )
}
