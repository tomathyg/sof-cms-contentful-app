import { draftMode } from 'next/headers'
import { getHoldingPageData } from '@/lib/api-2'

import Modal from '../../components/Modal'
import BrevoSignupForm from '../../components/BrevoSignupForm'

export default async function JoinModal() {
    const { isEnabled } = draftMode()
    const content = await getHoldingPageData(isEnabled);

    return (
        <Modal>
            <BrevoSignupForm
                src={content.formUrl}
            />
        </Modal>
    )
}