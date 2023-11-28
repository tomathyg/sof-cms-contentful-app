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
        <section className="header-section flex justify-center text-center px-4">
            <h1 className="text-4xl sm:text-6xl md:text-8xl mt-4">THE PROCESS</h1>
        </section>
        <section className="mt-4 px-8 overlap-above content-section relative grid grid-cols-1 sm:grid-cols-3 gap-x-12 px-4">
            <div className="w-full flex flex-col mb-8">
                <div className='column-image-container aspect-video relative overflow-hidden rounded-xl'>
                    <Image
                        //loader={imageLoader}
                        /*width='300'
                        height='200'*/
                        fill={true}
                        src='/images/1.jpg'
                        alt=''
                        //placeholder='blur'
                        quality={75}
                    />
                </div>
                <div className='column-text-container text-center text-xl'>
                    <h2 className='mt-8'>01 - LISTEN & READ</h2>
                    <p className='font-serif'>LISTEN TO THE SONG AND READ THE PROMPT</p>
                </div>
            </div>
            <div className="w-full flex flex-col mb-8">
                <div className='column-image-container aspect-video relative overflow-hidden rounded-xl'>
                    <Image
                        //loader={imageLoader}
                        /*width='300'
                        height='200'*/
                        fill={true}
                        src='/images/1.jpg'
                        alt=''
                        //placeholder='blur'
                        quality={75}
                    />
                </div>
                <div className='column-text-container text-center text-xl'>
                    <h2 className='mt-8'>02 - UPLOAD</h2>
                    <p className='font-serif'>UPLOAD THE IMAGE OF YOUR MEMORY, AND ENTER YOUR RESPONSE TO THE PROMPT</p>
                </div>
            </div>
            <div className="w-full flex flex-col mb-8">
                <div className='column-image-container aspect-video relative overflow-hidden rounded-xl'>
                    <Image
                        //loader={imageLoader}
                        /*width='300'
                        height='200'*/
                        fill={true}
                        src='/images/1.jpg'
                        alt=''
                        //placeholder='blur'
                        quality={75}
                    />
                </div>
                <div className='column-text-container text-center text-xl'>
                    <h2 className='mt-8'>03 - FINAL SCENE</h2>
                    <p className='font-serif'>YOUR IMAGE WILL BE PROCESSED, MINTED AND ENTERED INTO THE SELECTION PROCESS</p>
                </div>
            </div>
        </section>
        </>
    )
}