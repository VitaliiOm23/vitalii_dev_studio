'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface ProjectCardProps {
  title: string
  description: string
  image: string
  technologies: string[]
  link?: string
  demo?: string
}

export default function ProjectCard({ 
  title, 
  description, 
  image, 
  technologies, 
  link, 
  demo 
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -10 }}
      className="group relative bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer"
    >
      {/* Project Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 opacity-80" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white text-2xl font-clash font-semibold">{title}</span>
        </div>
        
        {/* Hover Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 bg-black/80 flex items-center justify-center space-x-4"
        >
          {demo && (
            <motion.a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="px-4 py-2 bg-white text-primary rounded-lg font-medium flex items-center gap-2"
            >
              <img src="/logo_transparent_shadow.png" alt="Logo" className="w-5 h-5" />
              Live Demo
            </motion.a>
          )}
          {link && (
            <motion.a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="px-4 py-2 bg-primary text-white rounded-lg font-medium flex items-center gap-2"
            >
              <img src="/logo_transparent_shadow.png" alt="Logo" className="w-5 h-5 invert" />
              View Code
            </motion.a>
          )}
        </motion.div>
      </div>

      {/* Project Info */}
      <div className="p-6">
        <h3 className="text-xl font-clash font-semibold text-primary mb-2">
          {title}
        </h3>
        <p className="text-gray-600 mb-4 leading-relaxed">
          {description}
        </p>
        
        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <motion.span
              key={tech + '-' + index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full font-medium"
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  )
} 