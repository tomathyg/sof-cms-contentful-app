import { draftMode } from 'next/headers'
//import Link from 'next/link'
import localFont from 'next/font/local'

import { getHoldingPageData } from '@/lib/api-2'

import ModalTrigger from './components/ModalTrigger'

//import Image from 'next/image'

import ScenesLogoWhite from './components/ScenesLogoWhite'

//import ServerJoinButton from './components/ServerJoinButton'
//import ClientJoinButton from './components/ClientJoinButton'

const drukWideHeavy = localFont({
  src: './fonts/Druk-Wide-Heavy-Web.woff2',
  display: 'swap',
})

interface HeaderProps {
  heading: string;
  text: string;
}

function Header({heading, text}: HeaderProps) {
  return (
    <section className="text-center flex-col md:flex-col flex items-center md:justify-between mt-16 mb-16">
      <div>
      <h1 className={`flex justify-center text-6xl font-bold tracking-wide leading-tight mt-10 mb-10 ${drukWideHeavy.className}`}>
        {/*{heading}*/}
        <ScenesLogoWhite />
      </h1>
      </div>
      <p className="text-2xl mt-4 leading-10">{/*{text}*/}LAUNCHING<br />01/12/23</p>
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
        <a href={`mailto:${email}`}>{email}</a>
      </footer>
    </section>
  )
}

export default async function Page() {
  const { isEnabled } = draftMode()
  const content = await getHoldingPageData(isEnabled);
  //console.log("CONTENT:", content);

  return (
    <section className="text-white">
      <div className="container mx-auto px-2">
        <Header 
          heading={content.heading}
          text={content.text}
        />
      </div>
      <div className="text-center flex justify-center my-10">
        {/*<Link href="/join" className="bg-transparent border border-solid hover:bg-white hover:text-black active:bg-white-600 font-bold uppercase px-8 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
          JOIN THE COMMUNITY
        </Link>*/}
        {/*<button onClick={() => setIsModalOpen(true)}>Open Modal</button>*/}

        <ModalTrigger
          iframeSrc={content.formUrl}
          //iframeSrc='https://83dff8dc.sibforms.com/serve/MUIFAKItigAmup9ec85QGNo38yZrZZDVzS3lGRCeDrfurfERVHN6ctMsCE9dpZXnuJNvkhFfda9fz2HRXUrGN0zFgpQOyZbtlONEwXgJ-HbwMBeNQAZGc8EM2XW0bII2JXZc42p_iFA3cyW_85GMcbnL5KI1XUNbezWD8qW8fghLAqPwlL1f83EFoXs9k6b9kteXma7q5Ss84fu6'
        />
      </div>
      {/*<ServerJoinButton />
      <ClientJoinButton />*/}
      <div className="text-center">
        <Footer
          email={content.email}
        />
      </div>
    </section>
  )
}
