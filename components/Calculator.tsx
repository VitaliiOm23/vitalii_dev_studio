'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

interface PricingOption {
  id: string
  name: string
  basePrice: number
  description: string
}

interface Feature {
  id: string
  name: string
  price: number
  description: string
}

const projectTypes: PricingOption[] = [
  { id: 'website', name: 'Website', basePrice: 1500, description: 'Single or multi-page website' },
  { id: 'webapp', name: 'Web Application', basePrice: 3500, description: 'Full-stack web application' },
  { id: 'mobile', name: 'Mobile App', basePrice: 5000, description: 'Cross-platform mobile application' },
]

const features: Feature[] = [
  { id: 'auth', name: 'Authentication', price: 500, description: 'User login & registration' },
  { id: 'cms', name: 'CMS Integration', price: 800, description: 'Content management system' },
  { id: 'payments', name: 'Payment Processing', price: 600, description: 'Stripe/PayPal integration' },
  { id: 'animations', name: 'Advanced Animations', price: 400, description: 'Framer Motion animations' },
  { id: 'api', name: 'Custom API', price: 1000, description: 'Backend API development' },
  { id: 'deployment', name: 'Deployment', price: 300, description: 'Production deployment' },
]

const timelineMultipliers = {
  1: 1.5,
  2: 1.3,
  3: 1.1,
  4: 1.0,
  5: 0.9,
  6: 0.8,
}

export default function Calculator() {
  const [selectedType, setSelectedType] = useState('website')
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([])
  const [timeline, setTimeline] = useState(4)

  const basePrice = projectTypes.find(t => t.id === selectedType)?.basePrice || 0
  const featurePrice = selectedFeatures.reduce((total, featureId) => {
    const feature = features.find(f => f.id === featureId)
    return total + (feature?.price || 0)
  }, 0)
  
  const timelineMultiplier = timelineMultipliers[timeline as keyof typeof timelineMultipliers] || 1
  const totalPrice = Math.round((basePrice + featurePrice) * timelineMultiplier)

  const toggleFeature = (featureId: string) => {
    setSelectedFeatures(prev => 
      prev.includes(featureId) 
        ? prev.filter(id => id !== featureId)
        : [...prev, featureId]
    )
  }

  return (
    <div className="max-w-4xl mx-auto p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-2xl shadow-xl p-8"
      >
        <h2 className="text-3xl font-clash font-bold text-primary mb-8 text-center">
          Project Calculator
        </h2>

        {/* Project Type Selection */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-primary mb-4">Project Type</h3>
          <div className="grid md:grid-cols-3 gap-4">
            {projectTypes.map((type) => (
              <motion.button
                key={type.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedType(type.id)}
                className={`p-6 rounded-xl border-2 transition-all duration-300 ${
                  selectedType === type.id
                    ? 'border-accent bg-accent/5'
                    : 'border-gray-200 hover:border-accent/50'
                }`}
              >
                <h4 className="font-semibold text-lg mb-2">{type.name}</h4>
                <p className="text-gray-600 text-sm mb-3">{type.description}</p>
                <span className="text-2xl font-bold text-accent">${type.basePrice.toLocaleString()}</span>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Features Selection */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-primary mb-4">Additional Features</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {features.map((feature) => (
              <motion.div
                key={feature.id}
                whileHover={{ scale: 1.01 }}
                className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 ${
                  selectedFeatures.includes(feature.id)
                    ? 'border-accent bg-accent/5'
                    : 'border-gray-200 hover:border-accent/50'
                }`}
                onClick={() => toggleFeature(feature.id)}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold">{feature.name}</h4>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-lg font-bold text-accent">+${feature.price}</span>
                    <div className={`w-5 h-5 rounded border-2 mt-2 ${
                      selectedFeatures.includes(feature.id)
                        ? 'border-accent bg-accent'
                        : 'border-gray-300'
                    }`}>
                      {selectedFeatures.includes(feature.id) && (
                        <svg className="w-full h-full text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Timeline Selection */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-primary mb-4">Timeline: {timeline} weeks</h3>
          <input
            type="range"
            min="1"
            max="6"
            value={timeline}
            onChange={(e) => setTimeline(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
          />
          <div className="flex justify-between text-sm text-gray-600 mt-2">
            <span>1 week (Rush)</span>
            <span>6 weeks (Standard)</span>
          </div>
        </div>

        {/* Total Estimate */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-gradient-to-r from-accent to-accent/80 rounded-xl p-8 text-center text-white"
        >
          <h3 className="text-2xl font-semibold mb-2">Estimated Total</h3>
          <div className="text-5xl font-bold mb-4">${totalPrice.toLocaleString()}</div>
          <p className="text-accent-100">
            {timeline === 1 ? 'Rush delivery' : 
             timeline <= 3 ? 'Fast delivery' : 'Standard delivery'}
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full mt-8 bg-primary text-white py-4 px-8 rounded-xl font-semibold text-lg hover:bg-primary/90 transition-colors duration-300"
        >
          Start Your Project
        </motion.button>
      </motion.div>
    </div>
  )
}