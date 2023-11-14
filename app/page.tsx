import Link from 'next/link'
import { draftMode } from 'next/headers'
import React from 'react'

import { getHomePageData } from '../lib/api-2'

import localFont from 'next/font/local'

const drukWideHeavy = localFont({
  src: './fonts/Druk-Wide-Heavy-Web.woff2',
  display: 'swap',
})

import TypeForm from './components/TypeForm'
import ScenesLogo from './components/ScenesLogo'

function Intro(heading:string) {
  return (
    <section className="flex-col flex items-center md:justify-between">
      <h1 className={`my-6 md:text-8xl font-bold tracking-tighter leading-tight ${drukWideHeavy.className}`}>
        {/*{heading}*/}
        <ScenesLogo />
      </h1>
      <h2 className={`mb-8 text-center text-4xl ${drukWideHeavy.className}`}><span>AN INTERACTIVE JOURNEY</span><br /><span>THROUGH PERSONAL MOMENTS</span></h2>
    </section>
  )
}

export default async function Page() {

  const content = await getHomePageData(false);
  console.log("HOME PAGE CONTENT:", content);

  return (
    <div className="home-container p-5 m-5 border">
      <div className="p-10 m-1 border">
        {Intro(content.heading)}
        <section className={`flex justify-center ${drukWideHeavy.className}`}>
          <TypeForm
            id={content.typeFormId}
          />
        </section>
      </div>
    </div>
  )
}
