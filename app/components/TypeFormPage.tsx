'use client'

import React, { useState, useMemo } from 'react'
import { Widget } from '@typeform/embed-react'
import H5Player from '../components/H5AudioPlayer'

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
    '01HE8V8C7PES3MZWD3GNC11CGZ': { step: '1', subheading: 'LISTEN & READ' },
    '31ee3aba-b8c2-421e-9bc2-cd7d31f3b5df': { step: '2', subheading: 'Info for 2' },
    '377c9572-86ab-4b4f-ab03-8422b4860b9c': { step: '3', subheading: 'Info for 3' },
    'f104f22d-fb24-4c0c-848b-a1c56f8b4f25': { step: '4', subheading: 'Info for 4' },
    'c6963f23-5204-425c-b063-6928b6fb4f0f': { step: '5', subheading: 'Info for 5' },
    '6187d4e8-27a8-4d68-9888-4eaf39589876': { step: '6', subheading: 'Info for 6' },
};

interface PageProps {
    formRef?: string;
}

const Page: React.FC<PageProps> = ({ formRef }) => {
  const [stepData, setStepData] = useState({ step: '1', subheading: 'LISTEN & READ' });

  const handleFormEvent = (formRef:any) => {
    setStepData(stepMapping[formRef]);
    console.log("FORM EVENT DATA:", formRef);
  }

  /*useEffect(() => {
    if (formRef in blockMapping) {
        setStepNumber(`Title ${blockMapping[formRef]}`);
    }
  }, [formRef]);*/

  const widget = useMemo(() => {
    return (
      <Widget
        id='eAdn6pFg'
        style={{ fontSize: 20, width: '100%', height: '100%' }}
        className="typeform-widget"
        onReady={() => console.log('form ready')}
        onQuestionChanged={({ formId, ref }) => handleFormEvent(ref)}
      />
    );
  }, [formRef]); // Dependency array

  return (
    <section className="flex justify-center w-full px-8 h-full-screen" style={{height: 'calc(100vh - 170px)'}}>
        <div className="flex flex-col grow h-full items-center justify-between text-center tracking-wide uppercase">
            <h1 className="text-4xl xsm:text-5xl sm:text-6xl md:text-6xl mt-6 mb-2">STEP - 0{stepData.step}</h1>
            <section className="process-audio-player-section w-full text-sm mb-6">
                <H5Player
                    src="https://assets.ctfassets.net/57idppycthif/7KTYzLD4REKUkW5wFHkN9r/b94181d9856d7848f571a11a5735097c/Willows_Heartbeat_44_1K.mp3"
                    title="Willow's Heartbeat"
                />
            </section>
            <div className='typeform-widget-container w-full aspect-portrait-tall sm:aspect-square max-w-screen-lg min-h-max'>
                {widget}
            </div>
            <h2 className="text-4xl xsm:text-5xl sm:text-6xl md:text-6xl my-8">{stepData.subheading}</h2>
        </div>
    </section>
  )
}

export default Page;
