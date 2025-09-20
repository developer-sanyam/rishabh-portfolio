import type React from "react"

interface TagProps {
  children: React.ReactNode
  variant?: "default" | "accent" | "muted"
  className?: string
}

export function Tag({ children, variant = "default", className = "" }: TagProps) {
  const variants = {
    default: "bg-off-white/10 text-off-white border-off-white/20",
    accent: "bg-neon-lime/10 text-neon-lime border-neon-lime/30",
    muted: "bg-muted-gray text-off-white/70 border-off-white/10",
  }

  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${variants[variant]} ${className}`}>
      {children}
    </span>
  )
}
