'use client'

import { useRef, useEffect } from 'react';
import { register } from 'swiper/element/bundle';

import type { SwiperSlideProps, SwiperProps } from 'swiper/react';

declare global {
    namespace JSX {
      interface IntrinsicElements {
        "swiper-container": React.DetailedHTMLProps<
          React.HTMLAttributes<HTMLElement> & SwiperProps,
          HTMLElement
        >;
        "swiper-slide": React.DetailedHTMLProps<
          React.HTMLAttributes<HTMLElement> & SwiperSlideProps,
          HTMLElement
        >;
      }
    }
}

import Image from 'next/image';

register();

interface SubmissionImage {
    url: string;
}

interface Submission {
    name: string;
    text: string;
    submissionImage: SubmissionImage;
}

interface SwiperGalleryProps {
    submissions: Submission[];
}

type ImageLoaderParams = {
    src: string;
    width: number | string;
    quality?: number | string;
}

const imageLoader = ({ src, width, quality }: ImageLoaderParams) => {
    return `${src}?w=${width}&q=${quality || 75}`;
}

const imageHeight = '400px';
const imageMargin = '20px 0';

const SwiperGallery: React.FC<SwiperGalleryProps> = ({ submissions }) => {
  const swiperElRef = useRef(null);

  //console.log("SWIPER SUBMISSION:", submissions);

  useEffect(() => {
    // listen for Swiper events using addEventListener
    swiperElRef.current.addEventListener('swiperprogress', (e) => {
      const [swiper, progress] = e.detail;
      console.log(progress);
    });

    swiperElRef.current.addEventListener('swiperslidechange', (e) => {
      console.log('slide changed');
    });
  }, []);

  return (
    <swiper-container
      ref={swiperElRef}
      slides-per-view="6"
      navigation="true"
      pagination="true"
    >
        {submissions.map((item, index) => {
            if (item.submissionImage && item.name) {
                console.log("SUBMISSION");
                <swiper-slide>
                    Slide {index}
                    {/*<Image 
                        loader={imageLoader} 
                        src={item.submissionImage.url} 
                        alt={item.name} 
                        fill={true}
                        className='submission-image'
            />*/}
                </swiper-slide>
            }
        })}
      {/*<swiper-slide>Slide 1</swiper-slide>
      <swiper-slide>Slide 2</swiper-slide>
    <swiper-slide>Slide 3</swiper-slide>*/}
    </swiper-container>
  );
};

export default SwiperGallery;