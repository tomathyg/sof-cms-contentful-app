'use client'

import { useState } from 'react'

export default function BrevoSignupForm () {
    const formURL = "https://83dff8dc.sibforms.com/serve/MUIFACMowNMEWBP6BWiMyH3cVlbuxEaHDhCweA4fW-Ex6MM7XGMbWCoOoKijoLAh3xkGZTOA2eqeWB-NaUGBTrfjsTcNdwl1U7wQ2nLUQqFOnx3NFthzh7zCOOc_6THfrfg2SwGOLjzBuF-_nSj10spVUXM5kPrTYa-66Et3S0kLvlKkxpuJyrhvJawWyLOtKGuRSemsxZ9nIa8C";
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
