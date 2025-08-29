"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionTitle } from "@/components/section-title"
import { ProjectCard } from "@/components/project-card"
import projectsData from "@/data/projects.json"
import Link from "next/link"

export function FeaturedProjects() {
  // Get featured projects from data
  const featuredProjects = projectsData.filter(project => project.featured)

  return (
    <section >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <SectionTitle
          eyebrow="Selected Work"
          title="Featured Projects"
          description="A showcase of recent projects spanning brand identity, packaging design, editorial layouts, and digital experiences."
          className="mb-16"
        />

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>

        {/* View All Work CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Button
            asChild
            size="lg"
            className="border-electric-blue text-electric-blue hover:bg-electric-blue hover:!text-black bg-transparent text-base px-8 py-4"
          >
            <Link href="/work" className="flex items-center gap-2">
              View All Work
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
