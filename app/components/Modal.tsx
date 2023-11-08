'use client'
import { useCallback, useRef, useEffect, MouseEventHandler } from 'react'
import { useRouter } from 'next/navigation'

export default function Modal({ children }: { children: React.ReactNode }) {
  const overlay = useRef(null)
  const wrapper = useRef(null)
  const close = useRef(null)
  const router = useRouter()

  const onDismiss = useCallback(() => {
    //router.back()
    //router.push('/')
    window.location.href = "/"
  }, [router])

  const onClick: MouseEventHandler = useCallback(
    (e) => {
      if (e.target === close.current) {
        if (onDismiss) onDismiss()
      }
    },
    [onDismiss, close]
  )

  /*const onClose: MouseEventHandler = useCallback(
    (e) => {
        if (onDismiss) onDismiss()
    },
    [onDismiss, close]
  )*/

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

  return (
    <div
      ref={overlay}
      className="fixed z-10 left-0 right-0 top-0 bottom-0 mx-auto bg-black"
      onClick={onClick}
    >
      <div className="button-container relative">
        <button 
          ref={close}
          className="absolute right-0 z-10 text-4xl p-6" onClick={onClick}>
            <svg id="close-x" className="rotate-on-hover" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 460.32 460.32">
              <g>
                <path id="times" d="m230.16,194.38L424.54,0l35.79,35.79-194.37,194.38,194.37,194.37-35.79,35.79-194.37-194.37L35.79,460.32,0,424.54l194.38-194.37L0,35.79,35.79,0l194.37,194.38h0Z" fill="#fff" fill-rule="evenodd"/><path d="m230.16,194.38L424.54,0l35.79,35.79-194.37,194.38,194.37,194.37-35.79,35.79-194.37-194.37L35.79,460.32,0,424.54l194.38-194.37L0,35.79,35.79,0l194.37,194.38h0Z" fill="#fff" fill-rule="evenodd"/>
              </g>
            </svg>
          </button>
      </div>
      <div
        ref={wrapper}
        className="absolute top-10 left-1/2 -translate-x-1/2 w-full sm:w-10/12 md:w-8/12 lg:w-1/2"
      >
        {children}
      </div>
    </div>
  )
}
