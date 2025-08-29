import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import TermsPageClient from "./TermsPageClient"

export const metadata: Metadata = {
    title: "Terms of Service - GraphiqNest",
    description: "Terms and conditions for using GraphiqNest's design services and website.",
    keywords: ["terms of service", "design services", "graphic design", "terms and conditions"],
    openGraph: {
        title: "Terms of Service - GraphiqNest",
        description: "Terms and conditions for using GraphiqNest's design services and website.",
        type: "website",
    },
}

export default function TermsPage() {
    return (
        <TermsPageClient />
    )
}
