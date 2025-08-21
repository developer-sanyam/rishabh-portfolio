"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { SectionTitle } from "@/components/section-title"
import clientsData from "@/data/clients.json"

export function ClientLogos() {
  return (
    <section className="py-20 bg-muted-gray/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <SectionTitle
          title="Trusted by Leading Brands"
          description="Collaborating with forward-thinking companies to create impactful visual experiences."
          align="center"
          className="mb-16"
        />

        {/* Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center">
          {clientsData.map((client, index) => (
            <motion.div
              key={client.name}
              className="flex items-center justify-center p-4 rounded-xl bg-off-white/5 hover:bg-off-white/10 transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src={client.logo || "/placeholder.svg"}
                alt={`${client.name} logo`}
                width={120}
                height={60}
                className="max-w-full h-auto opacity-70 hover:opacity-100 transition-opacity duration-300 filter brightness-0 invert"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
