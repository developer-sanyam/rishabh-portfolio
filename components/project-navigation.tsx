"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import projectsData from "@/data/projects.json"

interface ProjectNavigationProps {
  currentSlug: string
}

export function ProjectNavigation({ currentSlug }: ProjectNavigationProps) {
  const currentIndex = projectsData.findIndex((project) => project.slug === currentSlug)
  const prevProject = currentIndex > 0 ? projectsData[currentIndex - 1] : projectsData[projectsData.length - 1]
  const nextProject = currentIndex < projectsData.length - 1 ? projectsData[currentIndex + 1] : projectsData[0]

  return (
    <motion.div
      className="flex flex-col sm:flex-row items-center justify-between gap-6 p-8 bg-muted-gray/30 rounded-2xl border border-off-white/10"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Previous Project */}
      <Link
        href={`/work/${prevProject.slug}`}
        className="group flex items-center gap-4 text-left hover:text-neon-lime transition-colors duration-200 focus-ring rounded-xl p-4 -m-4"
      >
        <div className="w-10 h-10 bg-off-white/10 group-hover:bg-neon-lime/20 rounded-full flex items-center justify-center transition-colors duration-200">
          <ChevronLeft className="w-5 h-5" />
        </div>
        <div>
          <p className="text-off-white/70 text-sm mb-1">Previous Project</p>
          <h3 className="font-display font-semibold text-off-white group-hover:text-neon-lime transition-colors duration-200">
            {prevProject.title}
          </h3>
          <p className="text-off-white/60 text-sm">{prevProject.client}</p>
        </div>
      </Link>

      {/* Back to Work */}
      <Button
        asChild
        variant="outline"
        className="border-off-white/30 text-off-white hover:bg-off-white hover:text-black bg-transparent"
      >
        <Link href="/work">All Projects</Link>
      </Button>

      {/* Next Project */}
      <Link
        href={`/work/${nextProject.slug}`}
        className="group flex items-center gap-4 text-right hover:text-neon-lime transition-colors duration-200 focus-ring rounded-xl p-4 -m-4"
      >
        <div className="order-2">
          <p className="text-off-white/70 text-sm mb-1">Next Project</p>
          <h3 className="font-display font-semibold text-off-white group-hover:text-neon-lime transition-colors duration-200">
            {nextProject.title}
          </h3>
          <p className="text-off-white/60 text-sm">{nextProject.client}</p>
        </div>
        <div className="w-10 h-10 bg-off-white/10 group-hover:bg-neon-lime/20 rounded-full flex items-center justify-center transition-colors duration-200 order-1">
          <ChevronRight className="w-5 h-5" />
        </div>
      </Link>
    </motion.div>
  )
}
