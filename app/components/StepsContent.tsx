import Image from 'next/image';

type ImageLoaderParams = {
    src: string;
    width: number | string;
    quality?: number | string;
}

const imageLoader = ({ src, width, quality }: ImageLoaderParams) => {
    return `${src}?w=${width}&q=${quality || 75}`;
}

export default function Content() {

    return (
        <>
        <section className="header-section flex justify-center text-center">
            <h1 className="text-8xl">THE PROCESS</h1>
        </section>
        <section className="main-section relative grid grid-cols-3 gap-x-12 px-4">
            <div className="w-full flex flex-col">
                <div className='column-image-container aspect-video relative'>
                    <Image
                        loader={imageLoader}
                        /*width='300'
                        height='200'*/
                        fill={true}
                        src='/images/1.jpg'
                        alt=''
                        //placeholder='blur'
                        quality={75}
                    />
                </div>
                <div className='column-text-container text-center'>
                    <h2 className='mt-8'>01 - LISTEND & READ</h2>
                </div>
            </div>
            <div className="w-full flex flex-col">
                <div className='column-image-container aspect-video relative'>
                    <Image
                        loader={imageLoader}
                        /*width='300'
                        height='200'*/
                        fill={true}
                        src='/images/1.jpg'
                        alt=''
                        //placeholder='blur'
                        quality={75}
                    />
                </div>
                <div className='column-text-container text-center'>
                    <h2 className='mt-8'>02 - UPLOAD</h2>
                    <p>LISTEN TO THE SONG AND READ THE PROMPT</p>
                </div>
            </div>
            <div className="w-full flex flex-col">
                <div className='column-image-container aspect-video relative'>
                    <Image
                        loader={imageLoader}
                        /*width='300'
                        height='200'*/
                        fill={true}
                        src='/images/1.jpg'
                        alt=''
                        //placeholder='blur'
                        quality={75}
                    />
                </div>
                <div className='column-text-container text-center'>
                    <h2 className='mt-8'>03 - FINAL SCENE</h2>
                </div>
            </div>
        </section>
        </>
    )
}