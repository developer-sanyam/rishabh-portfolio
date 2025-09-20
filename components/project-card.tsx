"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Calendar, Building } from "lucide-react"
import { Tag } from "@/components/tag"

interface Project {
  id: string
  slug: string
  title: string
  category: string
  description: string
  longDescription: string
  image: string
  images: string[]
  tags: string[]
  technologies: string[]
  year: string
  client: string
  featured: boolean
}

interface ProjectCardProps {
  project: Project
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={`/work/${project.slug}`} className="block focus-ring rounded-2xl h-full">
        <div className="relative overflow-hidden rounded-2xl bg-muted-gray border border-off-white/10 hover:border-neon-lime/30 h-full">
          {/* Project Image */}
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              fill
              className="object-cover bg-gray-200"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent opacity-0 group-hover:opacity-100" />

            {/* Hover Content */}
            {isHovered && (
              <div className="absolute inset-0 flex items-end p-6">
                <div className="text-off-white">
                  <div className="flex items-center gap-2 mb-2">
                    <Building className="w-4 h-4 text-neon-lime" />
                    <span className="text-sm font-medium">{project.category}</span>
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <Calendar className="w-4 h-4 text-black" />
                    <span className="text-sm">{project.year}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 2).map((tag) => (
                      <Tag key={tag} variant="accent" className="text-xs">
                        {tag}
                      </Tag>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* View Project Icon */}
            <div className="absolute top-4 right-4 w-10 h-10 bg-gray-200 text-charcoal rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100">
              <ArrowUpRight className="w-5 h-5" />
            </div>
          </div>

          {/* Project Info */}
          <div className="p-6">
            <h3 className="font-display text-xl font-bold text-off-white mb-2 group-hover:text-neon-lime">
              {project.title}
            </h3>
            <p className="text-off-white/70 mb-3">{project.client}</p>
            <p className="text-off-white/60 text-sm leading-relaxed mb-4">{project.description}</p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2">
              {project.technologies.slice(0, 3).map((tech) => (
                <Tag key={tech} variant="muted" className="text-xs">
                  {tech}
                </Tag>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}