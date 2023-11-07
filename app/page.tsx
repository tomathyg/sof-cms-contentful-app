import Link from 'next/link'
import { draftMode } from 'next/headers'

import BrevoSignupForm from './components/BrevoSignupForm'
import { getHoldingPageData } from '@/lib/api-2'

interface IntroProps {
  heading: string;
  text: string;
}

function Header({heading, text}: IntroProps) {
  return (
    <section className="text-center flex-col md:flex-col flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8 mt-10 mb-10">
        {heading}
      </h1>
      <p className="text-3xl">{text}</p>
    </section>
  )
}

interface FooterProps {
  email: string;
}

function Footer({email}: FooterProps) {
  return (
    <section>
      <footer className="text-center">
        <a href="mailto:{email}">{email}</a>
      </footer>
    </section>
  )
}

export default async function Page() {
  const { isEnabled } = draftMode()
  const content = await getHoldingPageData(isEnabled);
  console.log("CONTENT:", content);

  return (
    <section>
      <div className="container mx-auto px-5">
        <Header 
          heading={content.heading}
          text={content.text}
        />
      </div>
      <div className="mt-16">
        <BrevoSignupForm
          src={content.formUrl}
        />
      </div>
      <Footer
        email={content.email}
      />
    </section>
  )
}
