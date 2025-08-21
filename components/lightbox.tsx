"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from "lucide-react"
import { Button } from "@/components/ui/button"

interface LightboxProps {
  images: string[]
  isOpen: boolean
  currentIndex: number
  onClose: () => void
  onNavigate: (index: number) => void
}

export function Lightbox({ images, isOpen, currentIndex, onClose, onNavigate }: LightboxProps) {
  const [scale, setScale] = useState(1)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return

      switch (e.key) {
        case "Escape":
          onClose()
          break
        case "ArrowLeft":
          onNavigate(currentIndex > 0 ? currentIndex - 1 : images.length - 1)
          break
        case "ArrowRight":
          onNavigate(currentIndex < images.length - 1 ? currentIndex + 1 : 0)
          break
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [isOpen, currentIndex, images.length, onClose, onNavigate])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  useEffect(() => {
    setScale(1)
  }, [currentIndex])

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 bg-charcoal/95 backdrop-blur-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={onClose}
      >
        {/* Header */}
        <div className="absolute top-0 left-0 right-0 z-10 p-4 flex items-center justify-between">
          <div className="text-off-white/70 text-sm">
            {currentIndex + 1} of {images.length}
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={(e) => {
                e.stopPropagation()
                setScale(scale > 0.5 ? scale - 0.25 : scale)
              }}
              className="text-off-white hover:text-neon-lime"
            >
              <ZoomOut className="w-4 h-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={(e) => {
                e.stopPropagation()
                setScale(scale < 3 ? scale + 0.25 : scale)
              }}
              className="text-off-white hover:text-neon-lime"
            >
              <ZoomIn className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm" onClick={onClose} className="text-off-white hover:text-neon-lime">
              <X className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Navigation */}
        {images.length > 1 && (
          <>
            <Button
              variant="ghost"
              size="sm"
              onClick={(e) => {
                e.stopPropagation()
                onNavigate(currentIndex > 0 ? currentIndex - 1 : images.length - 1)
              }}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 text-off-white hover:text-neon-lime"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={(e) => {
                e.stopPropagation()
                onNavigate(currentIndex < images.length - 1 ? currentIndex + 1 : 0)
              }}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 text-off-white hover:text-neon-lime"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </>
        )}

        {/* Image */}
        <div className="flex items-center justify-center h-full p-16">
          <motion.div className="relative max-w-full max-h-full" style={{ scale }} onClick={(e) => e.stopPropagation()}>
            <Image
              src={images[currentIndex] || "/placeholder.svg"}
              alt={`Project image ${currentIndex + 1}`}
              width={1200}
              height={800}
              className="max-w-full max-h-full object-contain"
              priority
            />
          </motion.div>
        </div>

        {/* Thumbnails */}
        {images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
            <div className="flex items-center gap-2 bg-charcoal/80 backdrop-blur-sm rounded-full p-2">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation()
                    onNavigate(index)
                  }}
                  className={`relative w-12 h-12 rounded-lg overflow-hidden transition-all duration-200 ${
                    index === currentIndex ? "ring-2 ring-neon-lime" : "opacity-70 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`Thumbnail ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  )
}
