"use client"

import { useEffect, useState } from "react"

export function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = docHeight > 0 ? scrollTop / docHeight : 0
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', updateScrollProgress)
    return () => window.removeEventListener('scroll', updateScrollProgress)
  }, [])

  return (
    <>
      <div
        className="fixed top-0 left-0 h-1 bg-neon-lime z-100 origin-left scroll-progress-bar"
        style={{
          '--progress-width': `${scrollProgress * 100}%`,
        } as React.CSSProperties}
      />
      <div className="fixed top-0 left-0 right-0 h-1 bg-gray-800 z-50 w-full" />
    </>
  )
}
