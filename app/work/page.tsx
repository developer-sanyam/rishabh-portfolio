import type { Metadata } from "next"
import { SectionTitle } from "@/components/section-title"
import { ProjectGrid } from "@/components/project-grid"
import { CTASection } from "@/components/cta-section"

export const metadata: Metadata = {
  title: "Work - Rishabh Prajapat | Graphic Designer",
  description:
    "Explore my portfolio of graphic design projects including brand identity, packaging design, editorial layouts, and visual storytelling.",
  keywords: ["portfolio", "graphic design projects", "brand identity", "packaging design", "editorial design"],
  openGraph: {
    title: "Work - Rishabh Prajapat | Graphic Designer",
    description:
      "Explore my portfolio of graphic design projects including brand identity, packaging design, editorial layouts, and visual storytelling.",
    url: "https://rishabhprajapat.com/work",
  },
}

export default function WorkPage() {
  return (
    <>
      {/* Hero Section */}
      <section >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <SectionTitle
            eyebrow="Portfolio"
            title="Selected Work"
            description="A comprehensive showcase of projects spanning brand identity, packaging design, editorial layouts, social media campaigns, and illustration work. Each project represents a unique challenge and creative solution."
            align="center"
            className="mb-16"
          />

          {/* Project Grid with Filters */}
          <ProjectGrid />
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </>
  )
}
