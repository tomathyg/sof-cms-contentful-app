"use client";
import React, { useEffect, useState } from 'react';
import BrevoSignupForm from "./BrevoSignupForm";

function Modal() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('modal-open');
        } else {
            document.body.classList.remove('modal-open');
        }

        return () => {
            document.body.classList.remove('modal-open');
        };
    }, [isOpen]);

    const closeModal = () => setIsOpen(false);

    return (
        <>
            <button onClick={() => setIsOpen(true)} className="fixed z-10 right-6 sm:right-6 bottom-[4.5rem] bg-black text-xsm xsm:text-base text-off-white p-2 font-sans uppercase border border-off-white rounded-lg py-2 px-4">
                SIGN UP
            </button>
            {isOpen &&
                <dialog
                    className="fixed left-0 top-0 w-full h-full bg-black bg-opacity-75 z-50 overflow-auto flex justify-center items-center">
                    <div className="h-full sm:h-auto bg-black border-off-white rounded-lg flex flex-col items-center relative py-8">
                        <button onClick={closeModal} className="absolute right-5 top-5 text-off-white">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false">
                                <path d="M0 0h24v24H0z" fill="none" />
                                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" fill="#e8e0c5" />
                            </svg>
                        </button>
                        <div className="flex flex-col items-center justify-center w-full signup-form-container">
                            <BrevoSignupForm />
                        </div>
                    </div>
                </dialog>
            }
        </>
    );
}

export default Modal;

