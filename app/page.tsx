import { draftMode } from 'next/headers'
import React from 'react'

import { getHomePageData } from '../lib/api-2'

//import ScenesLogo from './components/ScenesLogo'
import ScenesLogo2 from './components/ScenesLogo2'

import RapidLayers from './components/RapidLayers'
//import FloatingGallery from './components/floatingGallery/FloatingGallery'

function Intro(heading:string) {
  return (
    <section className="flex-col flex items-center md:justify-between">
      <h1 className={`my-6 md:text-8xl font-bold tracking-tighter leading-tight`}>
        <ScenesLogo2 />
      </h1>
      <h2 className={`mb-8 text-center text-base sm:text-lg md:text-2xl`}><span>AN INTERACTIVE JOURNEY</span><br /><span>THROUGH PERSONAL MOMENTS</span></h2>
    </section>
  )
}

export default async function Page() {

  //const rewrites = require('../lib/generateSceneImageRewrites.js');
  //console.log("REWRITES", rewrites());

  const content = await getHomePageData(false);
  //console.log("HOME PAGE CONTENT:", content);
  const floatingImages = content.floatingImagesCollection.items;
  //console.log("FLOATING IMAGES:", content.floatingImagesCollection.items);
  const layers = content.introLayersImagesCollection.items;
  //console.log("LAYERS:", content.introLayersImagesCollection.items);
  //const processPageContent = await getProcessPageData(false);
  //console.log("PROCESS PAGE CONTENT", processPageContent);

  return (
    <div>
      <RapidLayers
        floatingImages={floatingImages}
        layers={layers}
        revealContent={content}
      />
    </div>
  )
}
