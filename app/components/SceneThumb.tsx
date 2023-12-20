'use client'

import { useRouter } from 'next/navigation'
import Image from 'next/image'

export default function SceneThumb(scene:any) {
    const router = useRouter();
    return (
        <div key={scene.key} className={`rounded-md overflow-hidden cursor-pointer relative aspect-square h-300 w-300`} onClick={() => router.push(`/scenes/${scene.slug}`)}>
            <Image
                src={scene.url}
                alt={`${scene.title} Artwork`}
                fill={true}
                className='absolute top-0 left-0 z-[-1]'
            />
            <div className="text-white text-center pt-1">
                <h2 className="text-4xl uppercase">{scene.title}</h2>
            </div>
        </div>
    )
}
