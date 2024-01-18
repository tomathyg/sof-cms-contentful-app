'use client'

import React, { useState, useMemo } from 'react'
import { Widget } from '@typeform/embed-react'
import H5Player from '../components/H5AudioPlayer'
import { sendGTMEvent } from '@next/third-parties/google'

/*const blockMapping: Record<string, string> = {
    '01HE8V8C7PES3MZWD3GNC11CGZ': '1',
    '31ee3aba-b8c2-421e-9bc2-cd7d31f3b5df': '2',
    '377c9572-86ab-4b4f-ab03-8422b4860b9c': '3',
    'f104f22d-fb24-4c0c-848b-a1c56f8b4f25': '4',
    'c6963f23-5204-425c-b063-6928b6fb4f0f': '5',
    '6187d4e8-27a8-4d68-9888-4eaf39589876': '6',
    // ... other question refs
};*/

const stepMapping: Record<string, { step: string, subheading: string }> = {
    //'01HE8V8C7PES3MZWD3GNC11CGZ': { step: '1', subheading: 'LISTEN & READ' },
    //'31ee3aba-b8c2-421e-9bc2-cd7d31f3b5df': { step: '2', subheading: 'Info for 2' },
    '377c9572-86ab-4b4f-ab03-8422b4860b9c': { step: '1', subheading: 'Info for 1' },
    'f104f22d-fb24-4c0c-848b-a1c56f8b4f25': { step: '2', subheading: 'Info for 2' },
    'c6963f23-5204-425c-b063-6928b6fb4f0f': { step: '3', subheading: 'Info for 3' },
    'ba6c29ea-a250-47d1-8c7e-b7deb1389b41': { step: '4', subheading: 'Info for 4' },
    '01HE8V8C8BG9Q511S321KH7KYT': { step: '5', subheading: '' },
};

interface AudioProps {
  url: string;
  title: string;
}

interface PageProps {
    sceneNumber?: number;
    formId: string;
    formRef?: string;
    //audio?: AudioProps;
    audioUrl?: string;
    audioTitle?: string;
}

const Page: React.FC<PageProps> = ({ sceneNumber, formId, formRef, audioUrl, audioTitle }) => {
  const defaultStepData = { step: '1', subheading: 'LISTEN & READ' };
  const [stepData, setStepData] = useState(defaultStepData);

  const handleFormEvent = (formRef:any) => {
    setStepData(stepMapping[formRef] || defaultStepData);
    console.log("FORM EVENT DATA:", formRef);
  }

  //const formId = 'yibG9oPN'
  //const formId = 'evw2prWF'

  /*useEffect(() => {
    if (formRef in blockMapping) {
        setStepNumber(`Title ${blockMapping[formRef]}`);
    }
  }, [formRef]);*/

  const widget = useMemo(() => {
    return (
      <Widget
        id={formId}
        style={{ fontSize: 20, width: '100%', height: '100%' }}
        className="typeform-widget"
        onReady={() => {
          console.log('form widget ready');
          sendGTMEvent({ event: 'typeFormReady', value: true });
        }}
        onQuestionChanged={({ formId, ref }) => handleFormEvent(ref)}
        onSubmit={() => {
          console.log('form submitted');
          sendGTMEvent({ event: 'typeFormSubmission', value: formId });
        }}
      />
    );
  }, [formRef]); // Dependency array

  return (
    <section className="flex justify-center w-full px-2 sm:px-8 h-full-screen" style={{height: 'calc(100vh - 170px)'}}>
        <div className="flex flex-col grow h-full items-center text-center tracking-wide uppercase">
            <h1 className="text-2xl xsm:text-5xl sm:text-6xl md:text-6xl mt-2 mb-0">STEP - 0{stepData.step}</h1>
            {sceneNumber && audioUrl && audioTitle && (
              <section className="process-audio-player-section w-full text-sm mt-2 sm:mb-4">
                  <H5Player
                      src={audioUrl}
                      title={`SCENE ${sceneNumber}: ${audioTitle}`}
                  />
              </section>
            )}
            <div className='typeform-widget-container w-full aspect-square max-w-screen-lg min-h-max'>
                {widget}
            </div>
            {/*<h2 className="text-2xl xsm:text-5xl sm:text-6xl md:text-6xl mt-8">{stepData.subheading}</h2>*/}
        </div>
    </section>
  )
}

export default Page;
