'use client'

import { PopupButton, Sidetab } from '@typeform/embed-react'
import React from 'react'

interface TypeFormProps {
  id: string;
}

const TypeForm: React.FC<TypeFormProps> = ({ id }) => {

    return (
      <div className="container mx-auto px-5">
        <PopupButton id={id} style={{ fontSize: 20 }} className="my-button">
          CREATE
        </PopupButton>
      </div>
    )
  }

export default TypeForm;