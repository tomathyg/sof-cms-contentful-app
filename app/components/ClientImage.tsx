'use client'

import Image from 'next/image';

interface ClientImageProps {
    src: string;
    name: string;
    className: string;
}

type ImageLoaderParams = {
    src: string;
    width: number | string;
    quality?: number | string;
}

const imageLoader = ({ src, width, quality }: ImageLoaderParams) => {
    return `${src}?w=${width}&q=${quality || 60}`;
}

const ClientImage: React.FC<ClientImageProps> = ({ src, name, className }) => {

    return (
        <Image 
            loader={imageLoader} 
            unoptimized={false}
            loading="lazy"
            src={src} 
            alt={name || 'Scene image'} 
            width={430}
            height={430}
            className={className}
            priority={false}
            sizes="(max-width: 640px) 100vw, 30vw"
            //onClick={() => console.log("image clicked")}
            //onLoad={() => handleImageLoad(item.submissionImage.url)}
            //onLoad={(e) => console.log("image loaded")}
            //onError={(e) => console.error("image load error")}
            //sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
    )
};

export default ClientImage