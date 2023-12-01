'use client'

import '../styles.css'

import React, { useEffect, useRef } from 'react';

//import Cursor from '../../unused/js/cursor';
//import Revealer from '../js/revealer';
//import { preloadImages } from '../../unused/js/utils';

import Revealer from './Revealer';
import StepsContent from './StepsContent';
import Image from 'next/image';
import ScenesLogo from '../components/ScenesLogo'

// Define an interface for the methods you want to call on Revealer.
interface RevealerMethods {
    reveal: () => void;
}

/*type ImageLoaderParams = {
    src: string;
    width: number | string;
    quality?: number | string;
}

const imageLoader = ({ src, width, quality }: ImageLoaderParams) => {
    return `${src}?w=${width || 1080}&q=${quality || 75}`;
}*/

//import cloudinaryLoader from './CloudinaryLoader';

interface revealContentProps {
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

interface FloatingImageItem {
    url: string;
}

interface LayerItem {
    url: string;
}

interface RapidLayersProps {
    floatingImages: FloatingImageItem[];
    layers: LayerItem[];
    revealContent: revealContentProps;
}

const RapidLayers: React.FC<RapidLayersProps> = ({ floatingImages, layers, revealContent }) => {

    //console.log("FLOATING IMAGES:", floatingImages);

    //console.log("REVEAL CONTENT 1:", revealContent);

    //const content = await getHomePageData(false);
    //console.log("HOME PAGE CONTENT:", content);

    //const revealer = new Revealer();

    const revealerRef = useRef<RevealerMethods | null>(null);

    const handleReveal = () => {
        //console.log("HANDLE REVEAL", revealerRef);
        // Perform a runtime check to ensure that current is not undefined.
        if (revealerRef.current) {
          revealerRef.current.reveal();
        }
    };
    
    /*useEffect(() => {
        const cursorElement = document.querySelector('.cursor');
        if (cursorElement) {
          const cursor = new Cursor(cursorElement);
        }
    }, []);*/

    // Preload images
    /*preloadImages('.layers__item-img').then(() => {
        console.log("PRELOAD");
        //document.body.classList.remove('loading');
    });*/

    //const cursor = new Cursor(document.querySelector('.cursor'));

    /*[...document.querySelectorAll('a')].forEach(el => {
        el.addEventListener('mouseenter', () => cursor.emit('enter'));
        el.addEventListener('mouseleave', () => cursor.emit('leave'));
    });*/

    // 640, 750, 828, 1080, 1200, 1920, 2048, 3840
    const imagesWidth = 640;
    const imagesQuality = 60;

    const layersWidth = 1920;
    const layersQuality = 60;

  return (
    <>
    <Revealer ref={revealerRef} />
    <section className="revealer-section">
        <div className='reveal-page-content hidden'>
            <StepsContent
                content={revealContent}
            />
        </div>
		<div className="revealer-grid-container intro p-2">
            <div className='w-full h-full revealer-grid-inner relative'>
                <div className='intro-small-text intro-top-small-text absolute top-0 w-full px-8 h-8 leading-8 text-xs flex justify-between'>
                    <span className='intro-outer-text hidden sm:inline-block w-32'>SCENES</span>
                    <span className='text-center w-full hidden xsm:inline-block'>BY SOUND OF FRACTURES</span>
                    <span className='intro-outer-text hidden sm:inline-block text-right w-32'>2:34.29 16:9</span>
                </div>
                <div className='intro-small-text intro-top-small-text absolute bottom-0 w-full px-8 h-8 leading-8 text-xs flex justify-between'>
                    <span className='intro-outer-text hidden sm:inline-block w-32'>SCENES</span>
                    <span className='text-center w-full hidden xsm:inline-block'>BY SOUND OF FRACTURES</span>
                    <span className='intro-outer-text hidden sm:inline-block text-right w-32'>2:34.29 16:9</span>
                </div>
                <div className="content border border-black">
                    <div className="revealer-grid">
                        {layers.filter(item => item && item.url).slice(0, 8).map((item, index) => (
                            <div key={index} className={`grid__item grid__item--${index + 1}`} style={{ backgroundImage: `url(${item.url}?w=${imagesWidth}&q=${imagesQuality})`}}></div>
                        ))}
                        {/*<div className="grid__item grid__item--a" style={{ backgroundImage: `url(/_next/image?url=%2Fscene-images%2Fchef-no-text.jpg&w=${imagesWidth}&q=${imagesQuality})`}}></div>
                        <div className="grid__item grid__item--b" style={{ backgroundImage: `url(/_next/image?url=%2Fscene-images%2Fben-no-text.jpg&w=${imagesWidth}&q=${imagesQuality})`}}></div>
                        <div className="grid__item grid__item--c" style={{ backgroundImage: `url(/_next/image?url=%2Fscene-images%2Fpete-no-text.jpg&w=${imagesWidth}&q=${imagesQuality})`}}></div>
                        <div className="grid__item grid__item--d" style={{ backgroundImage: `url(/_next/image?url=%2Fscene-images%2Fdutcy-no-text.jpg&w=${imagesWidth}&q=${imagesQuality})`}}></div>
                        <div className="grid__item grid__item--e" style={{ backgroundImage: `url(/_next/image?url=%2Fscene-images%2Fmaz-no-text.jpg&w=${imagesWidth}&q=${imagesQuality})`}}></div>
                        <div className="grid__item grid__item--f" style={{ backgroundImage: `url(/_next/image?url=%2Fscene-images%2Ffede-no-text.jpg&w=${imagesWidth}&q=${imagesQuality})`}}></div>*/}
                    </div>
                    <section className="intro-header-section flex-col flex items-center justify-center absolute left-0 w-full h-full px-12">
                        <h1 className={`my-6 md:text-8xl font-bold tracking-tighter leading-tight scenes-logo-header`}>
                            {/*{heading}*/}
                            <ScenesLogo />
                        </h1>
                        <h2 className={`intro-subheading mb-8 text-center text-base text-xl sm:text-2xl md:text-3xl font-sans`}>
                            <span>AN <span className='font-serif'>INTERACTIVE</span> JOURNEY</span><br />
                            <span>THROUGH <span className='font-serif'>PERSONAL</span> MOMENTS</span>
                        </h2>
                        <button className='font-sans button-primary text-black' onClick={handleReveal}>CREATE</button>
                    </section>
                    {/*<nav className="menu">
                        <a className="menu__item menu__item--current" onClick={handleReveal}>
                            <h2 className="menu__item-title">CREATE</h2>
                        </a>
                    </nav>*/}
                </div>
            </div>
			<div className="layers">
				{/*<div className="layers__item">
					<div className="layers__item-img" style={{ backgroundImage: `url(/images/1.jpg)`}}></div>
				</div>
				<div className="layers__item">
					<div className="layers__item-img" style={{ backgroundImage: `url(/images/2.jpg)`}}></div>
				</div>
				<div className="layers__item">
					<div className="layers__item-img" style={{ backgroundImage: `url(/images/3.jpg)`}}></div>
				</div>
				<div className="layers__item">
					<div className="layers__item-img" style={{ backgroundImage: `url(/images/4.jpg)`}}></div>
				</div>
				<div className="layers__item">
					<div className="layers__item-img" style={{ backgroundImage: `url(/images/9.jpg)`}}></div>
				</div>
				<div className="layers__item">
					<div className="layers__item-img" style={{ backgroundImage: `url(/images/6.jpg)`}}></div>
				</div>
				<div className="layers__item">
					<div className="layers__item-img" style={{ backgroundImage: `url(/images/7.jpg)`}}></div>
				</div>
				<div className="layers__item">
					<div className="layers__item-img" style={{ backgroundImage: `url(/images/8.jpg)`}}></div>
				</div>
				<div className="layers__item">
					<div className="layers__item-img" style={{ backgroundImage: `url(/images/5.jpg)`}}></div>
				</div>
				<div className="layers__item">
					<div className="layers__item-img" style={{ backgroundImage: `url(/images/10.jpg)`}}></div>
                </div>*/}

                {layers.filter(item => item && item.url).map((item, index) => (
                    <div key={index} className="layers__item">
                        <div className="layers__item-img" style={{ backgroundImage: `url(${item.url}?w=${layersWidth}&q=${layersQuality})`}}></div>
                    </div>
                ))}

                {/*<div className="layers__item">
					<div className="layers__item-img" style={{ backgroundImage: `url(/_next/image?url=%2Fscene-images%2Falyss-no-text.jpg&w=1080&q=${quality})`}}></div>
				</div>
				<div className="layers__item">
					<div className="layers__item-img" style={{ backgroundImage: `url(/_next/image?url=%2Fscene-images%2Fben-no-text.jpg&w=1080&q=${quality})`}}></div>
				</div>
				<div className="layers__item">
					<div className="layers__item-img" style={{ backgroundImage: `url(/_next/image?url=%2Fscene-images%2Fchef-no-text.jpg&w=1080&q=${quality})`}}></div>
				</div>
				<div className="layers__item">
					<div className="layers__item-img" style={{ backgroundImage: `url(/_next/image?url=%2Fscene-images%2Fcxy-no-text.jpg&w=1080&q=${quality})`}}></div>
				</div>
				<div className="layers__item">
					<div className="layers__item-img" style={{ backgroundImage: `url(/_next/image?url=%2Fscene-images%2Fdutcy-no-text.jpg&w=1080&q=${quality})`}}></div>
				</div>
				<div className="layers__item">
					<div className="layers__item-img" style={{ backgroundImage: `url(/_next/image?url=%2Fscene-images%2Ffede-no-text.jpg&w=1080&q=${quality})`}}></div>
				</div>
				<div className="layers__item">
					<div className="layers__item-img" style={{ backgroundImage: `url(/_next/image?url=%2Fscene-images%2Flucy-no-text.jpg&w=1080&q=${quality})`}}></div>
				</div>
				<div className="layers__item">
					<div className="layers__item-img" style={{ backgroundImage: `url(/_next/image?url=%2Fscene-images%2Fmaz-no-text.jpg&w=1080&q=${quality})`}}></div>
				</div>
				<div className="layers__item">
					<div className="layers__item-img" style={{ backgroundImage: `url(/_next/image?url=%2Fscene-images%2Fomo-no-text.jpg&w=1080&q=${quality})`}}></div>
				</div>
				<div className="layers__item">
					<div className="layers__item-img" style={{ backgroundImage: `url(/_next/image?url=%2Fscene-images%2Fpete-no-text.jpg&w=1080&q=${quality})`}}></div>
                </div>*/}

                {/*<div className="layers__item">
					<div className="layers__item-img" style={{ backgroundImage: `url(/_next/image?url=%2Fscene-example-images%2Fexample-scene-1.jpg&w=1080&q=${quality})`}}></div>
				</div>
				<div className="layers__item">
					<div className="layers__item-img" style={{ backgroundImage: `url(/_next/image?url=%2Fscene-example-images%2Fexample-scene-2.jpg&w=1080&q=${quality})`}}></div>
				</div>
				<div className="layers__item">
					<div className="layers__item-img" style={{ backgroundImage: `url(/_next/image?url=%2Fscene-example-images%2Fexample-scene-3.jpg&w=1080&q=${quality})`}}></div>
				</div>
				<div className="layers__item">
					<div className="layers__item-img" style={{ backgroundImage: `url(/_next/image?url=%2Fscene-example-images%2Fexample-scene-4.jpg&w=1080&q=${quality})`}}></div>
				</div>
				<div className="layers__item">
					<div className="layers__item-img" style={{ backgroundImage: `url(/_next/image?url=%2Fscene-example-images%2Fexample-scene-5.jpg&w=1080&q=${quality})`}}></div>
				</div>
				<div className="layers__item">
					<div className="layers__item-img" style={{ backgroundImage: `url(/_next/image?url=%2Fscene-example-images%2Fexample-scene-6.jpg&w=1080&q=${quality})`}}></div>
                </div>*/}

				{/*<div className="layers__item">
					<div className="layers__item-img" style={{ backgroundImage: `url(/_next/image?url=%2Fscene-example-images%2Fexample-scene-1.jpg&w=1080&q=${quality})`}}></div>
				</div>
				<div className="layers__item">
					<div className="layers__item-img" style={{ backgroundImage: `url(/_next/image?url=%2Fscene-example-images%2Fexample-scene-1.jpg&w=1080&q=${quality})`}}></div>
				</div>
				<div className="layers__item">
					<div className="layers__item-img" style={{ backgroundImage: `url(/_next/image?url=%2Fscene-example-images%2Fexample-scene-1.jpg&w=1080&q=${quality})`}}></div>
				</div>
				<div className="layers__item">
					<div className="layers__item-img" style={{ backgroundImage: `url(/_next/image?url=%2Fscene-example-images%2Fexample-scene-1.jpg&w=1080&q=${quality})`}}></div>
                </div>*/}

                {/*<div className="layers__item">
                    <Image
                        fill={true}
                        src="/scene-images/alyss-no-text.jpg"
                        alt=""
                        quality={quality}
                        className='layer-image'
                    />
				</div>
				<div className="layers__item">
                    <Image
                        fill={true}
                        src="/scene-images/ben-no-text.jpg"
                        alt=""
                        quality={quality}
                        className='layer-image'
                    />
				</div>
				<div className="layers__item">
                    <Image
                        fill={true}
                        src="/scene-images/chef-no-text.jpg"
                        alt=""
                        quality={quality}
                        className='layer-image'
                    />
				</div>
				<div className="layers__item">
                    <Image
                        fill={true}
                        src="/scene-images/cxy-no-text.jpg"
                        alt=""
                        quality={quality}
                        className='layer-image'
                    />
				</div>
				<div className="layers__item">
                    <Image
                        fill={true}
                        src="/scene-images/dutcy-no-text.jpg"
                        alt=""
                        quality={quality}
                        className='layer-image'
                    />
				</div>
				<div className="layers__item">
                    <Image
                        fill={true}
                        src="/scene-images/fede-no-text.jpg"
                        alt=""
                        quality={quality}
                        className='layer-image'
                    />
				</div>
				<div className="layers__item">
                    <Image
                        fill={true}
                        src="/scene-images/lucy-no-text.jpg"
                        alt=""
                        quality={quality}
                        className='layer-image'
                    />
				</div>
				<div className="layers__item">
                    <Image
                        fill={true}
                        src="/scene-images/maz-no-text.jpg"
                        alt=""
                        quality={quality}
                        className='layer-image'
                    />
				</div>
				<div className="layers__item">
                    <Image
                        fill={true}
                        src="/scene-images/omo-no-text.jpg"
                        alt=""
                        quality={quality}
                        className='layer-image'
                    />
				</div>
				<div className="layers__item">
                    <Image
                        fill={true}
                        src="/scene-images/pete-no-text.jpg"
                        alt=""
                        quality={quality}
                        className='layer-image'
                    />
                </div>*/}
			</div>
            
		</div>
	</section>
    </>
  )
}

export default RapidLayers