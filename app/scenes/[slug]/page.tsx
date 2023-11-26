import Link from 'next/link'
import { draftMode } from 'next/headers'

//import { type } from 'os'
import React, { useState, useContext, createContext } from 'react';

//import { Markdown } from '../../../lib/markdown'
import { getAllScenes, getSceneAndMoreScenes } from '../../../lib/api-2'

import NFTPaperCheckout from '../../components/PaperCheckout'
import CrossmintPayButtonManifold from '../../components/CrossmintPayButtonManifold'
import CrossmintPayButtonProduction from '../../components/CrossMintPayButtonProduction'

//import Player from '../../components/AudioPlayer'
//import DecentAudioPlayer from '../../components/DecentAudioPLayer'
import H5Player from '../../components/H5AudioPlayer'

import ClientImage from '../../components/ClientImage'

//import SubmissionsGallery from '../../components/SubmissionsGallery'
//import SwiperGallery from '../../components/SwiperGalleryWebComponent';
import YetCarousel from '../../components/YetGallery'
//import LightGallery from '../../components/LightGallery'
import SwiperReactGallery from '../../components/SwiperReactGallery';
import YetGallery from '../../components/YetGallery';

import BackgroundImageStyle from '../../components/BackgroundImageStyle';

/*export async function generateStaticParams() {
  const allScenes = await getAllScenes(false);
  return allScenes.map((scene) => ({
    slug: scene.slug,
  }))
}*/

export default async function ScenePage({
  params,
}: {
  params: { slug: string }
}) {
  const { isEnabled } = draftMode()
  //console.log("SLUG:", params.slug);
  const { scene, moreScenes } = await getSceneAndMoreScenes(params.slug, isEnabled);
  console.log("SCENE:", scene);
  const allSubmissions = scene.submissionsCollection.items;
  //console.log("SCENE SUBMISSIONS:", allSubmissions);
  return (
    <>
    <div className="background-image-container">
      {/*<img src="https://images.ctfassets.net/57idppycthif/4INV6AGCzs4529xwzORd96/593296fb9609c2e9b416fcde36b29971/Acutek___Flick_records.jpg?w=1080&q=75" alt="" />*/}
    </div>
    <div className="scene-article-container mx-auto h-full">
      <article className="scene-article">
        
        {scene.image && scene.image.url && scene.image.title && (
          <section className="scene-header mb-8 flex justify-center relative">
            <h1 className="scene-title uppercase font-semibold text-4xl sm:text-7xl md:text-8xl lg:text-8xl leading-tight md:leading-none mb-4 text-center">
              {scene.title}
            </h1>
            <div className='scene-image-container'>
              <ClientImage
                src={scene.image.url}
                name={scene.image.title}
                className='scene-image'
              />
            </div>
          </section>
        )}

        {/*<section className="page-subheading-container">
          <h2 className="uppercase font-semibold text-4xl sm:text-7xl md:text-8xl lg:text-8xl leading-tight md:leading-none text-center">
            GALLERY
          </h2>
        </section>*/}
        {/*<p>
          {scene.nftContractId}
        </p>*/}
        {/*
        <audio controls src="/media/cc0-audio/t-rex-roar.mp3">
          <a href="/media/cc0-audio/t-rex-roar.mp3"> Download audio </a>
        </audio>
        */}
        {/*<Player />*/}
        {/*<DecentAudioPlayer />*/}

        {/*{scene.nftContractId && (*/}
          <section className="mb-8 flex justify-center checkout-section">
            <NFTPaperCheckout
              checkoutId={scene.nftContractId}
            />
            <CrossmintPayButtonProduction
              projectId={scene.crossmintProjectIdProduction}
              collectionId='3709b2d1-dd26-49a5-b5e6-8acd55f59bd7'
              environment='production'
            />
            <CrossmintPayButtonManifold
              projectId={scene.crossmintProjectIdStaging}
              collectionId={scene.crossmintCollectionIdStaging}
              creatorContractAddress={scene.manifoldCreatorContractAddressTestnet}
              contractAddress={scene.testnetContractAddress}
              instanceId={scene.testnetContractInstanceId}
              environment='staging'
            />
            <CrossmintPayButtonManifold
              projectId={scene.crossmintProjectIdProduction}
              collectionId={scene.crossmintCollectionIdProduction}
              creatorContractAddress={scene.manifoldCreatorContractAddressMainnet}
              contractAddress={scene.mainnetContractAddress}
              instanceId={scene.mainnetContractInstanceId}
              environment='production'
            />
          </section>
        {/*})}*/}

        {scene.audioUrl && (
          <section className="mb-8">
            <H5Player
              src={scene.audioUrl}
            />
          </section>
        )}

        {allSubmissions && (
          <section className="scene-gallery-section">
            <SwiperReactGallery
              submissions={allSubmissions}
              slidesPerViewCount={1}
            />
            {/*<YetGallery
              submissions={allSubmissions}
            />*/}
          </section>
        )}

        {/*<SwiperGallery
          submissions={allSubmissions}
        />*/}
        {/*<LightGallery
          submissions={allSubmissions}
        />*/}
        {/*<SubmissionsGallery
          submissions={allSubmissions}
      />*/}
      </article>
    </div>
    {/*<BackgroundImageStyle
      url={scene.image.url}
    />*/}
    </>
  )
}
