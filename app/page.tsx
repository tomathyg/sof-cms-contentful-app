//import Link from 'next/link'
import { draftMode } from 'next/headers'
import React from 'react'

import { getHomePageData } from '../lib/api-2'

//import TypeForm from './components/TypeForm'
import ScenesLogo from './components/ScenesLogo'

import RapidLayers from './components/RapidLayers'
import FloatingGallery from './components/floatingGallery/FloatingGallery'

function Intro(heading:string) {
  return (
    <section className="flex-col flex items-center md:justify-between">
      <h1 className={`my-6 md:text-8xl font-bold tracking-tighter leading-tight`}>
        {/*{heading}*/}
        <ScenesLogo />
      </h1>
      <h2 className={`mb-8 text-center text-base sm:text-lg md:text-2xl`}><span>AN INTERACTIVE JOURNEY</span><br /><span>THROUGH PERSONAL MOMENTS</span></h2>
    </section>
  )
}

export default async function Page() {

  const content = await getHomePageData(false);
  console.log("HOME PAGE CONTENT:", content);
  const layers = content.introLayersImagesCollection.items;
  console.log("LAYERS:", content.introLayersImagesCollection.items);

  return (
  <div>
    {/*<FloatingGallery />*/}
    <RapidLayers
      layers={layers}
    />
  </div>
    /*<RapidLayers />*/
    /*<div className="home-container p-5 m-5 mt-0 border">
      <div className="home-inner p-10 m-1 border">
        {Intro(content.heading)}
        <section className={`flex justify-center`}>
          <TypeForm
            id={content.typeFormId}
          />
        </section>
      </div>
    </div>*/
  )
}
