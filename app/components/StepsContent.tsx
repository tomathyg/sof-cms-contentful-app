import Image from 'next/image';
import RouterButton from './RouterButton';

type ImageLoaderParams = {
    src: string;
    width: number | string;
    quality?: number | string;
}
interface ProcessProps {
    title: string;
    step1Heading: string;
    step1Description: string;
    step1Guidelines: string;
    step2Heading: string;
    step2Description: string;
    step2Guidelines: string;
    step3Heading: string;
    step3Description: string;
    step3Guidelines: string;
}

interface ProcessContentProps {
    content: ProcessProps;
}

const nextImageLoader = ({ src, width, quality }: ImageLoaderParams) => {
    return `${src}?w=${width}&q=${quality || 75}`;
}

const ProcessContent: React.FC<ProcessContentProps> = ({ content }) => {
    //console.log("REVEAL CONTENT:", content);

    return (
        <>
        <section className="header-section flex justify-center text-center px-4">
            <h1 className="text-2xl xsm:text-4xl sm:text-6xl md:text-6xl mt-4">THE PROCESS</h1>
        </section>
        <section className="mt-4 px-8 overlap-above content-section relative grid grid-cols-1 sm:grid-cols-3 gap-x-5 md:gap-x-12 px-4 max-w-screen-xl mx-auto">
            <div className="w-full flex flex-col mb-8">
                <div className='column-image-container aspect-landscape relative overflow-hidden rounded-xl bg-orange text-center flex items-center justify-center py-4'>
                    <Image
                        //loader={imageLoader}
                        height={217.8}
                        width={145.8}
                        src='/images/scenes-play-logo.png'
                        alt=''
                        //placeholder='blur'
                        quality={75}
                        className=''
                    />
                </div>
                <div className='column-text-container text-center uppercase'>
                    <h2 className='mt-6 mb-2 text-xl lg:text-2xl'>{content.step1Heading}</h2>
                    <p className='font-serif text-xl lg:text-xl'>{content.step1Description}</p>
                    <p className='mt-4 font-mono text-sm'>{content.step1Guidelines}</p>
                </div>
            </div>
            <div className="w-full flex flex-col mb-8">
                <div className='column-image-container aspect-landscape relative overflow-hidden rounded-xl'>
                    <Image
                        //loader={imageLoader}
                        /*width='300'
                        height='200'*/
                        fill={true}
                        src='/images/process-step-2-enter-caption.png'
                        alt=''
                        //placeholder='blur'
                        quality={75}
                    />
                </div>
                <div className='column-text-container text-center uppercase'>
                    <h2 className='mt-6 mb-2 text-xl lg:text-2xl'>{content.step2Heading}</h2>
                    <p className='font-serif text-xl lg:text-xl'>{content.step2Description}</p>
                    <p className='mt-4 font-mono text-sm'>{content.step2Guidelines}</p>
                </div>
            </div>
            <div className="w-full flex flex-col mb-8">
                <div className='column-image-container aspect-landscape relative overflow-hidden rounded-xl'>
                    <Image
                        //loader={imageLoader}
                        /*width='300'
                        height='200'*/
                        fill={true}
                        src='/images/process-step-3-example-scene.jpg'
                        alt=''
                        //placeholder='blur'
                        quality={75}
                    />
                </div>
                <div className='column-text-container text-center uppercase'>
                    <h2 className='mt-6 mb-2 text-xl lg:text-2xl'>{content.step3Heading}</h2>
                    <p className='font-serif text-xl lg:text-xl'>{content.step3Description}</p>
                    <p className='mt-4 font-mono text-sm'>{content.step3Guidelines}</p>
                </div>
            </div>
        </section>
        <section className='flex justify-center font-sans text-black mt-4 mb-10'>
            <RouterButton
                url='/submit'
                label='START'
                classes='font-sans button-primary'
            />
        </section>
        </>
    )
}

export default ProcessContent;