"use client"
import { Palette, Package, BookOpen, Share2, Brush, Eye, Clock, CheckCircle, MessageCircle } from "lucide-react"
import { SectionTitle } from "@/components/section-title"
import { Button } from "@/components/ui/button"
import { CTASection } from "@/components/cta-section"
import Link from "next/link"

const services = [
  {
    icon: Palette,
    title: "Brand Identity",
    description: "Complete visual identity systems that capture your brand's essence and connect with your audience.",
    deliverables: [
      "Logo design & variations",
      "Color palette & typography",
      "Brand guidelines",
      "Business card design",
      "Letterhead & stationery",
      "Brand application examples",
    ],
    timeline: "2-4 Days",
  },
  {
    icon: Package,
    title: "Packaging Design",
    description: "Eye-catching packaging that stands out on shelves and creates memorable unboxing experiences.",
    deliverables: [
      "Package structure design",
      "Label & wrapper design",
      "Product photography direction",
      "Dieline creation",
      "Print-ready files",
    ],
    timeline: "3-5 Days",
  },
  {
    icon: BookOpen,
    title: "Editorial Design",
    description: "Compelling layouts for magazines, books, reports, and digital publications that enhance readability.",
    deliverables: [
      "Layout design & templates",
      "Typography system",
      "Image treatment guidelines",
      "Cover design",
      "Print & digital formats",
      "Style guide",
    ],
    timeline: "2-6 Days",
  },
  {
    icon: Share2,
    title: "Social Content",
    description: "Engaging social media graphics and campaigns that boost your online presence and engagement.",
    deliverables: [
      "Social media templates",
      "Post graphics & stories",
      "Campaign visuals",
      "Brand-consistent layouts",
      "Multiple format exports",
      "Content calendar design",
    ],
    timeline: "1-3 Days",
  },
  {
    icon: Eye,
    title: "Art Direction",
    description: "Strategic visual guidance for campaigns, photoshoots, and multi-platform brand experiences.",
    deliverables: [
      "Creative concept development",
      "Visual style guidelines",
      "Photoshoot direction",
      "Campaign oversight",
      "Team collaboration",
      "Quality assurance",
    ],
    timeline: "2-8 Days",
  },
]

function ServiceCard({ service, index }: { service: (typeof services)[0]; index: number }) {
  return (
    <div className="p-8 bg-muted-gray/30 rounded-2xl border border-off-white/10 hover:border-neon-lime/30 transition-all duration-300 h-full flex flex-col">
      {/* Icon & Title */}
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 bg-neon-lime/10 rounded-full flex items-center justify-center">
          <service.icon className="w-6 h-6 text-neon-lime" />
        </div>
        <h3 className="font-display text-xl font-bold text-off-white">{service.title}</h3>
      </div>

      {/* Description */}
      <p className="text-off-white/80 leading-relaxed mb-6">{service.description}</p>

      {/* Deliverables */}
      <div className="mb-6 flex-1">
        <h4 className="font-display font-semibold text-off-white mb-4">What's Included:</h4>
        <ul className="space-y-2">
          {service.deliverables.map((deliverable, idx) => (
            <li key={idx} className="flex items-start gap-3 text-off-white/70">
              <CheckCircle className="w-4 h-4 text-neon-lime mt-0.5 flex-shrink-0" />
              <span className="text-sm">{deliverable}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Timeline & Pricing */}
      <div className="space-y-4 mb-6">
        <div className="flex items-center gap-3 text-off-white/70">
          <Clock className="w-4 h-4 text-electric-blue" />
          <span className="text-sm">{service.timeline}</span>
        </div>
      </div>

      {/* CTA */}
      <Button asChild className="bg-neon-lime text-charcoal hover:bg-neon-lime/90 font-semibold w-full">
        <Link
          href={`https://wa.me/919529155325?text=Hello, I am interested in your ${service.title} services. I would like to discuss starting a new project and would appreciate information regarding the pricing and next steps.`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2"
        >
          <MessageCircle className="w-4 h-4" />
          Start Project
        </Link>
      </Button>
    </div>
  )
}

export default function ServicesClientPage() {
  return (
    <>
      {/* Hero Section */}
      <section >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <SectionTitle
            eyebrow="Services"
            title="Design Solutions for Every Need"
            description="From brand identity to packaging design, I offer comprehensive graphic design services that help businesses communicate effectively and stand out in their markets."
            align="center"
            className="mb-20"
          />

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={service.title} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted-gray/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <SectionTitle
            title="My Design Process"
            description="A structured approach that ensures every project delivers exceptional results."
            align="center"
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description:
                  "Understanding your goals, audience, and project requirements through detailed consultation.",
              },
              {
                step: "02",
                title: "Strategy",
                description: "Developing creative concepts and strategic direction based on research and insights.",
              },
              {
                step: "03",
                title: "Design",
                description: "Creating initial concepts and iterating based on feedback to perfect the solution.",
              },
              {
                step: "04",
                title: "Delivery",
                description:
                  "Finalizing designs and providing all necessary files and documentation for implementation.",
              },
            ].map((phase, index) => (
              <div key={phase.step} className="text-center">
                <div className="w-16 h-16 bg-neon-lime/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-display text-lg font-bold text-neon-lime">{phase.step}</span>
                </div>
                <h3 className="font-display text-lg font-semibold text-off-white mb-3">{phase.title}</h3>
                <p className="text-off-white/70 text-sm leading-relaxed">{phase.description}</p>
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
