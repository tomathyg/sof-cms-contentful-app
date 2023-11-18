import Link from 'next/link'
import { draftMode } from 'next/headers'

import { useRef, useEffect, useState } from 'react';

import { Markdown } from '../../../lib/markdown'
import { getAllScenes, getSceneAndMoreScenes } from '../../../lib/api-2'

import NFTPaperCheckout from '../../components/PaperCheckout'
//import Player from '../../components/AudioPlayer'
//import DecentAudioPlayer from '../../components/DecentAudioPLayer'
import H5Player from '../../components/H5AudioPlayer'

import { type } from 'os'
import React from 'react';

import SubmissionsGallery from '../../components/SubmissionsGallery'
//import SwiperGallery from '../../components/SwiperGalleryWebComponent';
import SwiperReactGallery from '../../components/SwiperReactGallery';
import YetCarousel from '../../components/YetGallery'

//import LightGallery from '../../components/LightGallery'

export async function generateStaticParams() {
  const allScenes = await getAllScenes(false);
  return allScenes.map((scene) => ({
    slug: scene.slug,
  }))
}

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
        <h1 className="uppercase text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left">
          {scene.title}
        </h1>
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
        <section className="mb-8">
          <NFTPaperCheckout
            contractId={scene.nftContractId}
          />
        </section>
        <section className="mb-8">
          <H5Player
            src={scene.audioUrl}
          />
        </section>
        <SwiperReactGallery
          submissions={allSubmissions}
          slidesPerViewCount={1}
        />
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
