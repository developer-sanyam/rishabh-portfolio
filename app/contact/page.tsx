import type { Metadata } from "next"
import ContactPageClient from "./ContactPageClient"

export const metadata: Metadata = {
  title: "Contact - GraphiqNest | Graphic Design Studio",
  description:
    "Get in touch with GraphiqNest for your graphic design projects. Available for brand identity, packaging design, and visual communication projects.",
  keywords: ["contact", "graphic designer", "hire designer", "project inquiry", "design consultation"],
  openGraph: {
    title: "Contact - GraphiqNest | Graphic Design Studio",
    description:
      "Get in touch with GraphiqNest for your graphic design projects. Available for brand identity, packaging design, and visual communication projects.",
    url: "https://graphiqnest.com/contact",
  },
}

export default function ContactPage() {
  return <ContactPageClient />
}
