'use client'

import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion'

export default function AnimatedBackground({ highlight }: { highlight?: 'start' | 'end' | null }) {
  // Animate three blurred shapes
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
      {/* Blurred moving shapes */}
      <motion.div
        className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full"
        style={{
          background: 'radial-gradient(circle, #e0e0e0 0%, transparent 80%)',
          filter: 'blur(60px)',
          opacity: 0.5,
        }}
        animate={{
          x: [0, 60, 0],
          y: [0, 40, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-[-10%] right-[-10%] w-[35vw] h-[35vw] rounded-full"
        style={{
          background: 'radial-gradient(circle, #b6c7b6 0%, transparent 80%)',
          filter: 'blur(80px)',
          opacity: 0.4,
        }}
        animate={{
          x: [0, -40, 0],
          y: [0, -60, 0],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 w-[30vw] h-[30vw] rounded-full"
        style={{
          background: 'radial-gradient(circle, #d8d8d8 0%, transparent 80%)',
          filter: 'blur(100px)',
          opacity: 0.3,
        }}
        animate={{
          x: [0, 30, -30, 0],
          y: [0, -30, 30, 0],
        }}
        transition={{ duration: 28, repeat: Infinity, ease: 'easeInOut' }}
      />
      {/* Highlight for start/end panel */}
      <AnimatePresence>
        {highlight && (
          <motion.div
            key={highlight}
            className="absolute inset-0 w-full h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.18 }}
            exit={{ opacity: 0 }}
            style={{
              background: highlight === 'start'
                ? 'radial-gradient(circle at 20% 50%, #1b4332 0%, transparent 70%)'
                : 'radial-gradient(circle at 80% 50%, #0D0D0D 0%, transparent 70%)',
              zIndex: 1,
            }}
            transition={{ duration: 0.8 }}
          />
        )}
      </AnimatePresence>
    </div>
  )
} 