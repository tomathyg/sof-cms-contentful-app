import Link from 'next/link'
import { draftMode } from 'next/headers'

import { useRef, useEffect, useState } from 'react';

import { Markdown } from '@/lib/markdown'
import { getAllScenes, getSceneAndMoreScenes } from '@/lib/api-2'

import SubmissionsGallery from '../../components/SubmissionsGallery'
import NFTPaperCheckout from '../../components/PaperCheckout';
import { type } from 'os'

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
  const { scene, moreScenes } = await getSceneAndMoreScenes(params.slug, isEnabled);
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
