//import { redirect } from 'next/navigation'
import { getAllScenes } from '../../lib/api-2'

export default async function Page() {
    //redirect('/')

    const content = await getAllScenes(false);
    console.log("ALL SCENES CONTENT:", content);

    return (
        <section className="flex justify-center text-center">
            <h1 className="text-8xl">ALL SCENES</h1>
        </section>
    )
}