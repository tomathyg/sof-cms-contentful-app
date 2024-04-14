import Link from "next/link";

export default function Home() {
    return (
        <>
            <div className="fixed z-20 right-8 sm:right-12 bottom-16">
                <Link href="?modal=true">
                    <button type="button" className="bg-black text-xsm xsm:text-base text-off-white p-2 font-sans uppercase border border-off-white rounded-lg py-2 px-4">
                        <span>JOIN</span>
                    </button>
                </Link>
            </div>
        </>
    )
}