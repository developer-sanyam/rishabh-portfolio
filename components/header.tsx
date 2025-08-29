"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { Menu, Phone, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Image from "next/image"

const navigation = [
  { name: "Work", href: "/work" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      className={`fixed top-0.5 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-charcoal/95 backdrop-blur-md border-b border-off-white/10" : "bg-transparent"
        }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 font-display text-xl lg:text-2xl font-bold text-off-white hover:text-neon-lime transition-colors duration-200 focus-ring"
          >
            <Image
              src="/logo.png"
              alt="GraphiqNest Logo"
              className="w-8 h-8 lg:w-10 lg:h-10 object-contain"
              width={40}
              height={40}
            />
            <span>GraphiqNest</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors duration-200 focus-ring relative ${pathname === item.href ? "text-neon-lime" : "text-off-white hover:text-neon-lime"
                  }`}
              >
                {item.name}
                {pathname === item.href && (
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-neon-lime"
                    layoutId="activeTab"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              asChild
              variant="outline"
              size="sm"
              className="border-off-white/30 text-off-white hover:bg-off-white hover:text-black bg-transparent"
            >
              <Link href="tel:+919529155325" className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Call
              </Link>
            </Button>
            <Button asChild size="sm" className="bg-neon-lime text-charcoal hover:bg-neon-lime/90 font-semibold">
              <Link
                href="https://wa.me/919529155325"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" className="md:hidden text-off-white hover:text-neon-lime focus-ring">
                <Menu className="w-6 h-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-80 bg-charcoal border-l border-off-white/10">
              <div className="flex flex-col h-full px-4">
                {/* Mobile Menu Header */}
                <div className="flex items-center justify-between py-4 border-b border-off-white/10">
                  <span className="font-display text-lg font-bold text-off-white">Menu</span>
                </div>

                {/* Mobile Navigation */}
                <nav className="flex-1 py-8">
                  <div className="space-y-6">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`block text-lg font-medium transition-colors duration-200 focus-ring ${pathname === item.href ? "text-neon-lime" : "text-off-white hover:text-neon-lime"
                          }`}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </nav>

                {/* Mobile CTA Buttons */}
                <div className="space-y-4 py-6 border-t border-off-white/10">
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-off-white/30 text-off-white hover:bg-off-white hover:text-black bg-transparent"
                  >
                    <Link href="tel:+919529155325" className="flex items-center justify-center gap-2">
                      <Phone className="w-4 h-4" />
                      Call Rishabh
                    </Link>
                  </Button>
                  <Button asChild className="w-full bg-neon-lime text-charcoal hover:bg-neon-lime/90 font-semibold">
                    <Link
                      href="https://wa.me/919529155325"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Chat on WhatsApp
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  )
}
