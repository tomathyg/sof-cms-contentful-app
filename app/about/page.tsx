import { getAboutPageData } from '../../lib/api-2'

export default async function Page() {

    const content = await getAboutPageData(false);
    console.log("ABOUT PAGE CONTENT:", content);

    return (
        <section className="flex justify-center w-full px-8">
            <div className="flex flex-col items-center text-center max-w-prose tracking-wide uppercase">
                <h1 className="text-4xl xsm:text-6xl sm:text-8xl my-8">ABOUT</h1>
                <p className="font-sans text-2xl mb-4">{content.paragraph1}</p>
                <p className="font-serif text-2xl mb-4">{content.paragraph2}</p>
                <p className="font-mono text-xsm mb-4">{content.paragraph3}</p>
                <p className="font-serif">{content.artistQuote}</p>
                {/*<Image

                />*/}
            </div>
        </section>
    )
}