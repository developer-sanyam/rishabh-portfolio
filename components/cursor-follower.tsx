"use client"

import { useEffect, useState } from "react"

export function CursorFollower() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)

    // Add hover listeners to interactive elements
    const interactiveElements = document.querySelectorAll("a, button, [role='button']")

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter)
      el.addEventListener("mouseleave", handleMouseLeave)
    })

    window.addEventListener("mousemove", updateMousePosition)

    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter)
        el.removeEventListener("mouseleave", handleMouseLeave)
      })
    }
  }, [])

  return (
    <div
      className="fixed top-0 left-0 w-6 h-6 bg-neon-lime/20 rounded-full pointer-events-none z-50 mix-blend-difference hidden lg:block cursor-follower"
      style={{
        '--cursor-x': `${mousePosition.x - 12}px`,
        '--cursor-y': `${mousePosition.y - 12}px`,
        '--cursor-scale': isHovering ? 1.5 : 1,
      } as React.CSSProperties}
    />
  )
}
