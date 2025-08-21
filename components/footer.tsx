"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Phone, MessageCircle, Mail, ExternalLink } from "lucide-react"

const navigation = {
  main: [
    { name: "Work", href: "/work" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ],
  social: [
    { name: "Behance", href: "#", icon: ExternalLink },
    { name: "Dribbble", href: "#", icon: ExternalLink },
    { name: "Instagram", href: "#", icon: ExternalLink },
  ],
}

export function Footer() {
  return (
    <footer className="bg-muted-gray border-t border-off-white/10">
      <div className="container mx-auto p-4 section-spacing">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Brand & Contact */}
          <div className="md:col-span-2 lg:col-span-1">
            <Link
              href="/"
              className="font-display text-responsive-lg font-bold text-off-white hover:text-neon-lime transition-colors duration-200 focus-ring"
            >
              Rishabh Prajapat
            </Link>
            <p className="mt-4 text-responsive-sm text-off-white/70 leading-relaxed">
              Professional Graphic Designer crafting compelling brand identities and visual communications that drive results.
            </p>

            {/* Contact Info */}
            <div className="mt-6 space-y-3">
              <Link
                href="tel:+919529155325"
                className="flex items-center gap-3 text-off-white/70 hover:text-neon-lime transition-colors duration-200 focus-ring"
              >
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span className="text-responsive-xs">+91 95291 55325</span>
              </Link>
              <Link
                href="https://wa.me/919529155325"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-off-white/70 hover:text-neon-lime transition-colors duration-200 focus-ring"
              >
                <MessageCircle className="w-4 h-4 flex-shrink-0" />
                <span className="text-responsive-xs">WhatsApp</span>
              </Link>
              <Link
                href="mailto:contact@rishabhprajapat.com"
                className="flex items-center gap-3 text-off-white/70 hover:text-neon-lime transition-colors duration-200 focus-ring"
              >
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span className="text-responsive-xs">contact@rishabhprajapat.com</span>
              </Link>
            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-1 lg:col-span-1">
            <h3 className="font-display font-semibold text-off-white mb-4 text-responsive-sm">
              Navigation
            </h3>
            <ul className="space-y-3">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-off-white/70 hover:text-neon-lime transition-colors duration-200 focus-ring text-responsive-xs"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="md:col-span-1 lg:col-span-1">
            <h3 className="font-display font-semibold text-off-white mb-4 text-responsive-sm">
              Follow Me
            </h3>
            <ul className="space-y-3">
              {navigation.social.map((item) => {
                const Icon = item.icon
                return (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-off-white/70 hover:text-neon-lime transition-colors duration-200 focus-ring"
                    >
                      <Icon className="w-4 h-4" />
                      <span className="text-responsive-xs">{item.name}</span>
                    </Link>
                  </li>
                )
              })}
            </ul>

            {/* Download CV */}
            <div className="mt-6">
              <Link
                href="/cv-rishabh-prajapat.pdf"
                download
                className="inline-flex items-center gap-2 px-4 py-2 bg-neon-lime text-charcoal rounded-lg hover:bg-neon-lime/90 transition-colors duration-200 focus-ring font-medium text-responsive-xs"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download CV
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-off-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-off-white/50 text-responsive-xs">© 2024 Rishabh Prajapat. All rights reserved.</p>
          <div className="flex items-center gap-6 text-responsive-xs text-off-white/50">
            <Link href="/privacy" className="hover:text-neon-lime transition-colors duration-200 focus-ring">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-neon-lime transition-colors duration-200 focus-ring">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
