'use client'

import { useEffect, useState } from 'react'
import clsx from 'clsx'

export default function FadeInWrapper({ children }: { children: React.ReactNode }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisible(true)
    }, 10) // slight delay ensures it triggers after mount

    return () => clearTimeout(timeout)
  }, [])

  return (
    <div
      className={clsx(
        'transition-opacity duration-700 ease-in-out',
        visible ? 'opacity-100' : 'opacity-0'
      )}
    >
      {children}
    </div>
  )
}
