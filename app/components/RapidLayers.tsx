'use client'

import '../styles.css'

import React, { useState, useEffect, useRef } from 'react';

//import Cursor from '../../unused/js/cursor';
//import Revealer from '../js/revealer';
//import { preloadImages } from '../../unused/js/utils';

import Revealer from './Revealer';
import StepsContent from './StepsContent';
//import Image from 'next/image';
//import ScenesLogo from '../components/ScenesLogo'
import ScenesLogo2 from '../components/ScenesLogo2'

interface RevealerMethods {
    reveal: () => void;
}

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

    //const revealer = new Revealer();

    const [isDataLoaded, setIsDataLoaded] = useState(false);

    const revealerRef = useRef<RevealerMethods | null>(null);

    const handleReveal = () => {
        console.log("HANDLE REVEAL", revealerRef);
        // Perform a runtime check to ensure that current is not undefined.
        if (revealerRef.current) {
          revealerRef.current.reveal();
        }
    };

    // 640, 750, 828, 1080, 1200, 1920, 2048, 3840
    const imagesWidth = 640;
    const imagesQuality = 60;

    const layersWidth = 1080;
    const layersQuality = 50;

  return (
    <>
    <Revealer ref={revealerRef} />
    <section className="revealer-section">
        <div className='reveal-page-content hidden'>
            <StepsContent
                content={revealContent}
            />
        </div>
		<div className="revealer-grid-container intro">
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
                        {floatingImages.filter(item => item && item.url).slice(0, 8).map((item, index) => (
                            <div key={index} className={`grid__item grid__item--${index + 1}`} style={{ backgroundImage: `url(${item.url}?w=${imagesWidth}&q=${imagesQuality})`}}></div>
                        ))}
                    </div>
                    <section className="intro-header-section flex-col flex items-center justify-center absolute left-0 w-full h-full px-12">
                        <h1 className={`my-6 md:text-8xl font-bold tracking-tighter leading-tight scenes-logo-header`}>
                            {/*{heading}*/}
                            <ScenesLogo2 />
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
                {layers.filter(item => item && item.url).map((item, index) => (
                    <div key={index} className="layers__item">
                        <div className="layers__item-img" style={{ backgroundImage: `url(${item.url}?w=${layersWidth}&q=${layersQuality})`}}></div>
                    </div>
                ))}
			</div>
		</div>
	</section>
    </>
  )
}

export default RapidLayers