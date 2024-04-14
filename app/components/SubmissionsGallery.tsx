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
}

interface SubmissionsGalleryProps {
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

const imageHeight = '300px';
const imageMargin = '0';

const SubmissionsGallery: FC<SubmissionsGalleryProps> = ({ submissions }) => {
  console.log("SUBMISSIONS:", submissions);
  return (
    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'center', flexWrap: 'wrap', gap: '15px', padding: '0 15px' }}>
      {submissions.map((item, index) => {
        if (item.submissionImage && item.submissionImage.url) {
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
                  src={item.submissionImage.url} 
                  alt='' 
                  fill={true}
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