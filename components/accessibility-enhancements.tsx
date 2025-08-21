"use client"

import { useEffect } from "react"

export function AccessibilityEnhancements() {
  useEffect(() => {
    // Skip to main content link
    const skipLink = document.createElement("a")
    skipLink.href = "#main-content"
    skipLink.textContent = "Skip to main content"
    skipLink.className =
      "sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-neon-lime focus:text-charcoal focus:rounded-lg"
    document.body.insertBefore(skipLink, document.body.firstChild)

    // Enhanced keyboard navigation
    const handleKeyDown = (e: KeyboardEvent) => {
      // Escape key to close modals/overlays
      if (e.key === "Escape") {
        const activeModal = document.querySelector("[data-modal-open]")
        if (activeModal) {
          const closeButton = activeModal.querySelector("[data-modal-close]") as HTMLElement
          closeButton?.click()
        }
      }

      // Tab trap for modals
      if (e.key === "Tab") {
        const activeModal = document.querySelector("[data-modal-open]")
        if (activeModal) {
          const focusableElements = activeModal.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
          )
          const firstElement = focusableElements[0] as HTMLElement
          const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement

          if (e.shiftKey && document.activeElement === firstElement) {
            e.preventDefault()
            lastElement.focus()
          } else if (!e.shiftKey && document.activeElement === lastElement) {
            e.preventDefault()
            firstElement.focus()
          }
        }
      }
    }

    document.addEventListener("keydown", handleKeyDown)

    // Announce page changes for screen readers
    const announcePageChange = () => {
      const announcement = document.createElement("div")
      announcement.setAttribute("aria-live", "polite")
      announcement.setAttribute("aria-atomic", "true")
      announcement.className = "sr-only"
      announcement.textContent = `Page loaded: ${document.title}`
      document.body.appendChild(announcement)

      setTimeout(() => {
        document.body.removeChild(announcement)
      }, 1000)
    }

    announcePageChange()

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [])

  return null
}
