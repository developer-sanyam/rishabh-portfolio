"use client"

import { motion } from "framer-motion"

export default function WorkLoading() {
  return (
    <>
      <section >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {/* Loading Header */}
          <div className="text-center mb-16">
            <div className="h-4 bg-neon-lime/20 rounded w-24 mx-auto mb-4" />
            <div className="h-12 bg-off-white/10 rounded w-96 mx-auto mb-6" />
            <div className="h-6 bg-off-white/5 rounded w-full max-w-2xl mx-auto" />
          </div>

          {/* Loading Filters */}
          <div className="space-y-6 mb-12">
            <div className="h-10 bg-off-white/5 rounded-2xl w-80" />
            <div className="flex gap-3">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="h-8 bg-off-white/5 rounded-full w-20" />
              ))}
            </div>
          </div>

          {/* Loading Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, i) => (
              <motion.div
                key={i}
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <div className="aspect-[4/3] bg-off-white/5 rounded-2xl" />
                <div className="space-y-2 p-6">
                  <div className="h-6 bg-off-white/10 rounded w-3/4" />
                  <div className="h-4 bg-off-white/5 rounded w-1/2" />
                  <div className="h-4 bg-off-white/5 rounded w-full" />
                  <div className="flex gap-2 mt-4">
                    <div className="h-6 bg-off-white/5 rounded-full w-16" />
                    <div className="h-6 bg-off-white/5 rounded-full w-20" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
