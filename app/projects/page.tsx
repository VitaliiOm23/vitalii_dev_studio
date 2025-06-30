"use client"

import { motion } from "framer-motion"
import ProjectCard from "@/components/ProjectCard"

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A modern e-commerce solution with advanced features, payment processing, and inventory management.',
    image: '/project1.jpg',
    technologies: ['React', 'Node.js', 'Stripe', 'MongoDB'],
    demo: 'https://demo-ecommerce.com',
    link: 'https://github.com/vitalii/ecommerce'
  },
  {
    title: 'Portfolio Website',
    description: 'A stunning portfolio website showcasing creative work with smooth animations and responsive design.',
    image: '/project2.jpg',
    technologies: ['Next.js', 'Framer Motion', 'Tailwind CSS'],
    demo: 'https://portfolio-demo.com',
    link: 'https://github.com/vitalii/portfolio'
  },
  {
    title: 'Dashboard Application',
    description: 'A comprehensive dashboard for data visualization and analytics with real-time updates.',
    image: '/project3.jpg',
    technologies: ['Vue.js', 'Firebase', 'Chart.js'],
    demo: 'https://dashboard-demo.com',
    link: 'https://github.com/vitalii/dashboard'
  },
  {
    title: 'Mobile Fitness App',
    description: 'Cross-platform mobile application for fitness tracking and workout planning.',
    image: '/project4.jpg',
    technologies: ['React Native', 'Expo', 'Firebase'],
    demo: 'https://fitness-app.com',
    link: 'https://github.com/vitalii/fitness-app'
  },
  {
    title: 'Restaurant Management',
    description: 'Complete restaurant management system with ordering, inventory, and analytics.',
    image: '/project5.jpg',
    technologies: ['Next.js', 'Prisma', 'PostgreSQL'],
    demo: 'https://restaurant-demo.com',
    link: 'https://github.com/vitalii/restaurant'
  },
  {
    title: 'Social Media Platform',
    description: 'A social networking platform with real-time messaging and content sharing.',
    image: '/project6.jpg',
    technologies: ['React', 'Socket.io', 'Redis'],
    demo: 'https://social-demo.com',
    link: 'https://github.com/vitalii/social'
  }
]

export default function Projects() {
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
              Featured Projects
            </h1>
          </div>
          {/* Subheadline */}
          <div className="flex items-center justify-center min-h-0 min-w-0">
            <p className="text-gray-500 text-center max-w-[95%] mx-auto text-[clamp(1.1rem,2.5vw,1.5rem)] leading-snug">
              A collection of projects that showcase my expertise in modern web development, from simple websites to complex applications.
            </p>
          </div>
        </div>
      </section>
      {/* PROJECTS GRID SECTION */}
      <section className="w-full flex flex-col items-center justify-center gap-12 py-12 px-2 max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full mx-auto mt-2">
          {projects.map((project, index) => (
            <motion.div key={project.title + '-' + index} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.7 }} transition={{ duration: 0.6, delay: index * 0.1 }}>
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.7 }} transition={{ duration: 0.8, delay: 0.8 }} className="text-center mt-16">
          <h2 className="font-clash font-semibold text-primary mb-2 text-[clamp(1.8rem,5vw,2.8rem)]">Ready to Start Your Project?</h2>
          <p className="text-gray-600 mb-6 w-full mx-auto text-[clamp(1.1rem,2.5vw,1.5rem)] max-w-[60ch]">Let's work together to bring your vision to life with a custom solution that perfectly fits your needs and goals.</p>
          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-primary text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-primary/90 transition-colors duration-300 text-[clamp(1.1rem,2.5vw,1.3rem)] min-w-[180px]">Get Started</motion.button>
        </motion.div>
      </section>
    </main>
  )
} 