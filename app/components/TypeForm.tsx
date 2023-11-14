'use client'

import { PopupButton, Sidetab } from '@typeform/embed-react'
import React from 'react'

interface TypeFormProps {
  id: string;
}

const TypeForm: React.FC<TypeFormProps> = ({ id }) => {

  return (
    <PopupButton id={id} style={{ fontSize: 20 }} size={100} className="typeform-button">
      CREATE
    </PopupButton>
  )
}

export default TypeForm;