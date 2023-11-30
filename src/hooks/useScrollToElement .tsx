'use client'

import { useEffect, useRef } from 'react'

const useScrollToElement = (id: string) => {
  const elementRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const scrollToElement = () => {
      if (elementRef.current) {
        elementRef.current.scrollIntoView({ behavior: 'smooth' })
      }
    }

    document.addEventListener('scrollToElement', scrollToElement)

    return () => {
      document.removeEventListener('scrollToElement', scrollToElement)
    }
  }, [id])

  return elementRef
}

export default useScrollToElement
