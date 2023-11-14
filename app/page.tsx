import Link from 'next/link'
import { draftMode } from 'next/headers'
import React from 'react'
import TypeForm from './components/TypeForm'
import { getHomePageData } from '../lib/api-2'

function Intro() {
  return (
    <section className="flex-col flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        Sound of Fractures
      </h1>
    </section>
  )
}

export default async function Page() {

  const content = await getHomePageData(false);
  console.log("HOME PAGE CONTENT:", content);

  return (
    <div className="container mx-auto px-5">
      <Intro />
      <TypeForm
        id={content.typeFormId}
      />
    </div>
  )
}
