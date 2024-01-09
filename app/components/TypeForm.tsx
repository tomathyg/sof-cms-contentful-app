'use client'

import { PopupButton } from '@typeform/embed-react'
import React from 'react'
import { sendGTMEvent } from '@next/third-parties/google'

interface TypeFormProps {
  id: string;
}

const TypeForm: React.FC<TypeFormProps> = ({ id }) => {

  console.log("TypeForm ID:", id);

  return (
    <PopupButton
      id={id}
      style={{ fontSize: 20 }}
      size={100}
      className="typeform-button"
      onReady={() => {
        console.log('form ready');
        sendGTMEvent({ event: 'formReady', value: true });
      }}
      onQuestionChanged={({ formId, ref }) => {
        console.log(`Question in form ${formId} changed to ${ref}`)
      }}
      onSubmit={() => {
        console.log('form submitted');
      }}
    >
      CREATE
    </PopupButton>
  )
}

export default TypeForm;