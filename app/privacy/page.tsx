import type { Metadata } from "next"
import PrivacyPageClient from "./PrivacyPageClient"

export const metadata: Metadata = {
    title: "Privacy Policy - GraphiqNest | Graphic Design Studio",
    description:
        "Privacy Policy for GraphiqNest's portfolio website. Learn how we collect, use, and protect your personal information.",
    keywords: ["privacy policy", "data protection", "personal information", "cookies", "GDPR"],
    openGraph: {
        title: "Privacy Policy - GraphiqNest | Graphic Design Studio",
        description:
            "Privacy Policy for GraphiqNest's portfolio website. Learn how we collect, use, and protect your personal information.",
        url: "https://graphiqnest.com/privacy",
    },
    robots: {
        index: true,
        follow: true,
    },
}

export default function PrivacyPage() {
    return <PrivacyPageClient />
}
