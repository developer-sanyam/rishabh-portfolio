"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, X } from "lucide-react"
import { Button } from "./ui/button"
import Link from "next/link"

export function WhatsAppFloatingButton() {
  const [isVisible, setIsVisible] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling 200px
      setIsVisible(window.scrollY > 200)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-6 right-6 z-50 md:hidden"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <div className="relative">
            {/* Expanded Card */}
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  className="absolute bottom-16 right-0 w-64 p-4 bg-charcoal/95 backdrop-blur-md border border-off-white/10 rounded-2xl shadow-xl"
                  initial={{ scale: 0, opacity: 0, originX: 1, originY: 1 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-display font-semibold text-off-white">Let's Chat!</h4>
                    <Button
                      onClick={() => setIsExpanded(false)}
                      className="text-off-white/70 hover:text-off-white transition-colors duration-200"
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                  <p className="text-off-white/70 text-sm mb-4">
                    Ready to discuss your project? Send me a message on WhatsApp.
                  </p>
                  <Link
                    href="https://wa.me/919529155325"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-neon-lime text-charcoal hover:bg-neon-lime/90 font-semibold w-full flex items-center justify-center gap-2 px-4 py-2 rounded-2xl transition-colors duration-200 text-sm"
                    onClick={() => setIsExpanded(false)}
                  >
                    <MessageCircle className="w-4 h-4" />
                    Start Conversation
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Floating Button */}
            <motion.button
              onClick={() => setIsExpanded(!isExpanded)}
              className="w-14 h-14 bg-neon-lime text-charcoal rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform duration-200 focus-ring"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageCircle className="w-6 h-6" />
            </motion.button>

            {/* Pulse Animation */}
            <div className="absolute inset-0 rounded-full bg-neon-lime animate-ping opacity-20"></div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
