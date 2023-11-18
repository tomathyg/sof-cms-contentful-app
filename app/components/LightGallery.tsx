'use client'

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { render } from 'react-dom';

import LightGallery from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

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
    const onInit = () => {
        console.log('lightGallery has been initialized');
    };
    const lightGallery = useRef<any>(null);

    const [container, setContainer] = useState(null);
    const [items, setItems] = useState([]);

    return (
        <div className="App">
            <LightGallery
                onInit={onInit}
                speed={500}
                plugins={[lgThumbnail, lgZoom]}
            >
                {submissions.map((item, index) => {
                    if (item.submissionImage && item.name) {
                        return (
                            <a key={index} href={item.submissionImage.url}>
                                <Image 
                                    loader={imageLoader} 
                                    src={item.submissionImage.url} 
                                    alt={item.name} 
                                    width={500}
                                    height={500}
                                    //sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    //className='submission-image'
                                />
                            </a>
                        )
                    }
                })}
                {/*<a href="img/img1.jpg">
                    <img alt="img1" src="img/thumb1.jpg" />
                </a>
                <a href="img/img2.jpg">
                    <img alt="img2" src="img/thumb2.jpg" />
                </a>*/}
            </LightGallery>
        </div>
    );
}

export default SwiperGallery;