'use client';
import styles from './page.module.scss'
import Image from 'next/image';
import { useRef } from 'react';
import gsap from 'gsap';
/*import {
    floating1, 
    floating2, 
    floating3, 
    floating4, 
    floating5, 
    floating6, 
    floating7, 
    floating8
} from './data'*/

const images = [
  '/_next/image?url=%2Fscene-images%2Fchef-no-text.jpg',
  '/_next/image?url=%2Fscene-images%2Fben-no-text.jpg',
  '/_next/image?url=%2Fscene-images%2Fpete-no-text.jpg',
  '/_next/image?url=%2Fscene-images%2Fdutcy-no-text.jpg',
  '/_next/image?url=%2Fscene-images%2Falyss-no-text.jpg',
  '/_next/image?url=%2Fscene-images%2Fmaz-no-text.jpg',
  '/_next/image?url=%2Fscene-images%2Ffede-no-text.jpg',
  '/_next/image?url=%2Fscene-images%2Fomo-no-text.jpg',
]

export default function FloatingGallery() {

  const width = '640';
  const height = '640';
  const quality = '75';
  const imageParams = '&w=' + width + '&q=' + quality;

  const displayHeightWidth = '300';

  const plane1 = useRef(null);
  const plane2 = useRef(null);
  const plane3 = useRef(null);
  let requestAnimationFrameId:any = null;
  let xForce = 0;
  let yForce = 0;
  const easing = 0.08;
  const speed = 0.01;

  const manageMouseMove = (e:any) => {
    const { movementX, movementY } = e
    xForce += movementX * speed;
    yForce += movementY * speed;

    if(requestAnimationFrameId == null){
      requestAnimationFrameId = requestAnimationFrame(animate);
    }
  }

  const lerp = (start:any, target:any, amount:any) => start * (1 - amount) +target * amount;

  const animate = () => {
    xForce = lerp(xForce, 0, easing);
    yForce = lerp(yForce, 0, easing);
    gsap.set(plane1.current, {x: `+=${xForce}`, y: `+=${yForce}`})
    gsap.set(plane2.current, {x: `+=${xForce * 0.5}`, y: `+=${yForce * 0.5}`})
    gsap.set(plane3.current, {x: `+=${xForce * 0.25}`, y: `+=${yForce * 0.25}`})

    if(Math.abs(xForce) < 0.01) xForce = 0;
    if(Math.abs(yForce) < 0.01) yForce = 0;
    
    if(xForce != 0 || yForce != 0){
      requestAnimationFrame(animate);
    }
    else{
      cancelAnimationFrame(requestAnimationFrameId)
      requestAnimationFrameId = null;
    }
  }

  return (
    <div onMouseMove={(e) => {manageMouseMove(e)}} className={styles.main}>
      <div ref={plane1} className={styles.plane}>
          <Image 
            src={images[0]+imageParams}
            alt='image'
            width={displayHeightWidth}
            height={displayHeightWidth}
          />
           <Image 
            src={images[1]+imageParams}
            alt='image'
            width={displayHeightWidth}
            height={displayHeightWidth}
          />
          <Image 
            src={images[6]+imageParams}
            alt='image'
            width={displayHeightWidth}
            height={displayHeightWidth}
          />
      </div>
      <div ref={plane2} className={styles.plane}>
          <Image 
            src={images[3]+imageParams}
            alt='image'
            width={displayHeightWidth}
            height={displayHeightWidth}
          />
           <Image 
            src={images[5]+imageParams}
            alt='image'
            width={displayHeightWidth}
            height={displayHeightWidth}
          />
          <Image 
            src={images[7]+imageParams}
            alt='image'
            width={displayHeightWidth}
            height={displayHeightWidth}
          />
      </div>
      <div ref={plane3} className={styles.plane}>
          <Image 
            src={images[2]+imageParams}
            alt='image'
            width={displayHeightWidth}
            height={displayHeightWidth}
          />
           <Image 
            src={images[4]+imageParams}
            alt='image'
            width={displayHeightWidth}
            height={displayHeightWidth}
          />
      </div>
      <div className={styles.title}>
        <h1>Floating Images Gallery</h1>
        <p>Next.js and GSAP</p>
      </div>
    </div>
  )
}
