import type React from "react"

interface ParallaxSectionProps {
  children: React.ReactNode
  offset?: number
  className?: string
}

export function ParallaxSection({ children, offset = 50, className = "" }: ParallaxSectionProps) {
  return <div className={className}>{children}</div>
}
