'use client'

import Image from 'next/image';

interface ClientImageProps {
    src: string;
    name: string;
}

type ImageLoaderParams = {
    src: string;
    width: number | string;
    quality?: number | string;
}

const imageLoader = ({ src, width, quality }: ImageLoaderParams) => {
    return `${src}?w=${width}&q=${quality || 60}`;
}

const ClientImage: React.FC<ClientImageProps> = ({ src, name }) => {

    return (
        <Image 
            loader={imageLoader} 
            unoptimized={false}
            loading="lazy"
            src={src} 
            alt={name} 
            width={600}
            height={600}
            //onClick={() => console.log("image clicked")}
            //onLoad={() => handleImageLoad(item.submissionImage.url)}
            //onLoad={(e) => console.log("image loaded")}
            //onError={(e) => console.error("image load error")}
            //sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
    )
};

export default ClientImage