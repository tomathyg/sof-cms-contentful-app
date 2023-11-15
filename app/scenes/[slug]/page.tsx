import Link from 'next/link'
import { draftMode } from 'next/headers'

import { useRef, useEffect, useState } from 'react';

import { Markdown } from '../../../lib/markdown'
import { getAllScenes, getSceneAndMoreScenes } from '../../../lib/api-2'

import SubmissionsGallery from '../../components/SubmissionsGallery'
import NFTPaperCheckout from '../../components/PaperCheckout'
//import Player from '../../components/AudioPlayer'
//import DecentAudioPlayer from '../../components/DecentAudioPLayer'
import H5Player from '../../components/H5AudioPlayer'

import { type } from 'os'
import React from 'react';

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
  console.log("SLUG:", params.slug);
  const { scene, moreScenes } = await getSceneAndMoreScenes(params.slug, isEnabled);
  console.log("SCENE:", scene);
  const allSubmissions = scene.submissionsCollection.items;
  console.log("SCENE SUBMISSIONS:", allSubmissions);
  return (
    <div className="container mx-auto my-10 px-5">
      <article>
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left">
          {scene.title}
        </h1>
        <p>
          {scene.nftContractId}
        </p>
        {/*
        <audio controls src="/media/cc0-audio/t-rex-roar.mp3">
          <a href="/media/cc0-audio/t-rex-roar.mp3"> Download audio </a>
        </audio>
        */}
        {/*<Player />*/}
        {/*<DecentAudioPlayer />*/}
        <H5Player
          src='https://nftstorage.link/ipfs/bafybeicnigbsdd6duwjjjompu5slw3iohdksf5p5ip2rcny2pn2jealkg4/moths 2 - beat demo 135 (interlude).mp3?id=0'
        />
        <NFTPaperCheckout
          contractId={scene.nftContractId}
        />
        <SubmissionsGallery
          submissions={allSubmissions}
        />
      </article>
    </div>
  )
}