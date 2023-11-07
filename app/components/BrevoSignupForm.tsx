'use client'

import { useState } from 'react'

export default function BrevoSignupForm (props:any) {
    return (
        <iframe
        width="540"
        height="650"
        src={props.src}
        frameBorder="0"
        scrolling="auto"
        allowFullScreen
        style={{display: 'block', marginLeft: 'auto', marginRight: 'auto', maxWidth: '100%'}}
        onLoad={() => console.log('Iframe loaded')}
        ></iframe>

    )
}