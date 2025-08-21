"use client"
import { notFound } from "next/navigation"
import { Calendar, User, Briefcase, Wrench } from "lucide-react"
import { Tag } from "@/components/tag"
import { ProjectGallery } from "@/components/project-gallery"
import { ProjectNavigation } from "@/components/project-navigation"
import { CTASection } from "@/components/cta-section"
import projectsData from "@/data/projects.json"

interface ProjectPageProps {
  params: {
    slug: string
  }
}

export default function ProjectClientPage({ params }: ProjectPageProps) {
  const project = projectsData.find((p) => p.slug === params.slug)

  if (!project) {
    notFound()
  }

  return (
    <>
      {/* Project Hero */}
      <section >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="max-w-4xl mx-auto">
            {/* Project Meta */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <div className="flex items-center gap-2 text-off-white/70">
                <Calendar className="w-4 h-4 text-neon-lime" />
                <span className="text-sm">{project.year}</span>
              </div>
              <div className="flex items-center gap-2 text-off-white/70">
                <User className="w-4 h-4 text-electric-blue" />
                <span className="text-sm">{project.role}</span>
              </div>
            </div>

            {/* Project Title */}
            <h1 className="font-display text-4xl lg:text-5xl xl:text-6xl font-bold text-off-white leading-tight mb-6">
              {project.title}
            </h1>

            {/* Client */}
            <p className="text-xl lg:text-2xl text-neon-lime font-medium mb-8">{project.client}</p>

            {/* Summary */}
            <p className="text-lg text-off-white/80 leading-relaxed mb-12 max-w-3xl">{project.summary}</p>

            {/* Services & Tags */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Briefcase className="w-5 h-5 text-neon-lime" />
                  <h3 className="font-display text-lg font-semibold text-off-white">Services</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.services.map((service) => (
                    <Tag key={service} variant="accent">
                      {service}
                    </Tag>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Wrench className="w-5 h-5 text-electric-blue" />
                  <h3 className="font-display text-lg font-semibold text-off-white">Categories</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Tag key={tag} variant="default">
                      {tag}
                    </Tag>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <ProjectGallery images={project.images} title={project.title} />
        </div>
      </section>

      {/* Case Study */}
      {project.caseStudy && (
        <section className="py-20 bg-muted-gray/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-off-white mb-16 text-center">
                Case Study
              </h2>

              <div className="space-y-16">
                {/* Problem */}
                <div>
                  <h3 className="font-display text-2xl font-bold text-neon-lime mb-6">Problem</h3>
                  <p className="text-lg text-off-white/80 leading-relaxed">{project.caseStudy.problem}</p>
                </div>

                {/* Concept */}
                <div>
                  <h3 className="font-display text-2xl font-bold text-electric-blue mb-6">Concept</h3>
                  <p className="text-lg text-off-white/80 leading-relaxed">{project.caseStudy.concept}</p>
                </div>

                {/* Process */}
                <div>
                  <h3 className="font-display text-2xl font-bold text-neon-lime mb-6">Process</h3>
                  <p className="text-lg text-off-white/80 leading-relaxed">{project.caseStudy.process}</p>
                </div>

                {/* Outcome */}
                <div>
                  <h3 className="font-display text-2xl font-bold text-electric-blue mb-6">Outcome</h3>
                  <p className="text-lg text-off-white/80 leading-relaxed">{project.caseStudy.outcome}</p>
                </div>

                {/* Results */}
                <div>
                  <h3 className="font-display text-2xl font-bold text-neon-lime mb-6">Results</h3>
                  <p className="text-lg text-off-white/80 leading-relaxed">{project.caseStudy.results}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Project Navigation */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <ProjectNavigation currentSlug={project.slug} />
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </>
  )
}
