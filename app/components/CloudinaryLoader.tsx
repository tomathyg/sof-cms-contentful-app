// Demo: https://res.cloudinary.com/demo/image/upload/w_300,c_limit,q_auto/turtles.jpg

interface cloudinaryLoaderProps {
    src: string;
    width: number | string;
    quality?: number | string;
}

//const cloudinaryLoader: React.FC<cloudinaryLoaderProps> = ({ src, width, quality }) => {
export default function cloudinaryLoader({ src, width, quality }: cloudinaryLoaderProps) {
    const params = ['f_auto', 'c_limit', `w_${width}`, `q_${quality || 'auto'}`]
    return `https://res.cloudinary.com/dsq0amje1/image/upload/scene-images/${params.join(',')}${src}`
}

//export default cloudinaryLoader;