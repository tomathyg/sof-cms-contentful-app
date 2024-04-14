"use client";
import {useSearchParams, usePathname} from "next/navigation";
import Link from "next/link";
import BrevoSignupForm from "./BrevoSignupForm";
import React, { useEffect } from 'react';

function Modal() {
    const searchParams = useSearchParams();
    const modal = searchParams.get("modal");
    const pathname = usePathname();

    useEffect(() => {
        // This function runs when the component mounts and anytime the `modal` variable changes.
        if (modal) {
            document.body.classList.add('modal-open');
        } else {
            document.body.classList.remove('modal-open');
        }

        // Optional: Cleanup function to remove the class when the component unmounts
        return () => {
            document.body.classList.remove('modal-open');
        };
    }, [modal]); // Only re-run the effect if `modal` changes

    return (
        <>
            {modal &&
                <dialog
                    className="fixed left-0 top-0 w-full h-full bg-black bg-opacity-100 z-50 overflow-auto flex justify-center items-center">
                    <div className="h-full sm:h-auto bg-black border-off-white rounded-lg flex flex-col items-center relative py-6">
                        <Link href={pathname} className="text-left absolute right-4 top-4">
                            <button type="button" className="bg-black text-white rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" aria-hidden="true" focusable="false" className="yarl__icon"><g fill="#e8e0c5"><path d="M0 0h24v24H0z" fill="none"></path><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></g></svg>
                            </button>
                        </Link>
                        <div className="h-full flex flex-col items-center justify-center w-full signup-form-container">
                            <BrevoSignupForm />
                        </div>
                    </div>
                </dialog>
            }
        </>
    );
}

export default Modal;