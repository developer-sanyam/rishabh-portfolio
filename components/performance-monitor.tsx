"use client"

import { useEffect } from "react"

export function PerformanceMonitor() {
  useEffect(() => {
    // Preload critical images
    const criticalImages = [
      "/images/projects/zenith/cover.png",
      "/images/projects/aurora/cover.png",
      "/images/projects/velocity/cover.png",
    ]

    criticalImages.forEach((src) => {
      const img = new Image()
      img.src = src
    })

    // Lazy load non-critical images
    const lazyImages = document.querySelectorAll("img[data-lazy]")
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement
          img.src = img.dataset.lazy || ""
          img.removeAttribute("data-lazy")
          imageObserver.unobserve(img)
        }
      })
    })

    lazyImages.forEach((img) => imageObserver.observe(img))

    return () => {
      lazyImages.forEach((img) => imageObserver.unobserve(img))
    }
  }, [])
}
