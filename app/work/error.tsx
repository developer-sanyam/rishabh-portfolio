"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"
import { AlertTriangle, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function WorkError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <>
      <section >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <motion.div
            className="text-center max-w-md mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <AlertTriangle className="w-8 h-8 text-destructive" />
            </div>

            <h1 className="font-display text-2xl font-bold text-off-white mb-4">Something went wrong</h1>
            <p className="text-off-white/70 mb-8">
              We encountered an error while loading the portfolio. Please try again.
            </p>

            <Button onClick={reset} className="bg-neon-lime text-charcoal hover:bg-neon-lime/90 font-semibold">
              <RefreshCw className="w-4 h-4 mr-2" />
              Try Again
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  )
}
