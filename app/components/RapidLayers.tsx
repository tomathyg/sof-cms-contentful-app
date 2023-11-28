'use client'

import '../styles.css'

import React, { useEffect, useRef } from 'react';

//import Cursor from '../../unused/js/cursor';
//import Revealer from '../js/revealer';
//import { preloadImages } from '../../unused/js/utils';

import Revealer from './Revealer';

import StepsContent from './StepsContent';

import Image from 'next/image';

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

import cloudinaryLoader from './CloudinaryLoader';

export default function RapidLayers() {

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

    const quality = 75;

  return (
    <>
    <Revealer ref={revealerRef} />
    <section className="loading">
		<div className="revealer-grid-container intro">
			<div className="content">
				<div className="revealer-grid">
					<div className="grid__item grid__item--a" style={{ backgroundImage: `url(/_next/image?url=%2Fscene-images%2Fchef-no-text.jpg&w=1080&q=${quality})`}}></div>
					<div className="grid__item grid__item--b" style={{ backgroundImage: `url(/_next/image?url=%2Fscene-images%2Fben-no-text.jpg&w=1080&q=${quality})`}}></div>
					<div className="grid__item grid__item--c" style={{ backgroundImage: `url(/_next/image?url=%2Fscene-images%2Fpete-no-text.jpg&w=1080&q=${quality})`}}></div>
					<div className="grid__item grid__item--d" style={{ backgroundImage: `url(/_next/image?url=%2Fscene-images%2Fdutcy-no-text.jpg&w=1080&q=${quality})`}}></div>
					<div className="grid__item grid__item--e" style={{ backgroundImage: `url(/_next/image?url=%2Fscene-images%2Fmaz-no-text.jpg&w=1080&q=${quality})`}}></div>
                    <div className="grid__item grid__item--f" style={{ backgroundImage: `url(/_next/image?url=%2Fscene-images%2Ffede-no-text.jpg&w=1080&q=${quality})`}}></div>
				</div>
				<nav className="menu">
					<a className="menu__item menu__item--current" onClick={handleReveal}>
						<h2 className="menu__item-title">CREATE</h2>
					</a>
				</nav>
                <div className='reveal-page-content hidden'>
                    <StepsContent />
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

                <div className="layers__item">
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
                </div>

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
