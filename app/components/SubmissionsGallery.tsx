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

const imageHeight = '400px';
const imageMargin = '20px 0';

const SubmissionsGallery: FC<SubmissionsGalleryProps> = ({ submissions }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
      {submissions.map((item, index) => {
        return (
          <Fragment key={index}>
            <div 
              className="gallery-image" 
              style={{ 
                position: 'relative', 
                width: '100%', 
                margin: imageMargin, 
                height: imageHeight 
              }}
            >
              <Image 
                loader={imageLoader}
                src={item.submissionImage.url} 
                alt={item.name} 
                layout='fill'
                objectFit='contain'
                objectPosition='left'
              />
            </div>
            <p>{item.text}</p>
          </Fragment>
        );
      })}
    </div>
  );
}

export default SubmissionsGallery;