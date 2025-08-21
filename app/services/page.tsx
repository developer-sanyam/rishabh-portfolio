import type { Metadata } from "next"
import ServicesClientPage from "./ServicesClientPage"

export const metadata: Metadata = {
  title: "Services - Rishabh Prajapat | Graphic Designer",
  description:
    "Professional graphic design services including brand identity, packaging design, editorial design, social media content, illustration, and art direction.",
  keywords: ["graphic design services", "brand identity", "packaging design", "editorial design", "illustration"],
  openGraph: {
    title: "Services - Rishabh Prajapat | Graphic Designer",
    description:
      "Professional graphic design services including brand identity, packaging design, editorial design, social media content, illustration, and art direction.",
    url: "https://rishabhprajapat.com/services",
  },
}

export default function ServicesPage() {
  return <ServicesClientPage />
}
