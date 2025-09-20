import { MessageCircle, Phone, Mail, MapPin, Clock } from "lucide-react"
import { SectionTitle } from "@/components/section-title"
import { ContactForm } from "@/components/contact-form"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

const contactMethods = [
  {
    icon: MessageCircle,
    title: "WhatsApp",
    description: "Quick response, perfect for project discussions",
    value: "+91 95291 55325",
    action: "Chat Now",
    href: "https://wa.me/919529155325",
    primary: true,
  },
  {
    icon: Phone,
    title: "Phone Call",
    description: "Direct conversation for detailed discussions",
    value: "+91 95291 55325",
    action: "Call Now",
    href: "tel:+919529155325",
    primary: false,
  },
  {
    icon: Mail,
    title: "Email",
    description: "Formal inquiries and detailed project briefs",
    value: "rishabhprajapat565@gmail.com",
    action: "Send Email",
    href: "mailto:rishabhprajapat565@gmail.com",
    primary: false,
  },
]

const socialLinks = [
  {
    name: "Behance",
    href: "#",
    description: "View my portfolio and case studies",
  },
  {
    name: "Dribbble",
    href: "#",
    description: "Daily design inspiration and shots",
  },
  {
    name: "Instagram",
    href: "#",
    description: "Behind-the-scenes and design process",
  },
  {
    name: "LinkedIn",
    href: "#",
    description: "Professional network and updates",
  },
]

export default function ContactPageClient() {
  return (
    <>
      {/* Hero Section */}
      <section >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {/* Logo */}
          <div className="mb-12 text-center">
            <Image
              src="/logo.png"
              alt="GraphiqNest Logo"
              width={96}
              height={96}
              className="w-24 h-24 mx-auto object-contain"
              priority
            />
          </div>

          <SectionTitle
            eyebrow="Get In Touch"
            title="Let's Create Something Amazing Together"
            description="Ready to start your next design project? I'd love to hear about your vision and explore how we can bring it to life."
            align="center"
            className="mb-20"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Contact Methods */}
            <div className="space-y-8">
              <h2 className="font-display text-2xl font-bold text-off-white mb-8">Contact Methods</h2>

              {contactMethods.map((method, index) => (
                <div
                  key={method.title}
                  className={`p-6 rounded-2xl border transition-all duration-300 ${method.primary
                    ? "bg-neon-lime/10 border-neon-lime/30 hover:border-neon-lime/50"
                    : "bg-muted-gray/30 border-off-white/10 hover:border-off-white/20"
                    }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center ${method.primary ? "bg-neon-lime/20" : "bg-off-white/10"
                        }`}
                    >
                      <method.icon className={`w-6 h-6 ${method.primary ? "text-neon-lime" : "text-off-white/70"}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-lg font-semibold text-off-white mb-1">{method.title}</h3>
                      <p className="text-off-white/70 text-sm mb-2">{method.description}</p>
                      <p className="text-off-white font-medium mb-4">{method.value}</p>
                      <Button
                        asChild
                        size="sm"
                        className={
                          method.primary
                            ? "bg-neon-lime text-charcoal hover:bg-neon-lime/90 font-semibold"
                            : "border-off-white/30 text-off-white hover:bg-off-white hover:!text-black bg-transparent"
                        }
                      >
                        <Link
                          href={method.primary ? "https://wa.me/919529155325?text=Hello%20Rishabh,%20I%20found%20your%20contact%20information%20on%20your%20website%20and%20would%20like%20to%20discuss%20a%20potential%20design%20project." : method.href}
                          target={method.href.startsWith("http") ? "_blank" : undefined}
                          rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        >
                          {method.action}
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}

              {/* Availability */}
              <div className="p-6 bg-muted-gray/30 rounded-2xl border border-off-white/10">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-5 h-5 text-electric-blue" />
                  <h3 className="font-display text-lg font-semibold text-off-white">Availability</h3>
                </div>
                <div className="space-y-2 text-off-white/70">
                  <p>Monday - Friday: 9:00 AM - 7:00 PM IST</p>
                  <p>Saturday: 10:00 AM - 4:00 PM IST</p>
                  <p>Sunday: By appointment only</p>
                </div>
                <div className="mt-4 p-3 bg-neon-lime/10 rounded-xl">
                  <p className="text-neon-lime text-sm">Currently accepting new projects for Q2 2024</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="font-display text-2xl font-bold text-off-white mb-8">Send a Message</h2>
              <div className="p-8 bg-muted-gray/30 rounded-2xl border border-off-white/10">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-20 bg-muted-gray/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-16 h-16 bg-electric-blue/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <MapPin className="w-8 h-8 text-electric-blue" />
            </div>
            <h2 className="font-display text-2xl font-bold text-off-white mb-4">Based in Jodhpur</h2>
            <p className="text-off-white/70 leading-relaxed">
              Located in the Blue City of Rajasthan, I work with clients locally and internationally.
              Available for remote collaboration and on-site meetings within Jodhpur.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
