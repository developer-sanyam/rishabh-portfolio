"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send, CheckCircle, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("sending")

    // Create mailto link as fallback
    const subject = `Project Inquiry from ${formData.name}`
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    const mailtoLink = `mailto:rishabh@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

    // Simulate form submission
    setTimeout(() => {
      window.location.href = mailtoLink
      setStatus("sent")
      setFormData({ name: "", email: "", message: "" })
    }, 1000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="space-y-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-off-white mb-2">
          Name *
        </label>
        <Input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="bg-muted-gray/50 border-off-white/20 text-off-white placeholder:text-off-white/50 focus:border-neon-lime focus:ring-neon-lime/20"
          placeholder="Your full name"
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-off-white mb-2">
          Email *
        </label>
        <Input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="bg-muted-gray/50 border-off-white/20 text-off-white placeholder:text-off-white/50 focus:border-neon-lime focus:ring-neon-lime/20"
          placeholder="your.email@example.com"
        />
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-off-white mb-2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          className="w-full rounded-2xl border border-off-white/20 bg-muted-gray/50 px-3 py-2 text-off-white placeholder:text-off-white/50 focus:border-neon-lime focus:ring-2 focus:ring-neon-lime/20 focus:outline-none resize-none"
          placeholder="Tell me about your project, goals, timeline, and any specific requirements..."
        />
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        disabled={status === "sending"}
        className="bg-neon-lime text-charcoal hover:bg-neon-lime/90 font-semibold w-full"
      >
        {status === "sending" ? (
          <>
            <div className="w-4 h-4 border-2 border-charcoal/30 border-t-charcoal rounded-full animate-spin mr-2" />
            Sending...
          </>
        ) : status === "sent" ? (
          <>
            <CheckCircle className="w-4 h-4 mr-2" />
            Message Sent!
          </>
        ) : (
          <>
            <Send className="w-4 h-4 mr-2" />
            Send Message
          </>
        )}
      </Button>

      {/* Status Messages */}
      {status === "sent" && (
        <motion.div
          className="flex items-center gap-2 text-neon-lime text-sm"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <CheckCircle className="w-4 h-4" />
          Your email client should open with the message. If not, please email me directly.
        </motion.div>
      )}

      {status === "error" && (
        <motion.div
          className="flex items-center gap-2 text-destructive text-sm"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <AlertCircle className="w-4 h-4" />
          Something went wrong. Please try again or contact me directly.
        </motion.div>
      )}
    </motion.form>
  )
}
