"use client"

import { motion } from "framer-motion"

interface SectionTitleProps {
  eyebrow?: string
  title: string
  description?: string
  align?: "left" | "center"
  className?: string
}

export function SectionTitle({ eyebrow, title, description, align = "left", className = "" }: SectionTitleProps) {
  return (
    <motion.div
      className={`${align === "center" ? "text-center" : "text-left"} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {eyebrow && (
        <motion.p
          className="text-neon-lime text-sm font-medium tracking-wider uppercase mb-4"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {eyebrow}
        </motion.p>
      )}

      <motion.h2
        className="font-display text-3xl lg:text-4xl xl:text-5xl font-bold text-off-white leading-tight mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {title}
      </motion.h2>

      {description && (
        <motion.p
          className="text-off-white/70 text-lg leading-relaxed max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {description}
        </motion.p>
      )}

      {/* Decorative Line */}
      <motion.div
        className={`mt-8 h-px bg-gradient-to-r from-neon-lime to-transparent ${align === "center" ? "mx-auto w-24" : "w-16"
          }`}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
      />
    </motion.div>
  )
}
