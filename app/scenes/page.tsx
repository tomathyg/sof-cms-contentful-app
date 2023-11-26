import { redirect } from 'next/navigation'

export default function Page() {
    redirect('/')

    return (
        <section className="flex justify-center text-center">
            <h1 className="text-8xl">SCENES</h1>
        </section>
    )
}