"use client"

import type React from "react"
import { motion } from "framer-motion"
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
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <Button className={`relative overflow-hidden ${className}`} {...props}>
        {children}
        {ripple && (
          <motion.div
            className="absolute inset-0 bg-white/10 rounded-inherit"
            initial={{ scale: 0, opacity: 0 }}
            whileTap={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.2 }}
          />
        )}
      </Button>
    </motion.div>
  )
}
