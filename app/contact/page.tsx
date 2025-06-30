"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import ContactForm from "@/components/ContactForm"

const faqs = [
  {
    question: "What's your development process?",
    answer: "I follow a structured approach: Discovery & Planning → Design & Prototyping → Development → Testing & Quality Assurance → Deployment & Launch. Each phase includes regular communication and feedback loops to ensure your vision is perfectly executed."
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary based on complexity. A simple website takes 2-4 weeks, while complex web applications can take 6-12 weeks. I'll provide a detailed timeline during our initial consultation based on your specific requirements."
  },
  {
    question: "Do you provide ongoing support after launch?",
    answer: "Yes! I offer post-launch support packages that include bug fixes, updates, maintenance, and feature additions. This ensures your project continues to perform optimally and evolves with your business needs."
  },
  {
    question: "What technologies do you specialize in?",
    answer: "I specialize in modern web technologies including React, Next.js, TypeScript, Node.js, and mobile development with React Native and Expo. I also work with various databases, APIs, and cloud services to create comprehensive solutions."
  },
  {
    question: "Can you help with existing projects?",
    answer: "Absolutely! I can help improve, maintain, or add features to existing projects. I'll review your current codebase and provide recommendations for optimization, security updates, and new functionality."
  }
]

export default function Contact() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const toggleFaq = (index: number) => setOpenFaq(openFaq === index ? null : index)
  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-start bg-gradient-to-br from-gray-50 via-white to-gray-100 p-0 m-0">
      {/* HERO SECTION */}
      <section className="w-full flex items-center justify-center pt-8 pb-16">
        <div
          className="w-full max-w-4xl mx-auto rounded-3xl shadow-2xl bg-white/90 grid grid-rows-2 px-0 py-0 gap-0"
          style={{ gridTemplateRows: 'minmax(0,1fr) minmax(0,2fr)', minHeight: '40vh' }}
        >
          {/* Headline */}
          <div className="flex items-center justify-center min-h-0 min-w-0">
            <h1 className="font-clash font-extrabold text-primary text-center text-[clamp(2.5rem,8vw,5rem)] leading-tight tracking-tight w-full break-words max-w-[98%] overflow-hidden">
              Let's Work Together
            </h1>
          </div>
          {/* Subheadline */}
          <div className="flex items-center justify-center min-h-0 min-w-0">
            <p className="text-gray-500 text-center max-w-[95%] mx-auto text-[clamp(1.1rem,2.5vw,1.5rem)] leading-snug">
              Ready to bring your vision to life? Get in touch and let's discuss your project. I'm here to help you create something amazing.
            </p>
          </div>
        </div>
      </section>
      {/* CONTACT & FAQ SECTION */}
      <section className="w-full flex flex-col items-center justify-center gap-16 py-12 px-2 max-w-5xl mx-auto">
        <div className="w-full mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.7 }} transition={{ duration: 0.8, delay: 0.2 }} className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center">
              <h2 className="font-clash font-semibold text-primary mb-4 text-[clamp(1.5rem,5vw,2.5rem)]">Start Your Project</h2>
              <ContactForm />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.7 }} transition={{ duration: 0.8, delay: 0.4 }} className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="font-clash font-semibold text-primary mb-4 text-[clamp(1.5rem,5vw,2.5rem)]">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <motion.div key={faq.question + '-' + index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.7 }} transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }} className="bg-gray-50 rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                    <button onClick={() => toggleFaq(index)} className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-100 transition-colors duration-300">
                      <span className="font-semibold text-primary text-[clamp(1.1rem,2.5vw,1.3rem)]">{faq.question}</span>
                      <motion.svg animate={{ rotate: openFaq === index ? 180 : 0 }} transition={{ duration: 0.3 }} className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </motion.svg>
                    </button>
                    {openFaq === index && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                        <div className="px-8 pb-6 text-gray-600 leading-relaxed text-[clamp(1.1rem,2.5vw,1.3rem)]">{faq.answer}</div>
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
        {/* Friendly closing section */}
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.7 }} transition={{ duration: 0.8, delay: 1.2 }} className="text-center mt-16 w-full">
          <div className="inline-block bg-white/80 rounded-2xl shadow-lg px-8 py-8">
            <h2 className="font-clash font-semibold text-primary mb-2 text-[clamp(1.8rem,5vw,2.8rem)]">Let's Connect!</h2>
            <p className="text-gray-600 mb-6 w-full mx-auto text-[clamp(1.1rem,2.5vw,1.5rem)] max-w-[60ch]">Prefer email or social? Reach out anytime — I'm always happy to chat about your ideas, answer questions, or just say hello.</p>
            <div className="flex flex-wrap justify-center gap-8 mt-4">
              <a href="mailto:hello@vitaliidevstudio.com" className="flex items-center space-x-2 text-gray-600 hover:text-accent transition-colors duration-300 text-lg font-medium"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg><span>hello@vitaliidevstudio.com</span></a>
              <a href="https://github.com/vitalii" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-600 hover:text-accent transition-colors duration-300 text-lg font-medium"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg><span>GitHub</span></a>
              <a href="https://linkedin.com/in/vitalii" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-600 hover:text-accent transition-colors duration-300 text-lg font-medium"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg><span>LinkedIn</span></a>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  )
} 