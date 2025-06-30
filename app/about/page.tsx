"use client"

import { motion } from "framer-motion"

const techStack = ['React', 'Next.js', 'Expo', 'Firebase', 'TypeScript', 'Tailwind CSS']

export default function About() {
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
              About Vitalii
            </h1>
          </div>
          {/* Subheadline */}
          <div className="flex items-center justify-center min-h-0 min-w-0">
            <p className="text-gray-500 text-center max-w-[95%] mx-auto text-[clamp(1.1rem,2.5vw,1.5rem)] leading-snug">
              A passionate developer crafting exceptional digital experiences with modern technologies and clean design principles.
            </p>
          </div>
        </div>
      </section>
      {/* STORY & TECH STACK SECTION */}
      <section className="w-full flex flex-col md:flex-row items-center justify-center gap-12 py-12 px-2 max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.7 }} transition={{ duration: 0.6 }} className="w-full md:w-1/2">
          <h2 className="font-clash font-semibold text-primary mb-4 text-[clamp(1.5rem,5vw,2.5rem)]">The Story</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed text-[clamp(1.1rem,2.5vw,1.5rem)]">
            <p>With over 5 years of experience in web development, I've helped businesses and startups bring their digital visions to life. From simple landing pages to complex web applications, every project is approached with the same dedication to quality and user experience.</p>
            <p>My journey began with a curiosity about how things work on the web, which evolved into a passion for creating seamless, intuitive digital experiences that users love to interact with.</p>
            <p>Today, I specialize in modern web technologies, focusing on performance, accessibility, and maintainable code that scales with your business.</p>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.7 }} transition={{ duration: 0.6, delay: 0.2 }} className="w-full md:w-1/2 flex flex-col items-center">
          <h3 className="font-clash font-semibold text-primary mb-4 text-[clamp(1.5rem,5vw,2.5rem)]">Tech Stack</h3>
          <div className="flex flex-wrap gap-3 justify-center mb-8">
            {techStack.map((tech, index) => (
              <motion.div key={tech + '-' + index} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }} className="bg-gray-50 px-6 py-3 rounded-full text-center font-medium text-primary hover:bg-accent hover:text-white transition-colors duration-300 text-[clamp(1.1rem,2.5vw,1.2rem)] shadow-sm min-w-[100px]">{tech}</motion.div>
            ))}
          </div>
          <h3 className="font-clash font-semibold text-primary mb-4 text-[clamp(1.5rem,5vw,2.5rem)]">Philosophy</h3>
          <div className="space-y-2 w-full max-w-xs mx-auto">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.6 }} className="flex items-center space-x-3"><div className="w-3 h-3 bg-accent rounded-full"></div><span className="text-lg font-semibold text-primary">Clean.</span></motion.div>
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.7 }} className="flex items-center space-x-3"><div className="w-3 h-3 bg-accent rounded-full"></div><span className="text-lg font-semibold text-primary">Fast.</span></motion.div>
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.8 }} className="flex items-center space-x-3"><div className="w-3 h-3 bg-accent rounded-full"></div><span className="text-lg font-semibold text-primary">Tailored.</span></motion.div>
          </div>
          <p className="text-gray-600 mt-4 leading-relaxed text-[clamp(1.1rem,2.5vw,1.2rem)] text-center max-w-[60ch]">Every project is built with clean, maintainable code, optimized for speed, and tailored to your specific needs and goals.</p>
        </motion.div>
      </section>
    </main>
  )
} 