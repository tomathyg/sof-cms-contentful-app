'use client'

import { useRouter } from 'next/navigation'

export default function HeaderLogo() {
    const router = useRouter()
    return (
        <button type="button" onClick={() => router.push(`/`)}>SCENES</button>
    )
}