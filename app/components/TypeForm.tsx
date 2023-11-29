'use client'

import { PopupButton } from '@typeform/embed-react'
import React from 'react'

interface TypeFormProps {
  id: string;
}

const TypeForm: React.FC<TypeFormProps> = ({ id }) => {

  return (
    <PopupButton
      id={id}
      style={{ fontSize: 20 }}
      size={100}
      className="typeform-button"
      onReady={() => {
        console.log('form ready')
      }}
      onQuestionChanged={({ formId, ref }) => {
        console.log(`Question in form ${formId} changed to ${ref}`)
      }}
    >
      CREATE
    </PopupButton>
  )
}

export default TypeForm;