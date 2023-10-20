import './globals.css'
import { Inter } from 'next/font/google'
import { EXAMPLE_PATH, CMS_NAME } from '@/lib/constants'

import Link from 'next/link'
import { getAllScenes } from '@/lib/api-2'

export const metadata = {
  title: `Sound of Fractures`,
  description: `Sound of Fractures - built with Next.js and ${CMS_NAME}.`,
}

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
})

function NavList({ posts, base }: { posts: Array<Record<string, any>>; base: string }) {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <Link href={`/${base}/${post.slug}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  )
}

async function Header() {
  const allScenes = await getAllScenes(false);
  console.log("ALL SCENES:", allScenes);
  console.log("ALL SCENES TYPE:", typeof(allScenes));
  return (
    <header className="bg-accent-1 border-b border-accent-2">
      <div className="container mx-auto px-5">
        <div className="py-8 flex lg:flex-row items-center justify-between">
          <a href="/">
            <h1>Sound of Fractures</h1>
          </a>
          <NavList
            posts={allScenes}
            base='scenes'
          />
        </div>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <div className="container mx-auto px-5">
        <div className="py-16 flex flex-col lg:flex-row items-center">
          &#9426; Sound of Fractures
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
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <section className="min-h-screen">
          <Header />
          <main>{children}</main>
          <Footer />
        </section>
      </body>
    </html>
  )
}
