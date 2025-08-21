"use client"

import { motion } from "framer-motion"

const specialties = [
  "Branding",
  "Visual Identity",
  "Packaging",
  "Editorial",
  "Social",
  "Illustration",
  "Motion",
  "Art Direction",
]

export function SpecialtiesMarquee() {
  return (
    <section className="py-8 border-y border-off-white/10 bg-muted-gray/50 overflow-hidden">
      <motion.div
        className="flex items-center gap-8 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      >
        {/* First set */}
        {specialties.map((specialty, index) => (
          <div key={`first-${index}`} className="flex items-center gap-8">
            <span className="font-display text-2xl lg:text-3xl font-bold text-off-white/80">{specialty}</span>
            <div className="w-2 h-2 bg-neon-lime rounded-full" />
          </div>
        ))}
        {/* Duplicate set for seamless loop */}
        {specialties.map((specialty, index) => (
          <div key={`second-${index}`} className="flex items-center gap-8">
            <span className="font-display text-2xl lg:text-3xl font-bold text-off-white/80">{specialty}</span>
            <div className="w-2 h-2 bg-neon-lime rounded-full" />
          </div>
        ))}
      </motion.div>
    </section>
  )
}
