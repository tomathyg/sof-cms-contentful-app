'use client'

import Image from 'next/image';
import { useState } from 'react'

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
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const openLightbox = (index:any) => {
        setCurrentIndex(index);
        setLightboxOpen(true);
    };

    //console.log("SUBMISSIONS:", submissions);

    //const lightboxSrcs = submissions.map(item => ({ src: item.submissionImage.url }));

    const lightboxSrcs = submissions
        .filter(item => item.submissionImage && item.submissionImage.url && item.name && item.text)
        .map(item => ({ src: item.submissionImage.url }));

    //console.log("SRCS:", lightboxSrcs);

  return (
    <>
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
        {submissions.map((item, index) => {
            if (item.submissionImage && item.submissionImage.url && item.name && item.text) {
                //console.log(item);
                //console.log(index);
                return (
                    <SwiperSlide key={index}>
                        <Image 
                            loader={imageLoader} 
                            src={item.submissionImage.url} 
                            alt={item.name} 
                            width={500}
                            height={500}
                            onClick={() => openLightbox(index)}
                            //sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className='swiper-image'
                        />
                    </SwiperSlide>
                )
            }
        })}
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
    </Swiper>

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