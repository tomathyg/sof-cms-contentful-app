'use client'
import { useCallback, useRef, useState, useEffect, MouseEventHandler } from 'react'
import Spinner from '../loading'
//import { useRouter } from 'next/navigation'

interface ModalProps {
  isOpen: boolean;
  children: React.ReactNode;
  onClose: () => void;  // Callback to inform parent component when modal closes
}

export default function Modal({ isOpen, children, onClose }: ModalProps) {
  const [modalOpen, setModalOpen] = useState(isOpen);

  //console.log("IS OPEN:", isOpen);

  const overlay = useRef(null)
  const wrapper = useRef(null)
  const close = useRef(null)
  //const router = useRouter()

  const onDismiss = useCallback(() => {
    setModalOpen(false);
    onClose(); // Inform parent component that modal has closed
  }, [onClose]);

  const onClick: MouseEventHandler = useCallback(
    (e) => {
      if (e.target === close.current) {
        if (onDismiss) onDismiss()
      }
    },
    [onDismiss, close]
  )

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onDismiss()
    },
    [onDismiss]
  )

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [onKeyDown])


  useEffect(() => {
    setModalOpen(isOpen);
  }, [isOpen]);

  if (!modalOpen) {
    return null;
  }

  return (
    <div
      ref={overlay}
      className="fixed z-10 left-0 right-0 top-0 bottom-0 mx-auto bg-black modal-overlay"
      onClick={onClick}
    >
      <div className="button-container relative">
        <button 
          ref={close}
          className="absolute right-0 z-10 text-4xl p-6" onClick={onClick}>
            <svg id="close-x" className="rotate-on-hover" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 460.32 460.32">
              <g>
                <path id="times" d="m230.16,194.38L424.54,0l35.79,35.79-194.37,194.38,194.37,194.37-35.79,35.79-194.37-194.37L35.79,460.32,0,424.54l194.38-194.37L0,35.79,35.79,0l194.37,194.38h0Z" fill="#fff" fillRule="evenodd"/><path d="m230.16,194.38L424.54,0l35.79,35.79-194.37,194.38,194.37,194.37-35.79,35.79-194.37-194.37L35.79,460.32,0,424.54l194.38-194.37L0,35.79,35.79,0l194.37,194.38h0Z" fill="#fff" fillRule="evenodd"/>
              </g>
            </svg>
          </button>
      </div>
      <div
        ref={wrapper}
        className="absolute top-10 left-1/2 -translate-x-1/2 w-full sm:w-10/12 md:w-8/12 lg:w-1/2 modal-wrapper"
      >
        <div className="absolute flex align-center spinner-wrapper w-full h-full pt-[40px] -z-[1]">
          <Spinner />
        </div>
        {children}
      </div>
    </div>
  )
}
