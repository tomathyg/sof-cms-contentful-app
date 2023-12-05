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
    id: string;
    text: string;
    submissionImage: SubmissionImage;
}

interface SwiperGalleryProps {
    slug: string;
    submissions: Submission[];
    slidesPerViewCount: number;
}

type ImageLoaderParams = {
    src: string;
    width: number | string;
    quality?: number | string;
}

const imageLoader = ({ src, width, quality }: ImageLoaderParams) => {
    return `${src}?w=${width}&q=${quality || 60}`;
}

const imageHeight = '400px';
const imageMargin = '20px 0';

const SwiperGallery: React.FC<SwiperGalleryProps> = ({ slug, submissions, slidesPerViewCount }) => {
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
    
    const imageBase = '/scenes/' + slug + '/gallery/';

    const lightboxSrcs = submissions
        .filter(item => item.submissionImage && item.submissionImage.url && item.id)
        .map((item, index) => ({ src: imageBase + (item.id.split('-')[1]) + '.jpg?w=1080&q=75' }));
        //.map((item, index) => ({ src: item.submissionImage.url + '?w=1080&q=75' }));

    //console.log("SRCS:", lightboxSrcs);

  return (
    <>
        {/* Invisible image loader */}
        {/*<div style={{ display: 'none' }}>
            {submissions.slice(0, slidesPerViewCount).map((item, index) => {
                const imageUrlWithCacheBust = `${item.submissionImage.url}`;
                return (
                    <Image
                        loader={imageLoader}
                        key={index}
                        width={600}
                        height={600}
                        src={imageUrlWithCacheBust}
                        alt={`Preload ${item.name}`}
                        onLoad={() => handleImageLoad(item.submissionImage.url)}
                    />
                );
            })}
        </div>*/}

        {/*{loadedImages.length >= slidesPerViewCount && (*/}
            <h2 className="gallery-title uppercase font-semibold leading-none text-center">
                GALLERY
            </h2>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={25}
                slidesPerView={slidesPerViewCount}
                navigation
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                className={'swiper-gallery'}
                breakpoints={{
                    380: {
                        slidesPerView: 2,
                        //spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        //spaceBetween: 10,
                    },
                    1024: {
                        slidesPerView: 5,
                        //spaceBetween: 10,
                    },
                }}
            >
            {submissions.map((item, index) => {
                if (item.submissionImage && item.submissionImage.url && item.text && item.id) {
                    //console.log(item);
                    //console.log(index);
                    //console.log("URL:", item.submissionImage.url);

                    //const imageSrc = item.submissionImage.url;
                    const imageSlug = item.id.split('-')[1];
                    const imageSrc = imageBase + imageSlug + '.jpg';// + '/'
                    //const imageSrc = item.submissionImage.url;

                    return (
                        <SwiperSlide key={index}>
                            <Image 
                                loader={imageLoader} 
                                unoptimized={false}
                                loading="lazy"
                                src={imageSrc}
                                alt={`Scene image ${item.id}`} 
                                width={300}
                                height={300}
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