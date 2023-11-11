import './globals.css'
import './styles.css'
import { DM_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';

//import { CMS_NAME } from '@/lib/constants'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: `Scenes - Sound of Fractures`,
  description: `Scenes: Where music meets memory – An interactive album by Sound of Fractures. Join to participate.`,
  robots: {
    //index: false,
    //follow: false,
    noarchive: true,
  },
  icons: {
    shortcut: { url: 'favicon.ico?v=5', sizes: 'any', type: 'image/x-icon' },
    icon: [
      //{ url: '/favicon.ico?v=4', sizes: 'any', type: 'image/x-icon' },
      { url: '/icon.svg', sizes: 'any', type: 'image/svg+xml' },
      { url: '/icon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon-16.png', sizes: '16x16', type: 'image/png' },
      //new URL('/icon.svg', 'https://scenes.soundoffractures.com'),
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '60x60', type: 'image/png' },
      { url: '/apple-icon-x2.png', sizes: '120x120', type: 'image/png' },
      { url: '/apple-icon-x3.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'apple-touch-icon-precomposed',
        url: '/apple-touch-icon-precomposed.png',
      },
    ],
  },
  openGraph: {
    title: 'Scenes - Where music meets memory',
    description: 'An interactive album by Sound of Fractures',
    url: 'https://scenes.soundoffractures.com/',
    //siteName: 'Scenes - Where music meets memory',
    images: [
      {
        url: 'https://scenes.soundoffractures.com/social/scenes-logo-og-fb-white-on-black.jpg',
        width: 1200,
        height: 630,
        alt: 'Scenes',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
}
const dm_mono = DM_Mono({
  weight: '300',
  subsets: ['latin'],
  display: 'swap'
})

export default function RootLayout({
  children,
  modal
}: {
  children: React.ReactNode
  modal: React.ReactNode
}) {

  return (
    <html lang="en" className={`${dm_mono.className} bg-black`}>
      <head>
        {/*<link rel="stylesheet" href="https://sibforms.com/forms/end-form/build/sib-styles.css"></link>*/}
        {/*<meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate"></meta>
        <meta http-equiv="Pragma" content="no-cache"></meta>
        <meta http-equiv="Expires" content="0"></meta>*/}
        {/*<link
          rel="icon"
          href="/favicon.ico"
          type="image/svg"
          sizes="any"
        />*/}
      </head>
      <body>
        <section className="main-container">
          <main>
            {children}
            {modal}
          </main>
        </section>
        <Analytics />
      </body>
    </html>
  )
}
