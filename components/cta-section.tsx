"use client"

import { motion } from "framer-motion"
import { MessageCircle, Phone, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-muted-gray to-charcoal">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Main CTA Content */}
          <motion.h2
            className="font-display text-4xl lg:text-5xl font-bold text-off-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Ready to bring your
            <br />
            <span className="text-neon-lime">vision to life?</span>
          </motion.h2>

          <motion.p
            className="text-xl text-off-white/80 leading-relaxed mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Let's discuss your project and explore how we can create something extraordinary together. Get in touch
            today.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button
              asChild
              size="lg"
              className="bg-neon-lime text-charcoal hover:bg-neon-lime/90 font-semibold text-base px-8 py-4"
            >
              <Link
                href="https://wa.me/919529155325"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-off-white/30 text-off-white hover:bg-off-white hover:text-black bg-transparent text-base px-8 py-4"
            >
              <Link href="tel:+919529155325" className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Call Rishabh
              </Link>
            </Button>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="mt-12 pt-8 border-t border-off-white/10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <p className="text-off-white/60 text-sm mb-2">Prefer email?</p>
            <Link
              href="mailto:rishabhprajapat565@gmail.com"
              className="text-electric-blue hover:text-neon-lime transition-colors duration-200 focus-ring"
            >
              rishabhprajapat565@gmail.com
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
