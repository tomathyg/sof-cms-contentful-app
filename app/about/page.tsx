import Image from 'next/image';

export default function Page() {
    return (
        <section className="flex justify-center w-full px-8">
            <div className="flex flex-col items-center text-center max-w-prose tracking-wide uppercase">
                <h1 className="text-4xl xsm:text-6xl sm:text-8xl my-8">ABOUT</h1>
                <p className="font-sans text-2xl mb-4">Scenes is an interactive album that invites fans to contribute their favourite memories and photographs in response to each song.</p>
                <p className="font-serif text-2xl mb-4">The memories are then turned into a unique gallery of “Scenes.” One chosen Scene will then be used as the main artwork. More than 41 fans have already contributed to the project since it launched, establishing a new way to release albums and proving that fans can be active collaborators rather than just passive listeners.</p>
                <p className="font-mono text-xsm mb-4">At the culmination of each submission period, a singular song's Scene will be chosen, used as the main artwork for the release and encapsulated forever onchain, further enabling supporters to contribute to the world of Sound of Fractures.life that echoes the feeling of the song.</p>
                <p className="font-serif">“Music isn't just about sound; it's about the memories and emotions they evoke. ‘Scenes’ is an effort to give a tangible form to this abstract connection and capture it in something we can recognise,”</p>
                {/*<Image

                />*/}
            </div>
        </section>
    )
}