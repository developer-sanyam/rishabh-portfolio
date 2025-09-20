"use client"

import { useState, useEffect } from "react"
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
    <>
      {isVisible && (
        <div className="fixed bottom-6 right-6 z-50">
          <div className="relative">
            {/* Expanded Card */}
            {isExpanded && (
              <div className="absolute bottom-16 right-0 w-64 p-4 bg-charcoal/95 backdrop-blur-md border border-off-white/10 rounded-2xl shadow-xl">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-display font-semibold text-off-white">Let's Chat!</h4>
                  <Button
                    onClick={() => setIsExpanded(false)}
                    className="text-off-white/70 hover:text-off-white"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
                <p className="text-off-white/70 text-sm mb-4">
                  Ready to discuss your project? Send me a message on WhatsApp.
                </p>
                <Link
                  href="https://wa.me/919529155325?text=Hello%20Rishabh,%20I%20found%20your%20floating%20WhatsApp%20button%20and%20would%20like%20to%20start%20a%20conversation%20about%20a%20design%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-neon-lime text-charcoal hover:bg-neon-lime/90 font-semibold w-full flex items-center justify-center gap-2 px-4 py-2 rounded-2xl text-sm"
                  onClick={() => setIsExpanded(false)}
                >
                  <MessageCircle className="w-4 h-4" />
                  Start Conversation
                </Link>
              </div>
            )}

            {/* Floating Button */}
            <button
              title="Start Conversation"
              onClick={() => setIsExpanded(!isExpanded)}
              className="w-14 h-14 bg-neon-lime text-charcoal rounded-full shadow-lg flex items-center justify-center focus-ring"
            >
              <MessageCircle className="w-6 h-6" />
            </button>

            {/* Pulse Animation */}
            <div className="absolute inset-0 rounded-full bg-neon-lime animate-ping opacity-20 pointer-events-none"></div>
          </div>
        </div>
      )}
    </>
  )
}
