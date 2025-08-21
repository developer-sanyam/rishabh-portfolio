import { HeroSection } from "@/components/hero-section"
import { SpecialtiesMarquee } from "@/components/specialties-marquee"
import { FeaturedProjects } from "@/components/featured-projects"
import { ClientLogos } from "@/components/client-logos"
import { TestimonialCarousel } from "@/components/testimonial-carousel"
import { CTASection } from "@/components/cta-section"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <div className="section-spacing">
        <SpecialtiesMarquee />
      </div>
      <div className="section-spacing">
        <FeaturedProjects />
      </div>
      <div className="section-spacing">
        <ClientLogos />
      </div>
      <div className="section-spacing">
        <TestimonialCarousel />
      </div>
      <div className="section-spacing">
        <CTASection />
      </div>
    </>
  )
}
