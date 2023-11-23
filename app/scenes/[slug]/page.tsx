import Link from 'next/link'
import { draftMode } from 'next/headers'

//import { type } from 'os'
import React from 'react';

//import { Markdown } from '../../../lib/markdown'
import { getAllScenes, getSceneAndMoreScenes } from '../../../lib/api-2'

import NFTPaperCheckout from '../../components/PaperCheckout'
import CrossMintPayButtonStaging from '../../components/CrossMintPayButtonStaging'
import CrossMintPayButtonProduction from '../../components/CrossMintPayButtonProduction'

//import Player from '../../components/AudioPlayer'
//import DecentAudioPlayer from '../../components/DecentAudioPLayer'
import H5Player from '../../components/H5AudioPlayer'

import ClientImage from '../../components/ClientImage'

//import SubmissionsGallery from '../../components/SubmissionsGallery'
//import SwiperGallery from '../../components/SwiperGalleryWebComponent';
//import YetCarousel from '../../components/YetGallery'
//import LightGallery from '../../components/LightGallery'
import SwiperReactGallery from '../../components/SwiperReactGallery';

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
    <div className="container mx-auto my-10 px-5">
      <article>
        <h1 className="uppercase font-semibold text-4xl sm:text-7xl md:text-8xl lg:text-8xl leading-tight md:leading-none mb-12 text-center">
          {scene.title}
        </h1>
        {scene.image && scene.image.url && scene.image.title && (
          <section className="mb-8 flex justify-center">
            <ClientImage
              src={scene.image.url}
              name={scene.image.title}
            />
          </section>
        )}

        <h2 className="uppercase font-semibold text-4xl sm:text-7xl md:text-8xl lg:text-8xl leading-tight md:leading-none mb-12 text-center">
          GALLERY
        </h2>
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

        {scene.nftContractId && (
          <section className="mb-8 flex justify-center paper-checkout-section">
            <NFTPaperCheckout
              checkoutId={scene.nftContractId}
            />
            {/*<CrossMint
              projectId={scene.crossmintProjectIdProduction}
              collectionId={scene.crossmintCollectiondProduction}
            />*/}
            <CrossMintPayButtonStaging
              projectId={scene.crossmintProjectIdStaging}
              collectionId={scene.crossmintCollectiondStaging}
            />
          </section>
        )}

        {scene.audioUrl && (
          <section className="mb-8">
            <H5Player
              src={scene.audioUrl}
            />
          </section>
        )}

        {allSubmissions && (
          <section>
            <SwiperReactGallery
              submissions={allSubmissions}
              slidesPerViewCount={1}
            />
          </section>
        )}

        {/*<SwiperGallery
          submissions={allSubmissions}
        />*/}
        {/*<LightGallery
          submissions={allSubmissions}
        />*/}
        {/*<YetCarousel />*/}
        {/*<SubmissionsGallery
          submissions={allSubmissions}
      />*/}
      </article>
    </div>
  )
}
