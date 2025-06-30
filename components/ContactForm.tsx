'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

interface FormData {
  name: string
  email: string
  projectType: string
  message: string
}

const projectTypes = [
  'Website',
  'Web Application',
  'Mobile App',
  'E-commerce',
  'Custom Solution',
]

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    projectType: '',
    message: '',
  })
  const [focusedField, setFocusedField] = useState<string | null>(null)

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  return (
    <div className="max-w-2xl mx-auto">
      <motion.form
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        onSubmit={handleSubmit}
        className="space-y-6"
      >
        {/* Name Field */}
        <div className="relative">
          <motion.input
            type="text"
            id="name"
            value={formData.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
            onFocus={() => setFocusedField('name')}
            onBlur={() => setFocusedField(null)}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-accent focus:outline-none transition-colors duration-300 bg-transparent"
            required
          />
          <motion.label
            htmlFor="name"
            animate={{
              y: focusedField === 'name' || formData.name ? -40 : 0,
              scale: focusedField === 'name' || formData.name ? 0.85 : 1,
            }}
            className="absolute left-4 top-3 text-gray-500 pointer-events-none origin-left"
          >
            Your Name
          </motion.label>
        </div>

        {/* Email Field */}
        <div className="relative">
          <motion.input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            onFocus={() => setFocusedField('email')}
            onBlur={() => setFocusedField(null)}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-accent focus:outline-none transition-colors duration-300 bg-transparent"
            required
          />
          <motion.label
            htmlFor="email"
            animate={{
              y: focusedField === 'email' || formData.email ? -40 : 0,
              scale: focusedField === 'email' || formData.email ? 0.85 : 1,
            }}
            className="absolute left-4 top-3 text-gray-500 pointer-events-none origin-left"
          >
            Email Address
          </motion.label>
        </div>

        {/* Project Type Field */}
        <div className="relative">
          <motion.select
            id="projectType"
            value={formData.projectType}
            onChange={(e) => handleInputChange('projectType', e.target.value)}
            onFocus={() => setFocusedField('projectType')}
            onBlur={() => setFocusedField(null)}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-accent focus:outline-none transition-colors duration-300 bg-transparent appearance-none"
            required
          >
            <option value="">Select Project Type</option>
            {projectTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </motion.select>
          <motion.label
            htmlFor="projectType"
            animate={{
              y: focusedField === 'projectType' || formData.projectType ? -40 : 0,
              scale: focusedField === 'projectType' || formData.projectType ? 0.85 : 1,
            }}
            className="absolute left-4 top-3 text-gray-500 pointer-events-none origin-left"
          >
            Project Type
          </motion.label>
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        {/* Message Field */}
        <div className="relative">
          <motion.textarea
            id="message"
            value={formData.message}
            onChange={(e) => handleInputChange('message', e.target.value)}
            onFocus={() => setFocusedField('message')}
            onBlur={() => setFocusedField(null)}
            rows={6}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-accent focus:outline-none transition-colors duration-300 bg-transparent resize-none"
            required
          />
          <motion.label
            htmlFor="message"
            animate={{
              y: focusedField === 'message' || formData.message ? -40 : 0,
              scale: focusedField === 'message' || formData.message ? 0.85 : 1,
            }}
            className="absolute left-4 top-3 text-gray-500 pointer-events-none origin-left"
          >
            Tell us about your project
          </motion.label>
        </div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-primary text-white py-4 px-8 rounded-lg font-semibold text-lg hover:bg-primary/90 transition-colors duration-300"
        >
          Send Message
        </motion.button>
      </motion.form>
    </div>
  )
} 