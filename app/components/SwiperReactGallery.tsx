'use client'

import Image from 'next/image';
import React, { useState } from 'react'

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

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
    slidesPerViewCount: number;
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

const SwiperGallery: React.FC<SwiperGalleryProps> = ({ submissions, slidesPerViewCount }) => {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [loadedImages, setLoadedImages] = useState<string[]>([]);

    const handleImageLoad = (url:string) => {
        setLoadedImages(prev => [...prev, url]);
    };

    const openLightbox = (index:any) => {
        setCurrentIndex(index);
        setLightboxOpen(true);
    };

    //console.log("SUBMISSIONS:", submissions);

    //const lightboxSrcs = submissions.map(item => ({ src: item.submissionImage.url }));

    const lightboxSrcs = submissions
        .filter(item => item.submissionImage && item.submissionImage.url && item.name && item.text)
        .map(item => ({ src: item.submissionImage.url + '?w=1080&q=75' }));

    //console.log("SRCS:", lightboxSrcs);

  return (
    <>
    {/* Invisible image loader */}
   {/*<div style={{ display: 'none' }}>
        {submissions.slice(0, slidesPerViewCount).map((item, index) => (
          <img
            key={index}
            src={item.submissionImage.url}
            alt={`Preload ${item.name}`}
            onLoad={() => handleImageLoad(item.submissionImage.url)}
          />
        ))}
    </div>
        {loadedImages.length >= slidesPerViewCount && (*/}
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={20}
      slidesPerView={slidesPerViewCount}
      navigation
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      className={''}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      }}
    >
        {submissions.map((item, index) => {
            if (item.submissionImage && item.submissionImage.url && item.name && item.text) {
                //console.log(item);
                //console.log(index);
                return (
                    <SwiperSlide key={index}>
                        <Image 
                            loader={imageLoader} 
                            unoptimized={false}
                            loading="lazy"
                            src={item.submissionImage.url} 
                            alt={item.name} 
                            width={600}
                            height={600}
                            onClick={() => openLightbox(index)}
                            //onLoad={() => handleImageLoad(item.submissionImage.url)}
                            onLoad={(e) => console.log("image loaded")}
                            onError={(e) => console.error("image load error")}
                            //sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className='swiper-image'
                        />
                        <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                    </SwiperSlide>
                )
            }
        })}
    </Swiper>
    {/*})}*/}

    {lightboxOpen && (
        <Lightbox
            open={lightboxOpen}
            close={() => setLightboxOpen(false)}
            index={currentIndex}
            slides={lightboxSrcs}
        />
    )}
    </>
  );
};

export default SwiperGallery;