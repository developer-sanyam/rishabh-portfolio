"use client"

import { motion } from "framer-motion"
import { SectionTitle } from "@/components/section-title"
import { StaggerContainer } from "@/components/stagger-container"
import Link from "next/link"

export default function TermsPageClient() {
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <StaggerContainer>
                {/* Page Header */}
                <motion.div
                    className="text-center mb-12 lg:mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <SectionTitle
                        title="Terms of Service"
                        description="Terms and conditions for using our design services"
                        align="center"
                    />
                </motion.div>

                {/* Content */}
                <motion.div
                    className="max-w-4xl mx-auto"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <div className="prose prose-lg prose-invert max-w-none">
                        {/* Last Updated */}
                        <div className="text-sm text-off-white/60 mb-8">
                            <strong>Last updated:</strong> August 21, 2025
                        </div>

                        {/* 1. Agreement to Terms */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-off-white mb-4">1. Agreement to Terms</h2>
                            <p className="text-off-white/80 leading-relaxed mb-4">
                                By accessing and using this website or engaging our design services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                            </p>
                        </section>

                        {/* 2. Services */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-off-white mb-4">2. Services</h2>
                            <p className="text-off-white/80 leading-relaxed mb-4">
                                Rishabh Prajapat provides graphic design services including but not limited to:
                            </p>
                            <ul className="list-disc list-inside text-off-white/80 space-y-2 mb-4 ml-4">
                                <li>Brand identity design</li>
                                <li>Logo design and development</li>
                                <li>Packaging design</li>
                                <li>Editorial and publication design</li>
                                <li>Visual identity systems</li>
                                <li>Digital and print design solutions</li>
                            </ul>
                        </section>

                        {/* 3. Project Process */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-off-white mb-4">3. Project Process</h2>
                            <div className="space-y-4">
                                <div>
                                    <h3 className="text-lg font-semibold text-off-white mb-2">3.1 Project Initiation</h3>
                                    <p className="text-off-white/80 leading-relaxed">
                                        All projects begin with a consultation to understand your requirements. A detailed project brief and timeline will be provided before work commences.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-off-white mb-2">3.2 Revisions</h3>
                                    <p className="text-off-white/80 leading-relaxed">
                                        Each project includes a specified number of revision rounds. Additional revisions beyond the agreed scope may incur additional charges.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-off-white mb-2">3.3 Approval and Delivery</h3>
                                    <p className="text-off-white/80 leading-relaxed">
                                        Final files will be delivered upon project completion and full payment. Formats and specifications will be agreed upon at project initiation.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* 4. Payment Terms */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-off-white mb-4">4. Payment Terms</h2>
                            <div className="space-y-4">
                                <div>
                                    <h3 className="text-lg font-semibold text-off-white mb-2">4.1 Payment Schedule</h3>
                                    <p className="text-off-white/80 leading-relaxed">
                                        Payment terms will be specified in the project agreement. Typically, a 50% deposit is required to begin work, with the balance due upon completion.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-off-white mb-2">4.2 Late Payments</h3>
                                    <p className="text-off-white/80 leading-relaxed">
                                        Late payments may result in project delays or suspension of services. Interest may be charged on overdue amounts.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* 5. Intellectual Property */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-off-white mb-4">5. Intellectual Property</h2>
                            <div className="space-y-4">
                                <div>
                                    <h3 className="text-lg font-semibold text-off-white mb-2">5.1 Ownership</h3>
                                    <p className="text-off-white/80 leading-relaxed">
                                        Upon full payment, you will own the rights to the final approved designs. Rishabh Prajapat retains the right to display completed work in portfolios and marketing materials.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-off-white mb-2">5.2 Usage Rights</h3>
                                    <p className="text-off-white/80 leading-relaxed">
                                        You may use the designs for their intended purpose as outlined in the project brief. Any additional usage or modifications should be discussed separately.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* 6. Client Responsibilities */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-off-white mb-4">6. Client Responsibilities</h2>
                            <p className="text-off-white/80 leading-relaxed mb-4">
                                As a client, you agree to:
                            </p>
                            <ul className="list-disc list-inside text-off-white/80 space-y-2 mb-4 ml-4">
                                <li>Provide clear and accurate project requirements</li>
                                <li>Supply necessary materials, content, and assets in a timely manner</li>
                                <li>Provide constructive feedback during review periods</li>
                                <li>Make payments according to the agreed schedule</li>
                                <li>Respect the agreed timeline and revision limits</li>
                            </ul>
                        </section>

                        {/* 7. Limitation of Liability */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-off-white mb-4">7. Limitation of Liability</h2>
                            <p className="text-off-white/80 leading-relaxed mb-4">
                                Rishabh Prajapat's liability shall not exceed the total amount paid for the specific project. We are not responsible for any indirect, incidental, or consequential damages.
                            </p>
                        </section>

                        {/* 8. Cancellation */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-off-white mb-4">8. Cancellation</h2>
                            <p className="text-off-white/80 leading-relaxed mb-4">
                                Either party may terminate the project with written notice. You will be charged for work completed up to the cancellation date. Deposits are non-refundable.
                            </p>
                        </section>

                        {/* 9. Confidentiality */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-off-white mb-4">9. Confidentiality</h2>
                            <p className="text-off-white/80 leading-relaxed mb-4">
                                We respect the confidentiality of your business information and will not disclose any confidential information to third parties without your consent.
                            </p>
                        </section>

                        {/* 10. Governing Law */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-off-white mb-4">10. Governing Law</h2>
                            <p className="text-off-white/80 leading-relaxed mb-4">
                                These terms shall be governed by and construed in accordance with the laws of India. Any disputes will be resolved through appropriate legal channels.
                            </p>
                        </section>

                        {/* 11. Changes to Terms */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-off-white mb-4">11. Changes to Terms</h2>
                            <p className="text-off-white/80 leading-relaxed mb-4">
                                We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting on this website. Your continued use of our services constitutes acceptance of any changes.
                            </p>
                        </section>

                        {/* Contact Information */}
                        <section className="mb-8 p-6 bg-muted-gray/30 rounded-lg border border-off-white/10">
                            <h2 className="text-2xl font-bold text-off-white mb-4">Contact Us</h2>
                            <p className="text-off-white/80 leading-relaxed mb-4">
                                If you have any questions about these Terms of Service, please contact us:
                            </p>
                            <div className="space-y-2 text-off-white/80">
                                <p><strong>Email:</strong> contact@rishabhprajapat.com</p>
                                <p><strong>WhatsApp:</strong> <Link href="https://wa.me/919529155325" className="text-neon-lime hover:text-electric-blue transition-colors">+91 95291 55325</Link></p>
                                <p><strong>Website:</strong> <Link href="/" className="text-neon-lime hover:text-electric-blue transition-colors">rishabhprajapat.com</Link></p>
                            </div>
                        </section>
                    </div>
                </motion.div>
            </StaggerContainer>
        </div>
    )
}
