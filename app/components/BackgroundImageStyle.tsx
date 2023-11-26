'use client'

interface BackgroundImageStyleProps {
    url: string;
}

const BackgroundImageStyle: React.FC<BackgroundImageStyleProps> = ({ url }) => {
    return (
        <style jsx>{`
            .page-inner-content {
                background-image: url('${url}') !important;
            }
        `}</style>
    )
}

export default BackgroundImageStyle;