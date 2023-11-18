'use client'

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Image from 'next/image';

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
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
        {submissions.map((item, index) => {
            if (item.submissionImage && item.name) {
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
                            //sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            //className='submission-image'
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
  );
};

export default SwiperGallery;