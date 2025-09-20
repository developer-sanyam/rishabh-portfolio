import { ArrowRight, Eye, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal to-muted-gray" />
      <div className="absolute top-1/4 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-neon-lime/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-56 h-56 sm:w-80 sm:h-80 bg-electric-blue/5 rounded-full blur-3xl" />

      <div className="container mx-auto py-4 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Logo */}
          <div className="mb-8 sm:mb-12">
            <Image
              src="/logo.png"
              alt="GraphiqNest Logo"
              width={128}
              height={128}
              className="w-24 h-24 sm:w-32 sm:h-32 mx-auto object-contain"
              priority
            />
          </div>

          {/* Main Headline */}
          <h1 className="font-display text-responsive-3xl font-bold text-off-white leading-tight mb-6 sm:mb-8">
            Graphic Designer
            <br />
            <span className="text-neon-lime">
              crafting striking
            </span>
            <br />
            identities & visuals
          </h1>

          {/* Subheadline */}
          <p className="text-responsive-md text-off-white/80 leading-relaxed mb-8 sm:mb-12 max-w-3xl mx-auto">
            Specializing in brand identity, packaging design, editorial layouts, and visual storytelling that connects
            with audiences and drives results.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-12 sm:mb-16">
            <div className="w-full sm:w-auto">
              <Button
                asChild
                size="lg"
                className="bg-neon-lime text-charcoal hover:bg-neon-lime/90 font-semibold text-base btn-mobile w-full sm:w-auto"
              >
                <Link href="/work" className="flex items-center justify-center gap-2">
                  <Eye className="w-5 h-5" />
                  View Work
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
            <div className="w-full sm:w-auto">
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-electric-blue text-electric-blue hover:bg-electric-blue hover:!text-black bg-transparent text-base btn-mobile w-full sm:w-auto"
              >
                <Link
                  href="https://wa.me/919529155325?text=Hello%20Rishabh,%20I%20just%20visited%20your%20portfolio%20website%20and%20I'm%20impressed%20with%20your%20work.%20I%20would%20like%20to%20discuss%20a%20potential%20design%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chat on WhatsApp
                </Link>
              </Button>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="flex flex-col items-center gap-2 text-off-white/50">
            <span className="text-sm font-medium">Scroll to explore</span>
            <div className="w-px h-8 sm:h-12 bg-gradient-to-b from-off-white/50 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}
