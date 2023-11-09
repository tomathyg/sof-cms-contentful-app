import './globals.css'
import './styles.css'
import { DM_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';

import { CMS_NAME } from '@/lib/constants'

export const metadata = {
  title: `Sound of Fractures`,
  description: `Sound of Fractures - built with Next.js and ${CMS_NAME}.`,
  robots: {
    index: false,
    follow: false,
    nocache: true,
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
      </head>
      <body>
        <section className="text-white">
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
