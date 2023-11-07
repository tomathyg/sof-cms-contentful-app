'use client'

export default function BrevoSignupForm () {
    return (
        <iframe
        width="540"
        height="650"
        src="https://83dff8dc.sibforms.com/serve/MUIFAJHcR-s-NCXSE-pYZTEuxHzJZn0sVjRnq6IWB0gIPEOqKAV28m6N3t6RcVd43WZGYA-zhUT5AO4kiPJ2TIPSEpAn3nwh3DxREro3t2fODPY9vA9e4RaJ134gCRkbIAYihB35ncvRlFyjxa4rI_KpMXFX4dAbnCzSk0Tg7l0F_12L_fZsOU6rprKcshmtPuGQWZwT_AAx05aU"
        frameBorder="0"
        scrolling="auto"
        allowFullScreen
        style={{display: 'block', marginLeft: 'auto', marginRight: 'auto', maxWidth: '100%'}}
        onLoad={() => console.log('Iframe loaded')}
        ></iframe>

    )
}