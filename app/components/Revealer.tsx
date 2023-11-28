'use client'

import { useRouter } from 'next/navigation'

import React, { useEffect, useRef, useImperativeHandle, forwardRef } from 'react';
import { gsap } from 'gsap';
//import { randomFloat } from '../js/utils';

// ImageLayer is now a function that initializes the DOM references.
function useImageLayer(el: Element) {
  const image = el.querySelector('.layers__item-img');
  return { el, image };
}

// Define the interface for the methods you want to expose
interface RevealerMethods {
    reveal: () => void;
}

const Revealer = forwardRef<RevealerMethods, {}>((props, ref) => {
  // Use useRef to store the GSAP timeline and other DOM elements.
  const mainRef = useRef<HTMLElement | null>(null);
  const timeline = useRef<GSAPTimeline | null>(null);
  const layerRefs = useRef<Array<ReturnType<typeof useImageLayer>>>([]);
  const gridItemRefs = useRef<HTMLElement[]>([]);

  const gridInnerRef = useRef<HTMLElement | null>(null);
  const menuRef = useRef<HTMLElement | null>(null);
  const newMainRef = useRef<HTMLElement | null>(null);

  const randomFloat = (min:number,max:number) => parseFloat(Math.min(min + (Math.random() * (max - min)), max).toFixed(2));

  const router = useRouter();

  // Use useEffect to replicate the constructor's functionality and side effects.
  useEffect(() => {
    // Set up DOM references.
    mainRef.current = document.querySelector('.revealer-grid-container');
    layerRefs.current = [...document.querySelectorAll('.layers__item')].map(item => useImageLayer(item));
    gridItemRefs.current = Array.from(document.querySelectorAll('.grid__item') as NodeListOf<HTMLElement>);
    
    gridInnerRef.current = document.querySelector('.revealer-grid-inner');
    menuRef.current = document.querySelector('.menu');
    newMainRef.current = document.querySelector('.reveal-page-content');

    //router.prefetch('/');
    
    // Create the timeline.
    timeline.current = gsap.timeline({
        paused: true,
        onComplete: () => {
            // This function will be called when the timeline completes
            // Check if a navigation path is set
            if (timeline.current?.vars.path) {
              //router.push(timeline.current.vars.path);
            }
        }
    });
    const options = { duration: 1, panelDelay: 0.15 };

    // Animate the Image layers.
    layerRefs.current.forEach((layer, i) => {
        if(timeline.current) {
            timeline.current.to([layer.el, layer.image], {
                duration: options.duration,
                ease: 'Power2.easeInOut',
                y: 0
            }, options.panelDelay * i);
        }
    });

    const layersTotal = layerRefs.current.length;

    timeline.current.addLabel('halfway', options.panelDelay * (layersTotal - 1) + options.duration)
      .call(() => {
        // Hide all Image layers except the last one.
        layerRefs.current.filter((_, pos) => pos !== layersTotal - 1)
          .forEach((panel) => {
            gsap.set(panel.el, { opacity: 0 });
          });
        // Remove intro class from the main element.
        if (mainRef.current) {
            mainRef.current.classList.remove('intro');
        }
      }, [], 'halfway')
      .call(() => {
        // This will execute right before hiding the last image layer
        //router.push('/');
        //router.replace('/', { shallow: true });
        if (gridInnerRef.current) {
            gridInnerRef.current.classList.add('hidden');
        }
        if (newMainRef.current) {
            newMainRef.current.classList.remove('hidden');
        }
      }, [], 'halfway') // This ensures the call is placed at the 'halfway' label
      // Now hide the last Image Layer.
      .to([layerRefs.current[layersTotal - 1].el, layerRefs.current[layersTotal - 1].image], {
        duration: options.duration,
        ease: 'Expo.easeInOut',
        y: (_, index) => index ? '101%' : '-101%'
      }, 'halfway')
      // Show grid items.
      .fromTo(gridItemRefs.current, {
        y: () => randomFloat(100, 500)
      }, {
        duration: options.duration * 2,
        ease: 'Expo.easeOut',
        y: 0,
        opacity: 1
      }, 'halfway');
  }, []);

    // Method to start the animation.
    useImperativeHandle(ref, () => ({
        reveal: (path = '/') => {
            if (timeline.current) {
                timeline.current.vars.path = path;
            }

            timeline.current?.restart();
        }
    }));

  // Render nothing or a placeholder since this component is mainly for controlling animations.
  return null;
})

export default Revealer