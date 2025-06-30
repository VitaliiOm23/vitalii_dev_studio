/*
'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)

    const interactiveElements = document.querySelectorAll('a, button, input, textarea, select')
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter)
      el.addEventListener('mouseleave', handleMouseLeave)
    })
    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter)
        el.removeEventListener('mouseleave', handleMouseLeave)
      })
    }
  }, [])

  return (
    <motion.div
      className="custom-cursor"
      style={{
        width: 16,
        height: 16,
        boxShadow: '0 4px 24px 0 rgba(13,13,13,0.12), 0 1.5px 8px 0 #1b4332',
        background: isHovering ? '#1b4332' : '#0D0D0D',
        border: isHovering ? '2px solid #D8D8D8' : '2px solid #FAFAFA',
        mixBlendMode: 'multiply',
        pointerEvents: 'none',
        zIndex: 9999,
      }}
      animate={{
        x: mousePosition.x - 8,
        y: mousePosition.y - 8,
        scale: isHovering ? 1.18 : 1,
        filter: isHovering ? 'blur(0.5px)' : 'none',
      }}
      transition={{
        type: "spring",
        stiffness: 900,
        damping: 38,
        mass: 0.3,
      }}
    />
  )
} 
*/ 