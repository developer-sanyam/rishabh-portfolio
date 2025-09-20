import Image from "next/image"
import { Download, Award } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppFloatingButton } from "@/components/whatsapp-floating-button"
import { SectionTitle } from "@/components/section-title"
import { Tag } from "@/components/tag"
import { Button } from "@/components/ui/button"
import { CTASection } from "@/components/cta-section"
import Link from "next/link"

const tools = [
  "Adobe Creative Suite",
  "Figma",
  "Sketch",
  "Procreate",
  "Cinema 4D",
  "After Effects",
  "Photoshop",
  "Illustrator",
  "InDesign",
  "Blender",
  "Principle",
  "Framer",
]

const capabilities = [
  "Brand Identity Design",
  "Logo Design & Development",
  "Packaging Design",
  "Editorial Design",
  "Social Media Design",
  "Illustration",
  "Motion Graphics",
  "Art Direction",
  "Print Design",
  "Digital Design",
  "Typography",
  "Color Theory",
]

const achievements = [
  {
    year: "2024",
    title: "Design Excellence Award",
    organization: "Indian Design Council",
    type: "Award",
  },
  {
    year: "2023",
    title: "Best Packaging Design",
    organization: "Rajasthan Design Week",
    type: "Award",
  },
  {
    year: "2023",
    title: "Visual Identity Showcase",
    organization: "Delhi Art Gallery",
    type: "Exhibition",
  },
  {
    year: "2022",
    title: "Emerging Designer",
    organization: "Creative India Awards",
    type: "Recognition",
  },
]

export default function AboutPageClient() {
  return (
    <>
      {/* Hero Section */}
      <section >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="max-w-4xl mx-auto">
            {/* Logo */}
            <div className="mb-8 text-center">
              <Image
                src="/logo.png"
                alt="GraphiqNest Logo"
                width={96}
                height={96}
                className="w-20 h-20 lg:w-24 lg:h-24 mx-auto object-contain"
                priority
              />
            </div>

            <SectionTitle
              eyebrow="About Me"
              title="Crafting Visual Stories That Connect"
              description="I'm a passionate graphic designer with over 5 years of experience creating compelling visual identities and memorable brand experiences."
              className="mb-8"
              align="center"
            />

            <div className="space-y-6 text-off-white/80 leading-relaxed text-center">
              <p>
                Based in Jodhpur, I specialize in transforming complex ideas into clear, impactful visual
                communications. My approach combines strategic thinking with creative execution, ensuring every
                design serves both aesthetic and functional purposes.
              </p>
              <p>
                I believe great design is invisible—it seamlessly guides users, communicates messages, and creates
                emotional connections without drawing attention to itself. This philosophy drives my work across
                brand identity, packaging design, editorial layouts, and digital experiences.
              </p>
              <p>
                When I'm not designing, you'll find me exploring local art galleries, experimenting with new
                illustration techniques, or mentoring aspiring designers in the community.
              </p>
            </div>

            {/* Download CV */}
            {/* <div className="mt-8 text-center">
              <Button asChild className="bg-neon-lime text-charcoal hover:bg-neon-lime/90 font-semibold">
                <Link href="/cv-rishabh-prajapat.pdf" download className="flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  Download CV
                </Link>
              </Button>
            </div> */}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 bg-muted-gray/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <SectionTitle
            title="Capabilities"
            description="A comprehensive skill set covering all aspects of visual design and brand development."
            align="center"
            className="mb-16"
          />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {capabilities.map((capability, index) => (
              <div
                key={capability}
                className="p-4 bg-off-white/5 hover:bg-off-white/10 rounded-2xl border border-off-white/10 hover:border-neon-lime/30 transition-all duration-300 text-center"
              >
                <span className="text-off-white font-medium">{capability}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <SectionTitle
            title="Tools & Software"
            description="Proficient in industry-standard design tools and always exploring new technologies."
            align="center"
            className="mb-16"
          />

          <div className="flex flex-wrap justify-center gap-3">
            {tools.map((tool, index) => (
              <Tag key={tool} variant="accent" className="text-sm px-4 py-2">
                {tool}
              </Tag>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-muted-gray/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <SectionTitle
            title="Awards & Recognition"
            description="Honored to be recognized by peers and industry organizations for design excellence."
            align="center"
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="p-6 bg-off-white/5 rounded-2xl border border-off-white/10 hover:border-neon-lime/30 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-neon-lime/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-neon-lime" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-neon-lime text-sm font-medium">{achievement.year}</span>
                      <span className="text-off-white/50">•</span>
                      <span className="text-off-white/70 text-sm">{achievement.type}</span>
                    </div>
                    <h3 className="font-display text-lg font-semibold text-off-white mb-1">{achievement.title}</h3>
                    <p className="text-off-white/70">{achievement.organization}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </>
  )
}
