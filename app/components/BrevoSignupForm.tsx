'use client'

import { useState } from 'react'

export default function BrevoSignupForm () {
    const formURL = "https://83dff8dc.sibforms.com/serve/MUIFANgj6f1RxErRAzGvRDjbmeX2by80Uu9rvW-K0zjYFXvKHvj1c-A59bLuVYBMziS_AQYiw8L7t4RTaKIqfS547DXHKNPEeoBXTVlWX1KWiwSHNuxQJeHCPXgcvpoV_Mnp2j1YB1Jc1Q2g3r43tZg9piIl1LgS9m-dxj1Xkv2hRUJOP9BwOSn7bFs7-HAxPZpJGbXIJtliXMTx";
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
