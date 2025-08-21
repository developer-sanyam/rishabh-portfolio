import type { Metadata } from "next"
import AboutPageClient from "./AboutPageClient"

export const metadata: Metadata = {
  title: "About - Rishabh Prajapat | Graphic Designer",
  description:
    "Learn about Rishabh Prajapat, a passionate graphic designer specializing in brand identity, packaging design, and visual storytelling. Download CV and explore capabilities.",
  keywords: ["about", "graphic designer", "bio", "capabilities", "CV", "resume", "design tools"],
  openGraph: {
    title: "About - Rishabh Prajapat | Graphic Designer",
    description:
      "Learn about Rishabh Prajapat, a passionate graphic designer specializing in brand identity, packaging design, and visual storytelling.",
    url: "https://rishabhprajapat.com/about",
  },
}

export default function AboutPage() {
  return <AboutPageClient />
}
