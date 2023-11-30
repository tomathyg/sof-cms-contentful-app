import { getHomePageData } from '../../lib/api-2'

import FloatingGallery from '../components/floatingGallery/FloatingGallery';

export default async function Page() {

    const content = await getHomePageData(false);
    console.log("HOME PAGE CONTENT:", content);

    return (
        <section className="flex justify-center w-full px-8">
            <div className="flex flex-col items-center text-center max-w-prose tracking-wide uppercase">
                <h1>FLOATING GALLERY</h1>
                <FloatingGallery />
            </div>
        </section>
    )
}