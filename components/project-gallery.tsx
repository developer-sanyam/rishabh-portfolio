"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Expand } from "lucide-react"
import { Lightbox } from "@/components/lightbox"

interface ProjectGalleryProps {
  images: string[]
  title: string
}

export function ProjectGallery({ images, title }: ProjectGalleryProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index)
    setLightboxOpen(true)
  }

  if (!images || images.length === 0) return null

  return (
    <>
      <div className="space-y-8">
        {/* Main Image */}
        {images[0] && (
          <motion.div
            className="relative group cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onClick={() => openLightbox(0)}
          >
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
              <Image
                src={images[0] || "/placeholder.svg"}
                alt={`${title} - Main image`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105 bg-gray-200"
                priority
              />
              <div className="absolute inset-0 bg-charcoal/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="w-12 h-12 bg-neon-lime text-charcoal rounded-full flex items-center justify-center">
                  <Expand className="w-6 h-6" />
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Additional Images Grid */}
        {images.length > 1 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.slice(1).map((image, index) => (
              <motion.div
                key={index + 1}
                className="relative group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (index + 1) * 0.1 }}
                onClick={() => openLightbox(index + 1)}
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${title} - Image ${index + 2}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105 bg-gray-200"
                  />
                  <div className="absolute inset-0 bg-charcoal/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-10 h-10 bg-neon-lime text-charcoal rounded-full flex items-center justify-center">
                      <Expand className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox */}
      <Lightbox
        images={images}
        isOpen={lightboxOpen}
        currentIndex={currentImageIndex}
        onClose={() => setLightboxOpen(false)}
        onNavigate={setCurrentImageIndex}
      />
    </>
  )
}
