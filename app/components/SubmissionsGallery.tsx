'use client'

import React, { FC, Fragment } from 'react';
import Image from 'next/image';

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

const SubmissionsGallery: FC<SubmissionsGalleryProps> = ({ submissions, slug }) => {
  console.log("SUBMISSIONS:", submissions);

  const imageBase = '/scenes/' + slug + '/gallery/';

  return (
    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'center', flexWrap: 'wrap', gap: '15px', padding: '0 15px' }}>
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
                  aspectRatio: '1 / 1',
                  margin: imageMargin, 
                  height: imageHeight 
                }}
              >
                <Image 
                  loader={imageLoader} 
                  src={imageSrc} 
                  alt='' 
                  fill={false}
                  height={300}
                  width={300}
                  className='submission-image'
                />
              </div>
            </Fragment>
          );
        }
      })}
    </div>
  );
}

export default SubmissionsGallery;