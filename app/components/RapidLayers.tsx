'use client'

import '../styles.css'

import React, { useEffect, useRef } from 'react';

import Cursor from '../js/cursor';
//import Revealer from '../js/revealer';
import { preloadImages } from '../js/utils';

import Revealer from './Revealer';

// Define an interface for the methods you want to call on Revealer.
interface RevealerMethods {
    reveal: () => void;
}

export default function RapidLayers() {

    //const content = await getHomePageData(false);
    //console.log("HOME PAGE CONTENT:", content);

    //const revealer = new Revealer();

    const revealerRef = useRef<RevealerMethods | null>(null);

    const handleReveal = () => {
        console.log("HANDLE REVEAL", revealerRef);
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

  return (
    <>
    <Revealer ref={revealerRef} />
    <section className="loading">
		<main className="intro">
			{/*<div className="frame">
				<h1 className="frame__title">Rapid image layers animation</h1>
				<div className="frame__links">
					<a href="https://tympanus.net/codrops/?p=48939">Article</a>
					<a href="https://github.com/codrops/RapidLayersAnimation/">GitHub</a>
				</div>
				<p className="frame__info">Click the middle menu item to see the effect.</p>
            </div>*/}
			<div className="content">
				<div className="grid">
					<div className="grid__item grid__item--a" style={{ backgroundImage: `url(images/3.jpg)`}}></div>
					<div className="grid__item grid__item--b" style={{ backgroundImage: `url(images/2.jpg)`}}></div>
					<div className="grid__item grid__item--c" style={{ backgroundImage: `url(images/10.jpg)`}}></div>
					<div className="grid__item grid__item--d" style={{ backgroundImage: `url(images/5.jpg)`}}></div>
					<div className="grid__item grid__item--e" style={{ backgroundImage: `url(images/8.jpg)`}}></div>
                    <div className="grid__item grid__item--f" style={{ backgroundImage: `url(images/6.jpg)`}}></div>
				</div>
				<nav className="menu">
					{/*<a className="menu__item">
						<h2 className="menu__item-title">Underground</h2>
						<p className="menu__item-subtitle">Hey, dreamypie, wake up!</p>
                    </a>*/}
					<a className="menu__item menu__item--current" onClick={handleReveal}>
						<h2 className="menu__item-title">CREATE</h2>
						{/*<p className="menu__item-subtitle">Yo, sleepyhead! What's up?</p>*/}
					</a>
					{/*<a className="menu__item">
						<h2 className="menu__item-title">Interrogation</h2>
						<p className="menu__item-subtitle">Ho ho, honey! What's the matter?</p>
                    </a>*/}
				</nav>
			</div>
			<div className="layers">
				<div className="layers__item">
					<div className="layers__item-img" style={{ backgroundImage: `url(images/1.jpg)`}}></div>
				</div>
				<div className="layers__item">
					<div className="layers__item-img" style={{ backgroundImage: `url(images/2.jpg)`}}></div>
				</div>
				<div className="layers__item">
					<div className="layers__item-img" style={{ backgroundImage: `url(images/3.jpg)`}}></div>
				</div>
				<div className="layers__item">
					<div className="layers__item-img" style={{ backgroundImage: `url(images/4.jpg)`}}></div>
				</div>
				<div className="layers__item">
					<div className="layers__item-img" style={{ backgroundImage: `url(images/9.jpg)`}}></div>
				</div>
				<div className="layers__item">
					<div className="layers__item-img" style={{ backgroundImage: `url(images/6.jpg)`}}></div>
				</div>
				<div className="layers__item">
					<div className="layers__item-img" style={{ backgroundImage: `url(images/7.jpg)`}}></div>
				</div>
				<div className="layers__item">
					<div className="layers__item-img" style={{ backgroundImage: `url(images/8.jpg)`}}></div>
				</div>
				<div className="layers__item">
					<div className="layers__item-img" style={{ backgroundImage: `url(images/5.jpg)`}}></div>
				</div>
				<div className="layers__item">
					<div className="layers__item-img" style={{ backgroundImage: `url(images/10.jpg)`}}></div>
				</div>
			</div>
		</main>
		<svg className="cursor" width="220" height="220" viewBox="0 0 220 220">
			<defs>
				<filter id="filter-1" x="-50%" y="-50%" width="200%" height="200%" 
				filterUnits="objectBoundingBox">
					<feTurbulence type="fractalNoise" baseFrequency="0" numOctaves="1" result="warp" />
					<feOffset dx="-30" result="warpOffset" />
					<feDisplacementMap xChannelSelector="R" yChannelSelector="G" scale="30" in="SourceGraphic" in2="warpOffset" />
				</filter>
			</defs>
			<circle className="cursor__inner" cx="110" cy="110" r="60"/>
		</svg>
		{/*<script src="js/index.js"></script>*/}
	</section>
    </>
  )
}
