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
    default: "GraphiqNest - Professional Graphic Design Studio",
    template: "%s | GraphiqNest - Graphic Design Studio",
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
  authors: [{ name: "GraphiqNest", url: "https://graphiqnest.com" }],
  creator: "GraphiqNest",
  publisher: "GraphiqNest",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://graphiqnest.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://graphiqnest.com",
    siteName: "GraphiqNest - Graphic Design Studio",
    title: "GraphiqNest - Professional Graphic Design Studio",
    description: "Professional Graphic Designer crafting compelling brand identities & visual communications",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "GraphiqNest - Graphic Design Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GraphiqNest - Professional Graphic Design Studio",
    description: "Professional Graphic Design Studio crafting compelling brand identities & visual communications",
    images: ["/logo.png"],
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
        <link rel="icon" href="/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo.png" />
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
