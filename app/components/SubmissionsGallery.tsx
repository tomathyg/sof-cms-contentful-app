'use client'

import React, { FC, Fragment, useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import "yet-another-react-lightbox/plugins/captions.css";

interface SubmissionImage {
  url: string;
}

interface Submission {
  name: string;
  text: string;
  submissionImage: SubmissionImage;
  id: string;
}

interface SubmissionsGalleryProps {
  submissions: Submission[];
  slug: string;
  zoraUrl?: string;
}

type ImageLoaderParams = {
  src: string;
  width: number | string;
  quality?: number | string;
}

const imageLoader = ({ src, width, quality }: ImageLoaderParams) => {
  return `${src}?w=${width}&q=${quality || 60}`;
}

const imageHeight = '300px';
const imageMargin = '0';

const SubmissionsGallery: FC<SubmissionsGalleryProps> = ({ submissions, slug, zoraUrl }) => {
  //console.log("zoraUrl:", zoraUrl);
  //console.log("SUBMISSIONS:", submissions);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  //const [loadedImages, setLoadedImages] = useState<string[]>([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    //const media = window.matchMedia(`(max-width: 641px)`);
    const handleResize = () => {
        setIsMobile(window.innerWidth < 641);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const openLightbox = (index:any) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const imageBase = '/scenes/' + slug + '/gallery/';

  const lightboxSrcs = submissions
    .filter(item => item && item.submissionImage && item.submissionImage.url && item.id)
    .map((item, index) => ({ 
        src: imageBase + (item.id.split('-')[1]) + '.jpg?w=1080&q=75'
    }));

  return (
    <>
    <h2 className="gallery-title uppercase font-semibold leading-none text-center">
      GALLERY
    </h2>
    <div className="submissions-grid-gallery-wrapper">
    <div className="submissions-grid-gallery">
      {submissions.map((item, index) => {
        if (item.submissionImage && item.submissionImage.url && item.id) {
          const imageSlug = item.id.split('-')[1];
          const imageSrc = imageBase + imageSlug + '.jpg';// + '/'
          return (
            <Fragment key={index}>
              <div 
                className="gallery-image" 
                style={{ 
                  position: 'relative', 
                  width: '300px',
                  margin: imageMargin, 
                  height: imageHeight
                }}
              >
                <Image 
                  loader={imageLoader} 
                  src={imageSrc} 
                  alt={`Scene image ${imageSlug}`} 
                  fill={false}
                  height={300}
                  width={300}
                  sizes="(max-width: 640px) 100vw, (max-width: 959px) 32vw, 24vw"
                  className='submission-image'
                  onClick={() => openLightbox(index)}
                  loading="lazy"
                  priority={false}
                />

                {/*{zoraUrl && (
                  <Link target="_blank" rel="external" href={zoraUrl} className="scene-zora-link text-center container-start w-full inline-block bg-orange leading-10 border font-semibold font-sans text-[13px]">COLLECT SCENE</Link>
                )}*/}
              </div>
            </Fragment>
          );
        }
      })}
    </div>
    </div>
    {lightboxOpen && !isMobile && (
        <Lightbox
            open={lightboxOpen}
            close={() => setLightboxOpen(false)}
            index={currentIndex}
            slides={lightboxSrcs}
            //plugins={[Share]}
            //captions={{ ref: captionsRef }}
        />
    )}
    </>
  );
}

export default SubmissionsGallery;