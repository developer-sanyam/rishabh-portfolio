import { MessageCircle, Phone, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-muted-gray to-charcoal">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main CTA Content */}
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-off-white mb-6">
            Ready to bring your
            <br />
            <span className="text-neon-lime">vision to life?</span>
          </h2>

          <p className="text-xl text-off-white/80 leading-relaxed mb-12 max-w-2xl mx-auto">
            Let's discuss your project and explore how we can create something extraordinary together. Get in touch
            today.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <Button
              asChild
              size="lg"
              className="bg-neon-lime text-charcoal hover:bg-neon-lime/90 font-semibold text-base px-8 py-4"
            >
              <Link
                href="https://wa.me/919529155325?text=Hello%20Rishabh,%20I%20am%20ready%20to%20start%20my%20design%20project%20and%20would%20like%20to%20discuss%20how%20we%20can%20bring%20my%20vision%20to%20life%20together."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-off-white/30 text-off-white hover:bg-off-white hover:!text-black bg-transparent text-base px-8 py-4"
            >
              <Link href="tel:+919529155325" className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Call Rishabh
              </Link>
            </Button>
          </div>

          {/* Contact Info */}
          <div className="mt-12 pt-8 border-t border-off-white/10">
            <p className="text-off-white/60 text-sm mb-2">Prefer email?</p>
            <Link
              href="mailto:rishabhprajapat565@gmail.com"
              className="text-electric-blue hover:text-neon-lime focus-ring"
            >
              rishabhprajapat565@gmail.com
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
