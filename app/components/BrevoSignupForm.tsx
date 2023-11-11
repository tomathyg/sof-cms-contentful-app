export default function BrevoSignupForm (props:any) {
    return (
        <div className="iframe-wrapper">
            <iframe
            loading="eager"
            className="no-select"
            width="540"
            height="800"
            src={props.src}
            allowFullScreen
            style={{display: 'block', marginLeft: 'auto', marginRight: 'auto', maxWidth: '100%'}}
            ></iframe>
        </div>
    )
}