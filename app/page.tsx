import Link from 'next/link'
import { draftMode } from 'next/headers'

import BrevoSignupForm from './components/BrevoSignupForm'

function Intro() {
  return (
    <section className="text-center flex-col md:flex-col flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8 mt-10 mb-10">
        Sound of Fractures
      </h1>
      <p className="text-3xl">Coming soon</p>
      <div className="mt-16">
        <BrevoSignupForm />
      </div>
      <footer>
        <a href="mailto:hello@soundoffractures.com">hello@soundoffractures.com</a>
      </footer>
    </section>
  )
}

export default async function Page() {

  return (
    <div className="container mx-auto px-5">
      <Intro />
    </div>
  )
}
