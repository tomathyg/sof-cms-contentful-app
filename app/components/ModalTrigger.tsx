import Link from "next/link";

export default function Home() {
    return (
        <>
            <div className="fixed z-10 right-6 sm:right-6 bottom-[4.5rem]">
                <Link href="?modal=true">
                    <button type="button" className="bg-black text-xsm xsm:text-base text-off-white p-2 font-sans uppercase border border-off-white rounded-lg py-2 px-4">
                        <span>SIGN UP</span>
                    </button>
                </Link>
            </div>
        </>
    )
}