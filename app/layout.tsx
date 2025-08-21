import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk, Inter } from "next/font/google"
import "./globals.css"
import { PageTransition } from "@/components/page-transition"
import { SmoothScroll } from "@/components/smooth-scroll"
import { ScrollProgress } from "@/components/scroll-progress"
import { CursorFollower } from "@/components/cursor-follower"
import { AccessibilityEnhancements } from "@/components/accessibility-enhancements"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { WhatsAppFloatingButton } from "@/components/whatsapp-floating-button"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
})

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: {
    default: "Rishabh Prajapat - Professional Graphic Designer",
    template: "%s | Rishabh Prajapat - Graphic Designer",
  },
  description:
    "Professional Graphic Designer crafting compelling brand identities, packaging designs, and visual communications. Specializing in modern design solutions that drive results.",
  keywords: [
    "graphic design",
    "brand identity",
    "visual identity",
    "packaging design",
    "editorial design",
    "illustration",
    "logo design",
    "creative director",
    "design consultant",
  ],
  authors: [{ name: "Rishabh Prajapat", url: "https://rishabhprajapat.com" }],
  creator: "Rishabh Prajapat",
  publisher: "Rishabh Prajapat",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://rishabhprajapat.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rishabhprajapat.com",
    siteName: "Rishabh Prajapat - Graphic Designer",
    title: "Rishabh Prajapat - Professional Graphic Designer",
    description: "Professional Graphic Designer crafting compelling brand identities & visual communications",
    images: [
      {
        url: "/graphic-designer-portrait.png",
        width: 1200,
        height: 630,
        alt: "Rishabh Prajapat - Graphic Designer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rishabh Prajapat - Professional Graphic Designer",
    description: "Professional Graphic Designer crafting compelling brand identities & visual communications",
    images: ["/graphic-designer-portrait.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`} suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
      </head>
      <body className="bg-charcoal text-off-white font-body antialiased">
        <ScrollProgress />
        <CursorFollower />
        <SmoothScroll />
        <AccessibilityEnhancements />
        <div className="min-h-screen bg-charcoal">
          <Header />
          <PageTransition>
            <div id="main-content" className="pt-16 lg:pt-20">
              <main className="relative">
                {children}
              </main>
            </div>
          </PageTransition>
          <Footer />
        </div>
        <WhatsAppFloatingButton />
      </body>
    </html>
  )
}
