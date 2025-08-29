"use client"

import { motion } from "framer-motion"
import { ArrowRight, Eye, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ParallaxSection } from "@/components/parallax-section"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal to-muted-gray" />
      <ParallaxSection offset={30}>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-neon-lime/5 rounded-full blur-3xl" />
      </ParallaxSection>
      <ParallaxSection offset={-30}>
        <div className="absolute bottom-1/4 left-1/4 w-56 h-56 sm:w-80 sm:h-80 bg-electric-blue/5 rounded-full blur-3xl" />
      </ParallaxSection>

      <div className="container mx-auto py-4 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Logo */}
          <motion.div
            className="mb-8 sm:mb-12"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <img
              src="/logo.png"
              alt="GraphiqNest Logo"
              className="w-24 h-24 sm:w-32 sm:h-32 mx-auto object-contain"
            />
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            className="font-display text-responsive-3xl font-bold text-off-white leading-tight mb-6 sm:mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Graphic Designer
            <br />
            <motion.span
              className="text-neon-lime"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            >
              crafting striking
            </motion.span>
            <br />
            identities & visuals
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="text-responsive-md text-off-white/80 leading-relaxed mb-8 sm:mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Specializing in brand identity, packaging design, editorial layouts, and visual storytelling that connects
            with audiences and drives results.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="w-full sm:w-auto"
            >
              <Button
                asChild
                size="lg"
                className="bg-neon-lime text-charcoal hover:bg-neon-lime/90 font-semibold text-base btn-mobile w-full sm:w-auto"
              >
                <Link href="/work" className="flex items-center justify-center gap-2">
                  <Eye className="w-5 h-5" />
                  View Work
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="w-full sm:w-auto"
            >
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-electric-blue text-electric-blue hover:bg-electric-blue hover:text-black bg-transparent text-base btn-mobile w-full sm:w-auto"
              >
                <Link
                  href="https://wa.me/919529155325"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chat on WhatsApp
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="flex flex-col items-center gap-2 text-off-white/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <span className="text-sm font-medium">Scroll to explore</span>
            <motion.div
              className="w-px h-8 sm:h-12 bg-gradient-to-b from-off-white/50 to-transparent"
              animate={{ scaleY: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
