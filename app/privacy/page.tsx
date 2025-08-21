import type { Metadata } from "next"
import PrivacyPageClient from "./PrivacyPageClient"

export const metadata: Metadata = {
    title: "Privacy Policy - Rishabh Prajapat | Graphic Designer",
    description:
        "Privacy Policy for Rishabh Prajapat's portfolio website. Learn how we collect, use, and protect your personal information.",
    keywords: ["privacy policy", "data protection", "personal information", "cookies", "GDPR"],
    openGraph: {
        title: "Privacy Policy - Rishabh Prajapat | Graphic Designer",
        description:
            "Privacy Policy for Rishabh Prajapat's portfolio website. Learn how we collect, use, and protect your personal information.",
        url: "https://rishabhprajapat.com/privacy",
    },
    robots: {
        index: true,
        follow: true,
    },
}

export default function PrivacyPage() {
    return <PrivacyPageClient />
}
