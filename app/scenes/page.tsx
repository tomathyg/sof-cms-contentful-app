import { getAllScenes } from '../../lib/api-2'
//import Image from 'next/image';
import SceneThumb from '../components/SceneThumb';
import RouterButton from '../components/RouterButton';

export default async function Page() {
    const content = await getAllScenes(false);
    //console.log("ALL SCENES CONTENT:", content);

    const numDivsToAdd = 6 - content.length;
    const additionalDivs = Array.from({ length: numDivsToAdd }).map((_, index) => {
        const latestScene = content.length + index + 1;
        return (
            <div key={index + content.length} className={`upcoming-scene-${latestScene} rounded-md overflow-hidden bg-grey aspect-square h-400 w-300`}>
                <div className="flex flex-col justify-between h-full text-off-white text-center pt-1">
                    <h2 className="text-4xl">SCENE {index + content.length + 1}</h2>
                    {latestScene === content.length + 1 ? (
                        <>
                        <p className="text-xl pb-2 px-4 font-sans">CURRENTLY ACCEPTING SUBMISSIONS</p>
                        <RouterButton
                            classes="text-xl pb-3 font-sans button-primary w-[200px] mx-auto mb-3"
                            url="/submit"
                            label="SUBMIT"
                        />
                        </>
                    ) : (
                        <p className="text-xl pb-2 font-sans">COMING SOON</p>
                    )}
                </div>
            </div>
        );
    });

    return (
        <>
            <section className="flex justify-center text-center font-sans">
                <h1 className="text-4xl xsm:text-5xl sm:text-7xl px-2">ALL SCENES</h1>
            </section>
            <section className='mb-16'>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 w-10/12 sm:w-10/12 md:w-10/12 max-w-2xl mx-auto">
                    {content.sort((a, b) => a.slug.localeCompare(b.slug)).map((scene, index) => {
                        //console.log(scene);
                        const artwork = scene.artworkSubmission.submissionImage.url + '?w=600&q=75';
                        return (
                            <SceneThumb
                                key={index}
                                url={artwork}
                                title={scene.title}
                                slug={scene.slug}
                            />
                        );
                    })}
                    {/* BEGIN: ed8c6549bwf9 */}
                    {additionalDivs}
                    {/* END: ed8c6549bwf9 */}
                </div>
            </section>
        </>
    )
}