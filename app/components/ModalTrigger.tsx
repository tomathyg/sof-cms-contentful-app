'use client'

import React, { useState } from 'react';

import Modal from '../components/Modal'
import BrevoSignupForm from '../components/BrevoSignupForm'

const ModalClientComponent = ({ iframeSrc }: { iframeSrc: string }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClose = () => {
    setIsModalOpen(false); // Reset the state when modal is closed
  };

  return (
    <>
      <button onClick={() => setIsModalOpen(true)} className="bg-transparent border border-solid hover:bg-white hover:text-black active:bg-white-600 font-bold uppercase px-8 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">JOIN THE COMMUNITY</button>
      <Modal isOpen={isModalOpen} onClose={handleClose}>
        <BrevoSignupForm
            src={iframeSrc}
        />
      </Modal>
    </>
  );
};

export default ModalClientComponent;