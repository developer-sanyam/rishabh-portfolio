import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import TermsPageClient from "./TermsPageClient"

export const metadata: Metadata = {
    title: "Terms of Service - Rishabh Prajapat",
    description: "Terms and conditions for using Rishabh Prajapat's design services and website.",
    keywords: ["terms of service", "design services", "graphic design", "terms and conditions"],
    openGraph: {
        title: "Terms of Service - Rishabh Prajapat",
        description: "Terms and conditions for using Rishabh Prajapat's design services and website.",
        type: "website",
    },
}

export default function TermsPage() {
    return (
        <div className="min-h-screen bg-charcoal">
            <Header />
            <main className="pt-20 lg:pt-24">
                <TermsPageClient />
            </main>
            <Footer />
        </div>
    )
}
