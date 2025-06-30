"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const motivators = [
  "Your business deserves to be seen.",
  "24/7 sales, even while you sleep.",
  "First impressions are digital.",
  "Turn ideas into income.",
  "Your brand. Your story. Online.",
  "Don't get left behind.",
  "Websites build trust.",
  "Ready to grow?",
]

export default function Home() {
  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-start bg-gradient-to-br from-gray-50 via-white to-gray-100 p-0 m-0">
      {/* HERO SECTION */}
      <section className="w-full flex items-center justify-center pt-8 pb-16">
        <div
          className="w-full max-w-4xl mx-auto rounded-3xl shadow-2xl bg-white/90 grid grid-rows-4 px-0 py-0 gap-0"
          style={{ gridTemplateRows: 'minmax(0,1fr) minmax(0,1fr) minmax(0,1fr) minmax(0,1fr)', minHeight: '60vh' }}
        >
          {/* Logo */}
          <div className="flex items-end justify-center min-h-0 min-w-0">
            <Image
              src="/logo-black.png"
              alt="Vitalii Development Studio Logo"
              width={120}
              height={120}
              className="w-auto h-[clamp(2.5rem,7vw,4.5rem)] max-h-[10vh] min-h-[1.5rem]"
              priority
            />
          </div>
          {/* Headline */}
          <div className="flex items-center justify-center min-h-0 min-w-0">
            <h1 className="font-clash font-extrabold text-primary text-center text-[clamp(1.1rem,4vw,2.2rem)] leading-tight tracking-tight w-full break-words max-w-[98%] overflow-hidden">
              Custom Websites.<br />Web Apps.<br />Mobile Experiences.
            </h1>
          </div>
          {/* Subheadline */}
          <div className="flex items-center justify-center min-h-0 min-w-0">
            <p className="text-gray-500 text-center max-w-[95%] mx-auto text-[clamp(0.8rem,1.7vw,1rem)] leading-snug">
              Transforming ideas into exceptional digital experiences with clean code, modern design, and seamless functionality.
            </p>
          </div>
          {/* CTA Button */}
          <div className="flex items-start justify-center min-h-0 min-w-0">
            <button className="bg-primary text-white px-[clamp(1.1rem,3vw,1.7rem)] py-[clamp(0.5rem,1.5vh,0.8rem)] rounded-full font-semibold text-[clamp(0.95rem,1.7vw,1.05rem)] shadow-lg hover:shadow-2xl transition-all duration-300 min-w-[100px]">
              Let's Build
            </button>
          </div>
        </div>
      </section>
      {/* MOTIVATIONAL SECTION */}
      <section className="w-full flex flex-col items-center justify-center gap-8 py-12 px-2 max-w-3xl mx-auto">
        {motivators.map((text, i) => (
          <motion.div
            key={text}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            className="w-full"
          >
            <p className="font-clash font-extrabold text-center text-[clamp(1.2rem,3vw,2rem)] text-black/90 leading-tight mb-2">
              {text}
            </p>
          </motion.div>
        ))}
      </section>
    </main>
  )
}