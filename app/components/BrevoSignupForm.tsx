'use client'

import { useState } from 'react'

export default function BrevoSignupForm () {
    const formURL = "https://83dff8dc.sibforms.com/serve/MUIFAMz_OLqDMmTkYVeTM7WbhaH61pEopfkrOvvDv7HeHxuDOwMPhRqGPUXLqWH7ouzrr4XkpX8DkZ_a4g4H4DuUfI-bpq9Er5b5l7ziwYxdT5Go1womFfhEXFzDMy1OideVv4GOJwEMEdkhr0hfjRTINeKVTLhACGo3okX1vlUcXAVa7fZ78R4WUnE0ju9RzaO3P--IevMvxiNw";
    return (
        <iframe
        width="540"
        height="504"
        src={formURL}
        frameBorder="0"
        scrolling="auto"
        allowFullScreen
        style={{display: 'block', marginLeft: 'auto', marginRight: 'auto', maxWidth: '100%' }}
        ></iframe>

    )
}
