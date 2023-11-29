import Image from 'next/image';
import TypeForm from '../components/TypeForm'
//import { getHomePageData } from '../../lib/api-2'
import H5Player from '../components/H5AudioPlayer'

type ImageLoaderParams = {
    src: string;
    width: number | string;
    quality?: number | string;
}

const imageLoader = ({ src, width, quality }: ImageLoaderParams) => {
    return `${src}?w=${width}&q=${quality || 75}`;
}

export default function Content() {

    //const content = await getHomePageData(false);
    //console.log("HOME PAGE CONTENT:", content);

    return (
        <>
        <section className="header-section flex justify-center text-center px-4">
            <h1 className="text-4xl sm:text-6xl md:text-8xl mt-4">THE PROCESS</h1>
        </section>
        <section className="mt-4 px-8 overlap-above content-section relative grid grid-cols-1 sm:grid-cols-3 gap-x-12 px-4">
            <div className="w-full flex flex-col mb-8">
                <div className='column-image-container aspect-landscape relative overflow-hidden rounded-xl bg-orange'>
                    {/*<Image
                        //loader={imageLoader}
                        fill={true}
                        src='/images/1.jpg'
                        alt=''
                        //placeholder='blur'
                        quality={75}
                    />*/}
                </div>
                <div className='column-text-container text-center text-xl'>
                    <h2 className='mt-8'>01 - LISTEN & READ</h2>
                    <p className='font-serif'>LISTEN TO THE SONG AND READ THE PROMPT</p>
                    <p className='font-mono text-xs mt-4'>UPLOAD THE IMAGE OF YOUR MEMORY, AND ENTER YOUR RESPONSE TO THE PROMPT</p>
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
                <div className='column-text-container text-center text-xl'>
                    <h2 className='mt-8'>02 - UPLOAD</h2>
                    <p className='font-serif'>UPLOAD THE IMAGE OF YOUR MEMORY, AND ENTER YOUR RESPONSE TO THE PROMPT</p>
                    <p className='font-mono text-xs mt-4'>UPLOAD THE IMAGE OF YOUR MEMORY, AND ENTER YOUR RESPONSE TO THE PROMPT</p>
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
                <div className='column-text-container text-center text-xl'>
                    <h2 className='mt-8'>03 - FINAL SCENE</h2>
                    <p className='font-serif'>YOUR IMAGE WILL BE PROCESSED, MINTED AND ENTERED INTO THE SELECTION PROCESS</p>
                    <p className='font-mono text-xs mt-4'>UPLOAD THE IMAGE OF YOUR MEMORY, AND ENTER YOUR RESPONSE TO THE PROMPT</p>
                </div>
            </div>
        </section>
        <section className="process-audio-player-section w-full text-sm">
            <H5Player
                src="https://assets.ctfassets.net/57idppycthif/7KTYzLD4REKUkW5wFHkN9r/b94181d9856d7848f571a11a5735097c/Willows_Heartbeat_44_1K.mp3"
                title="Willow's Heartbeat"
            />
        </section>
        <section className='flex justify-center font-sans text-black my-10'>
            <TypeForm
                id='eAdn6pFg'
            />
        </section>
        </>
    )
}