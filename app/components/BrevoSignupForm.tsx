'use client'

import { useState } from 'react'

export default function BrevoSignupForm () {
    const formURL = "https://83dff8dc.sibforms.com/serve/MUIFAE7VsUpF-jDR84zcHwQ8RBv4AwlXkIadxYft2OG3V7O7wHEJCiZ0YjS8xzVSAa872FZdIWfLVKvEDEaCSI-XApabwtg0yLOVtvs_yV6DQEDhTgo3yu6FvZdn3RIxtFXlR1vj7W7jdr_APvX91iTuEBiRWxKXDqfFzuconzIM3OfyfZHEZON0PvEJ6hDbp_ILYQoc8sZKdbRS";
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
