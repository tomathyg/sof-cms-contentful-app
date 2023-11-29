'use client'

import { Widget } from '@typeform/embed-react'
import React from 'react'

interface TypeFormProps {
  id: string;
}

const TypeForm: React.FC<TypeFormProps> = ({ id }) => {

  return (
    <Widget
      id={id}
      style={{ fontSize: 20, width: '100%', height: '100%' }}
      className="typeform-widget"
      onReady={() => {
        console.log('form ready')
      }}
      onQuestionChanged={({ formId, ref }) => {
        console.log(`Question in form ${formId} changed to ${ref}`)
      }}
    />
  )
}

export default TypeForm;