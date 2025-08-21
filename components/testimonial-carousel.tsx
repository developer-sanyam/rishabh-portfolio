"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionTitle } from "@/components/section-title"
import testimonialsData from "@/data/testimonials.json"

export function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length)
  }

  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 6000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <SectionTitle
          eyebrow="Client Feedback"
          title="What Clients Say"
          description="Hear from the brands and businesses I've had the pleasure of working with."
          align="center"
          className="mb-16"
        />

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Testimonial Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5 }}
              >
                {/* Quote Icon */}
                <motion.div
                  className="flex justify-center mb-8"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="w-16 h-16 bg-neon-lime/10 rounded-full flex items-center justify-center">
                    <Quote className="w-8 h-8 text-neon-lime" />
                  </div>
                </motion.div>

                {/* Quote */}
                <blockquote className="text-xl lg:text-2xl text-off-white leading-relaxed mb-8 font-light">
                  "{testimonialsData[currentIndex].quote}"
                </blockquote>

                {/* Author */}
                <div className="text-center">
                  <p className="font-display text-lg font-semibold text-off-white mb-1">
                    {testimonialsData[currentIndex].author}
                  </p>
                  <p className="text-off-white/70">
                    {testimonialsData[currentIndex].role} at {testimonialsData[currentIndex].company}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-center gap-4 mt-12">
              <Button
                variant="ghost"
                size="sm"
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full bg-off-white/5 hover:bg-off-white/10 text-off-white hover:text-neon-lime transition-colors duration-200"
              >
                <ChevronLeft className="w-5 h-5" />
                <span className="sr-only">Previous testimonial</span>
              </Button>

              {/* Dots Indicator */}
              <div className="flex items-center gap-2">
                {testimonialsData.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-200 ${index === currentIndex ? "bg-neon-lime w-8" : "bg-off-white/30 hover:bg-off-white/50"
                      }`}
                  >
                    <span className="sr-only">Go to testimonial {index + 1}</span>
                  </button>
                ))}
              </div>

              <Button
                variant="ghost"
                size="sm"
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full bg-off-white/5 hover:bg-off-white/10 text-off-white hover:text-neon-lime transition-colors duration-200"
              >
                <ChevronRight className="w-5 h-5" />
                <span className="sr-only">Next testimonial</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
