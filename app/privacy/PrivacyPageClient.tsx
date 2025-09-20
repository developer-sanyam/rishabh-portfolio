"use client"

import { motion } from "framer-motion"
import { SectionTitle } from "@/components/section-title"
import { StaggerContainer } from "@/components/stagger-container"

export default function PrivacyPageClient() {
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <StaggerContainer>
                {/* Page Header */}
                <motion.div
                    className="text-center mb-12 lg:mb-16"
                >
                    <SectionTitle
                        title="Privacy Policy"
                        description="How we collect, use, and protect your information"
                        align="center"
                    />
                </motion.div>

                {/* Content */}
                <motion.div
                    className="max-w-4xl mx-auto"
                >
                    <div className="glass rounded-2xl p-8 lg:p-12 space-y-8">

                        {/* Last Updated */}
                        <div className="text-center text-off-white/60 text-sm">
                            Last updated: August 21, 2025
                        </div>

                        {/* Introduction */}
                        <section className="space-y-4">
                            <h2 className="text-responsive-lg font-display font-semibold text-off-white">Introduction</h2>
                            <p className="text-responsive-sm text-off-white/80 leading-relaxed">
                                Welcome to GraphiqNest's portfolio website. This Privacy Policy explains how we collect,
                                use, disclose, and safeguard your information when you visit our website. Please read this
                                privacy policy carefully. If you do not agree with the terms of this privacy policy,
                                please do not access the site.
                            </p>
                        </section>

                        {/* Information We Collect */}
                        <section className="space-y-4">
                            <h2 className="text-responsive-lg font-display font-semibold text-off-white">Information We Collect</h2>
                            <div className="space-y-4">
                                <div>
                                    <h3 className="text-responsive-md font-semibold text-electric-blue mb-2">Personal Information</h3>
                                    <p className="text-responsive-sm text-off-white/80 leading-relaxed">
                                        We may collect personal information that you voluntarily provide to us when you:
                                    </p>
                                    <ul className="list-disc list-inside mt-2 space-y-1 text-off-white/80 ml-4">
                                        <li>Contact us through our contact form</li>
                                        <li>Send us an email</li>
                                        <li>Connect with us via WhatsApp or phone</li>
                                        <li>Request our services or portfolio information</li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-responsive-md font-semibold text-electric-blue mb-2">Automatically Collected Information</h3>
                                    <p className="text-responsive-sm text-off-white/80 leading-relaxed">
                                        When you visit our website, we may automatically collect certain information about your device,
                                        including browser type, operating system, IP address, and browsing behavior. This information
                                        helps us improve our website and provide better user experience.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* How We Use Information */}
                        <section className="space-y-4">
                            <h2 className="text-responsive-lg font-display font-semibold text-off-white">How We Use Your Information</h2>
                            <p className="text-responsive-sm text-off-white/80 leading-relaxed">
                                We may use the information we collect from you to:
                            </p>
                            <ul className="list-disc list-inside space-y-1 text-off-white/80 ml-4">
                                <li>Respond to your inquiries and fulfill your requests</li>
                                <li>Provide you with information about our services</li>
                                <li>Improve our website and user experience</li>
                                <li>Send you project updates and communications (with your consent)</li>
                                <li>Comply with legal obligations</li>
                            </ul>
                        </section>

                        {/* Information Sharing */}
                        <section className="space-y-4">
                            <h2 className="text-responsive-lg font-display font-semibold text-off-white">Information Sharing</h2>
                            <p className="text-responsive-sm text-off-white/80 leading-relaxed">
                                We do not sell, trade, or otherwise transfer your personal information to third parties without
                                your consent, except in the following circumstances:
                            </p>
                            <ul className="list-disc list-inside space-y-1 text-off-white/80 ml-4">
                                <li>When required by law or legal process</li>
                                <li>To protect our rights, property, or safety</li>
                                <li>With trusted service providers who assist in website operations (under strict confidentiality)</li>
                            </ul>
                        </section>

                        {/* Data Security */}
                        <section className="space-y-4">
                            <h2 className="text-responsive-lg font-display font-semibold text-off-white">Data Security</h2>
                            <p className="text-responsive-sm text-off-white/80 leading-relaxed">
                                We implement appropriate security measures to protect your personal information against
                                unauthorized access, alteration, disclosure, or destruction. However, no method of transmission
                                over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                            </p>
                        </section>

                        {/* Cookies */}
                        <section className="space-y-4">
                            <h2 className="text-responsive-lg font-display font-semibold text-off-white">Cookies and Tracking</h2>
                            <p className="text-responsive-sm text-off-white/80 leading-relaxed">
                                Our website may use cookies and similar tracking technologies to enhance your browsing experience.
                                You can control cookie settings through your browser preferences. Disabling cookies may affect
                                some website functionality.
                            </p>
                        </section>

                        {/* Third-Party Links */}
                        <section className="space-y-4">
                            <h2 className="text-responsive-lg font-display font-semibold text-off-white">Third-Party Links</h2>
                            <p className="text-responsive-sm text-off-white/80 leading-relaxed">
                                Our website may contain links to third-party websites (such as WhatsApp, social media platforms).
                                We are not responsible for the privacy practices of these external sites. We encourage you to
                                review their privacy policies before providing any personal information.
                            </p>
                        </section>

                        {/* Your Rights */}
                        <section className="space-y-4">
                            <h2 className="text-responsive-lg font-display font-semibold text-off-white">Your Rights</h2>
                            <p className="text-responsive-sm text-off-white/80 leading-relaxed">
                                You have the right to:
                            </p>
                            <ul className="list-disc list-inside space-y-1 text-off-white/80 ml-4">
                                <li>Access and update your personal information</li>
                                <li>Request deletion of your personal data</li>
                                <li>Opt-out of communications</li>
                                <li>File a complaint with relevant authorities</li>
                            </ul>
                        </section>

                        {/* Contact Information */}
                        <section className="space-y-4">
                            <h2 className="text-responsive-lg font-display font-semibold text-off-white">Contact Us</h2>
                            <p className="text-responsive-sm text-off-white/80 leading-relaxed">
                                If you have any questions about this Privacy Policy or our privacy practices, please contact us:
                            </p>
                            <div className="text-off-white/80 space-y-2">
                                <p>Email: rishabhprajapat565@gmail.com</p>
                                <p>
                                    WhatsApp: {" "}
                                    <a
                                        href="https://wa.me/919529155325?text=Hello%20Rishabh,%20I%20have%20a%20question%20about%20your%20Privacy%20Policy%20and%20would%20like%20to%20discuss%20data%20protection%20practices."
                                        className="text-electric-blue hover:text-neon-lime transition-colors"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        +91 95291 55325
                                    </a>
                                </p>
                            </div>
                        </section>

                        {/* Policy Updates */}
                        <section className="space-y-4">
                            <h2 className="text-responsive-lg font-display font-semibold text-off-white">Policy Updates</h2>
                            <p className="text-responsive-sm text-off-white/80 leading-relaxed">
                                We may update this Privacy Policy from time to time. Any changes will be posted on this page
                                with an updated "Last updated" date. We encourage you to review this policy periodically.
                            </p>
                        </section>

                    </div>
                </motion.div>
            </StaggerContainer>
        </div>
    )
}
