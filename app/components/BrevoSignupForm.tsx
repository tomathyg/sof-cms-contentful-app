'use client'

export default function BrevoSignupForm () {
    return (
        <iframe
        width="540"
        height="650"
        src="https://83dff8dc.sibforms.com/serve/MUIFAMh2yBZNMyFxB80jUb82YHi6NF6yV0VhLynu9C4lSeMk-cOalDzpYdQem3UFV12NTihQu4sAzBCuiw6xYnr3iyZ67g2BLs7G8TikbawLsnwzGCXzxBRTE1H3d7ZLlLdKYA4z8-ONTOOVrIanb2iLTele-1nNe-deLxK86BjK-TGxkxXcJ-XsVGSQC3lwo3MGC0jjFzR0Yzm3"
        frameBorder="0"
        scrolling="auto"
        allowFullScreen
        style={{display: 'block', marginLeft: 'auto', marginRight: 'auto', maxWidth: '100%'}}
        onLoad={() => console.log('Iframe loaded')}
        ></iframe>

    )
}