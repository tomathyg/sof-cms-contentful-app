import './globals.css'
//import { EXAMPLE_PATH, CMS_NAME } from '../lib/constants'

//import 'https://marketplace.manifoldxyz.dev/3.3.7/marketplace.css'

//import { GoogleTagManager } from '@next/third-parties/google'
import GTM from './components/GTMContainer';
import { Suspense } from 'react'

import { Web3ModalProvider } from "../context/Web3Modal";
import ConnectButton from './components/ConnectButton';

//import { AppProps } from 'next/app';

import { Analytics } from '@vercel/analytics/react';

import { DM_Mono } from 'next/font/google'
import localFont from 'next/font/local'

//import Script from 'next/script'

//import WalletConnectButton from './components/WalletConnectButton'

//import dynamic from 'next/dynamic';

/*const ClientSideComponent = dynamic(
  () => import('../components/ClientSideComponent'),
  { ssr: false }
);*/

const druk_wide_heavy = localFont({
  src: './fonts/Druk-Wide-Heavy-Web.woff2',
  display: 'swap',
  variable: '--font-druk-wide-heavy',
})

const dm_mono = DM_Mono({
  weight: '300',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dm-mono',
})

const gambarino = localFont({
    src: './fonts/Gambarino-Regular.woff2',
    display: 'swap',
    variable: '--font-gambarino'
})

import { getAllScenes, getHomePageData } from '../lib/api-2'
import SocialFollow from './components/SocialFollowLinks'

import HeaderLogo from './components/HeaderLogo'

//import NavList from './components/NavList'
import Navigation from './components/Navigation'
import MobileNav from './components/MobileNav';

// Metadata
import type { Metadata } from 'next'
import React from 'react';

/*let openGraphImageUrl: URL;
openGraphImageUrl = new URL(process.env.NEXT_PUBLIC_OPENGRAPH_IMAGE_URL || 'defaultURL');
console.log(openGraphImageUrl);*/

export const metadata: Metadata = {
  title: `Scenes - Sound of Fractures`,
  description: `Scenes: Where music meets memory – An interactive album by Sound of Fractures. Join to participate.`,
  robots: {
    index: false,
    follow: false,
    noarchive: true,
  },
  icons: {
    shortcut: { url: '/site-icons/favicon.ico?v=5', sizes: 'any', type: 'image/x-icon' },
    icon: [
      //{ url: '/favicon.ico?v=4', sizes: 'any', type: 'image/x-icon' },
      { url: '/site-icons/icon.svg', sizes: 'any', type: 'image/svg+xml' },
      //new URL('/icon.svg', 'https://scenes.soundoffractures.com'),
      { url: '/site-icons/icon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/site-icons/icon-16.png', sizes: '16x16', type: 'image/png' },
      { url: '/site-icons/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/site-icons/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/site-icons/apple-icon.png', sizes: '60x60', type: 'image/png' },
      { url: '/site-icons/apple-icon-x2.png', sizes: '120x120', type: 'image/png' },
      { url: '/site-icons/apple-icon-x3.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'apple-touch-icon-precomposed',
        url: '/site-icons/apple-touch-icon-precomposed.png',
      },
    ],
  },
  metadataBase: new URL('https://scenes.soundoffractures.com'),
  openGraph: {
    title: 'Scenes - Where music meets memory',
    description: 'An interactive album by Sound of Fractures',
    url: 'https://scenes.soundoffractures.com/',
    //siteName: 'Scenes - Where music meets memory',
    images: [
      {
        url: 'https://scenes.soundoffractures.com/social-images/opengraph-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Scenes by Sound of Fractures',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Scenes - Where music meets memory',
    description: 'An interactive album by Sound of Fractures',
    site: '@sofractures',
    //siteId: '3060397666',
    creator: '@sofractures',
    //creatorId: '3060397666',
    images: {
      url: 'https://scenes.soundoffractures.com/social-images/twitter-image.jpg',
      alt: 'Scenes by Sound of Fractures',
    },
  },
}


async function Header() {
  const allScenes = await getAllScenes(false);
  //console.log("ALL SCENES:", allScenes);
  //console.log("ALL SCENES TYPE:", typeof(allScenes));

  return (
    <header className="">
      <div className="w-full mx-auto px-5">
        <div className={`${dm_mono.className} w-full py-4 flex items-center justify-between`}>
          {/*<div className='nav-group flex items-center w-full'></div>*/}
          <HeaderLogo />
          <div className='desktop-nav-container justify-center w-full hidden md:flex px-4'>
            <Navigation
              items={allScenes}
              base='scenes'
            />
          </div>
          <div className='mobile-nav-container md:hidden'>
            <MobileNav />
          </div>
          {/*<WalletConnectButton />*/}
          <ConnectButton />
        </div>
      </div>
    </header>
  )
}

async function Footer() {
  const content = await getHomePageData(false);
  //console.log("HOME PAGE CONTENT:", content);
  const socialNetworks = content.socialFollowLinksCollection.items;

  return (
    <footer className="bg-accent-1">
      <div className="container mx-auto">
        <div className="py-2 flex flex-col lg:flex-row items-center justify-center">
          {/*&#9426; Sound of Fractures*/}
          <SocialFollow
            items={socialNetworks}
          />
        </div>
      </div>
    </footer>
  )
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  //const [clientSideState, setClientSideState] = useState();
  return (
    <html lang="en" className={`${druk_wide_heavy.variable} ${dm_mono.variable} ${gambarino.variable} border-off-white`}>
        <body className={`font-mono bg-black text-off-white`}>
        <Web3ModalProvider>
        <div className='noise-overlay'></div>
        <section className="">
          <Header />
          {/*<StickyCursor stickyElement={null}/>*/}
          <main className='main-content min-h-full-screen'>{children}</main>
          <Footer />
        </section>
        <Analytics />
        <Suspense>
          <GTM />
        </Suspense>
        
        </Web3ModalProvider>
        </body>
      {/*<Script
          src="https://marketplace.manifoldxyz.dev/3.5.10/marketplace.umd.min.js"
      />*/}
    </html>
  )
}
