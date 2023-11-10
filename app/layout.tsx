import './globals.css'
import './styles.css'
import { DM_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';

//import { CMS_NAME } from '@/lib/constants'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: `Scenes - Sound of Fractures`,
  description: `Sound of Fractures`,
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
  icons: {
    shortcut: [{ url: '/favicon.ico?v=2', type: 'image/x-icon' }, new URL('/favicon.ico', 'https://scenes.soundoffractures.com')],
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      new URL('/icon.svg', 'https://scenes.soundoffractures.com'),
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon.png' },
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
        <link rel="stylesheet" href="https://sibforms.com/forms/end-form/build/sib-styles.css"></link>
        {/*<link
          rel="icon"
          href="/favicon.ico"
          type="image/svg"
          sizes="any"
        />*/}
      </head>
      <body>
        <section className="text-white main-container">
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
