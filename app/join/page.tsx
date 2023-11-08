//'use client'

//import BrevoSignupForm from '../components/BrevoSignupForm'

//import { usePathname, useRouter } from "next/navigation.js";
import { draftMode } from 'next/headers'
import { getHoldingPageData } from '@/lib/api-2'
import BrevoSignupForm from '../components/BrevoSignupForm'

export default async function JoinModal() {
    //const router = useRouter();
    //const pathname = usePathname();

    //const close = () => router.push("/");

    const { isEnabled } = draftMode()
    const content = await getHoldingPageData(isEnabled);

    return (
        <section>
            <BrevoSignupForm
                src={content.formUrl}
            />
        </section>
    )
}