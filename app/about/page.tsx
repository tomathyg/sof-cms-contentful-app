import Image from 'next/image'

import { getAboutPageData } from '../../lib/api-2'

export default async function Page() {

    const content = await getAboutPageData(false);
    console.log("ABOUT PAGE CONTENT:", content);

    return (
        <section className="flex justify-center w-full px-8">
            <div className="flex flex-col items-center text-center max-w-prose tracking-wide uppercase">
                <h1 className="text-4xl xsm:text-6xl sm:text-8xl my-8">{content.title}</h1>
                <p className="font-sans text-2xl mb-4">{content.paragraph1}</p>
                <p className="font-serif text-2xl mb-4">{content.paragraph2}</p>
                <p className="font-mono text-xsm mb-4">{content.paragraph3}</p>
                <p className="font-serif">{content.artistQuote}</p>
                <div className='signature-container relative w-[400px] mt-10 mb-24'>
                    <Image
                        src='/images/about-signature.png'
                        alt='Jamie (Sound of Fractures) - Signature'
                        width={570}
                        height={271}
                    />
                </div>
            </div>
        </section>
    )
}