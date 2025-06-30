"use client"

import { motion } from "framer-motion"
import Calculator from "@/components/Calculator"

export default function Pricing() {
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
              Project Pricing
            </h1>
          </div>
          {/* Subheadline */}
          <div className="flex items-center justify-center min-h-0 min-w-0">
            <p className="text-gray-500 text-center max-w-[95%] mx-auto text-[clamp(1.1rem,2.5vw,1.5rem)] leading-snug">
              Transparent pricing for your project. Use our interactive calculator to get an instant estimate based on your specific requirements.
            </p>
          </div>
        </div>
      </section>
      {/* CALCULATOR SECTION */}
      <section className="w-full flex flex-col items-center justify-center gap-12 py-12 px-2 max-w-4xl mx-auto">
        <Calculator />
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.7 }} transition={{ duration: 0.8, delay: 0.4 }} className="w-full mx-auto mt-16 text-center">
          <h2 className="font-clash font-semibold text-primary mb-2 text-[clamp(1.8rem,5vw,2.8rem)]">What's Included</h2>
          <div className="grid md:grid-cols-3 gap-8 w-full mt-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2 text-[clamp(1.1rem,2.5vw,1.3rem)]">Quality Assurance</h3>
              <p className="text-gray-600 text-[clamp(1.1rem,2.5vw,1.3rem)]">Thorough testing and quality checks to ensure your project meets the highest standards.</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2 text-[clamp(1.1rem,2.5vw,1.3rem)]">Performance Optimized</h3>
              <p className="text-gray-600 text-[clamp(1.1rem,2.5vw,1.3rem)]">Built with performance in mind, ensuring fast loading times and smooth user experience.</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 109.75 9.75A9.75 9.75 0 0012 2.25z" /></svg>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2 text-[clamp(1.1rem,2.5vw,1.3rem)]">Ongoing Support</h3>
              <p className="text-gray-600 text-[clamp(1.1rem,2.5vw,1.3rem)]">Post-launch support and maintenance to keep your project running smoothly.</p>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  )
} 