"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import type { VariantProps } from "class-variance-authority"
import type { buttonVariants } from "@/components/ui/button"

interface EnhancedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  children: React.ReactNode
  ripple?: boolean
  asChild?: boolean
}

export function EnhancedButton({
  children,
  ripple = true,
  className,
  variant,
  size,
  asChild,
  ...props
}: EnhancedButtonProps) {
  return (
    <div>
      <Button className={`relative overflow-hidden ${className}`} {...props}>
        {children}
      </Button>
    </div>
  )
}
