import Link from 'next/link'
import { draftMode } from 'next/headers'
import React from 'react'
import localFont from 'next/font/local'
const drukWideHeavy = localFont({
  src: './fonts/Druk-Wide-Heavy-Web.woff2',
  display: 'swap',
})
import TypeForm from './components/TypeForm'
import { getHomePageData } from '../lib/api-2'

interface IntroProps {
  heading: string;
}

function Intro(heading:string) {
  return (
    <section className="flex-col flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        {heading}
      </h1>
    </section>
  )
}

export default async function Page() {

  const content = await getHomePageData(false);
  console.log("HOME PAGE CONTENT:", content);

  return (
    <div className="container mx-auto px-5">
      {Intro(content.heading)}
      <section className='flex justify-center'>
        <TypeForm
          id={content.typeFormId}
        />
      </section>
    </div>
  )
}
