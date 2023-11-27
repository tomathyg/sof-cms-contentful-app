'use client'

import React, { useEffect, useRef, useImperativeHandle, forwardRef } from 'react';
import { gsap } from 'gsap';
import { randomFloat } from '../js/utils';

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

  // Use useEffect to replicate the constructor's functionality and side effects.
  useEffect(() => {
    // Set up DOM references.
    mainRef.current = document.querySelector('main');
    layerRefs.current = [...document.querySelectorAll('.layers__item')].map(item => useImageLayer(item));
    gridItemRefs.current = Array.from(document.querySelectorAll('.grid__item') as NodeListOf<HTMLElement>);
    
    // Create the timeline.
    timeline.current = gsap.timeline({ paused: true });
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
        reveal: () => {
            timeline.current?.restart();
        }
    }));

  // Render nothing or a placeholder since this component is mainly for controlling animations.
  return null;
})

export default Revealer