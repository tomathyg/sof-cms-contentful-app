//import Image from 'next/image';
import { getSubmitPageData } from '../../lib/api-2'

import TypeFormPage from '../components/TypeFormPage';

export default async function Page() {
    const content = await getSubmitPageData(false);
    console.log("SUBMIT PAGE CONTENT:", content);

    return (
        <TypeFormPage
            sceneNumber={content.sceneNumber}
            formId={content.formId}
            audioUrl={content.audioMp3.url}
            audioTitle={content.audioMp3.title}
        />
    )
}