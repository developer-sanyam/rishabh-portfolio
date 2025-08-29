import type { Metadata } from "next"
import AboutPageClient from "./AboutPageClient"

export const metadata: Metadata = {
  title: "About - GraphiqNest | Graphic Design Studio",
  description:
    "Learn about GraphiqNest, a passionate graphic design studio specializing in brand identity, packaging design, and visual storytelling. Download CV and explore capabilities.",
  keywords: ["about", "graphic designer", "bio", "capabilities", "CV", "resume", "design tools"],
  openGraph: {
    title: "About - GraphiqNest | Graphic Design Studio",
    description:
      "Learn about GraphiqNest, a passionate graphic design studio specializing in brand identity, packaging design, and visual storytelling.",
    url: "https://graphiqnest.com/about",
  },
}

export default function AboutPage() {
  return <AboutPageClient />
}
