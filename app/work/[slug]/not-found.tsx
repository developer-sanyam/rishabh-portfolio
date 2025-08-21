"use client"

import { motion } from "framer-motion"
import { FileQuestion, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function ProjectNotFound() {
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
            <div className="w-16 h-16 bg-off-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <FileQuestion className="w-8 h-8 text-off-white/70" />
            </div>

            <h1 className="font-display text-2xl font-bold text-off-white mb-4">Project Not Found</h1>
            <p className="text-off-white/70 mb-8">
              The project you're looking for doesn't exist or may have been moved.
            </p>

            <Button asChild className="bg-neon-lime text-charcoal hover:bg-neon-lime/90 font-semibold">
              <Link href="/work" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Work
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  )
}
