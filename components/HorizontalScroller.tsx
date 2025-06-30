'use client'

import { ReactNode, useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import AnimatedBackground from './AnimatedBackground'

interface HorizontalScrollerProps {
  children: ReactNode[]
  currentPanel: number
  setCurrentPanel: (index: number) => void
}

const PANEL_COUNT = 5
const PANEL_ANGLE = 360 / PANEL_COUNT

export default function HorizontalScroller({ children, currentPanel, setCurrentPanel }: HorizontalScrollerProps) {
  // Responsive RADIUS and panel size
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200)
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  const isMobile = windowWidth < 768
  const RADIUS = isMobile ? 320 : 600
  const panelWidth = isMobile ? '100vw' : '100vw'
  const panelHeight = isMobile ? '100dvh' : '100vh'

  // If only one child, render it centered without carousel logic
  if (!Array.isArray(children) || children.length === 1) {
    return (
      <div className="relative w-full h-screen overflow-hidden bg-background">
        <AnimatedBackground highlight={null} />
        <div className="w-full h-full flex items-center justify-center relative z-10 select-none">
          {Array.isArray(children) ? children[0] : children}
        </div>
      </div>
    )
  }

  const containerRef = useRef<HTMLDivElement>(null)

  // Circular index helpers
  const mod = (n: number, m: number) => ((n % m) + m) % m
  const goToPanel = (index: number) => {
    setCurrentPanel(mod(index, PANEL_COUNT))
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') goToPanel(currentPanel - 1)
      if (e.key === 'ArrowRight') goToPanel(currentPanel + 1)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [currentPanel])

  // Debounce for scroll
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null)
  const lastScrollTime = useRef(0)

  // Scroll navigation (mouse wheel, trackpad, vertical or horizontal)
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      const now = Date.now()
      if (now - lastScrollTime.current < 600) return // debounce
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
        if (e.deltaX > 40) setCurrentPanel((p) => (p + 1) % PANEL_COUNT)
        else if (e.deltaX < -40) setCurrentPanel((p) => (p - 1 + PANEL_COUNT) % PANEL_COUNT)
        lastScrollTime.current = now
      } else if (Math.abs(e.deltaY) > 40) {
        if (e.deltaY > 0) setCurrentPanel((p) => (p + 1) % PANEL_COUNT)
        else setCurrentPanel((p) => (p - 1 + PANEL_COUNT) % PANEL_COUNT)
        lastScrollTime.current = now
      }
    }
    const node = containerRef.current
    if (node) node.addEventListener('wheel', handleWheel, { passive: false })
    return () => { if (node) node.removeEventListener('wheel', handleWheel) }
  }, [setCurrentPanel])

  // Touch/trackpad navigation
  useEffect(() => {
    let startX = 0
    let isDragging = false
    const handleTouchStart = (e: TouchEvent) => {
      startX = e.touches[0].clientX
      isDragging = true
    }
    const handleTouchMove = (e: TouchEvent) => {
      if (!isDragging) return
      const deltaX = e.touches[0].clientX - startX
      if (Math.abs(deltaX) > 60) {
        goToPanel(currentPanel + (deltaX < 0 ? 1 : -1))
        isDragging = false
      }
    }
    const handleTouchEnd = () => { isDragging = false }
    const node = containerRef.current
    if (node) {
      node.addEventListener('touchstart', handleTouchStart)
      node.addEventListener('touchmove', handleTouchMove)
      node.addEventListener('touchend', handleTouchEnd)
    }
    return () => {
      if (node) {
        node.removeEventListener('touchstart', handleTouchStart)
        node.removeEventListener('touchmove', handleTouchMove)
        node.removeEventListener('touchend', handleTouchEnd)
      }
    }
  }, [currentPanel])

  // Carousel effect: arrange all panels in a row and translateX based on currentPanel
  return (
    <div className="relative w-full h-screen overflow-hidden bg-background">
      <AnimatedBackground highlight={currentPanel === 0 ? 'start' : currentPanel === PANEL_COUNT - 1 ? 'end' : null} />
      <div ref={containerRef} className="w-full h-full flex items-center justify-center relative z-10 select-none overflow-hidden perspective-3d" style={{ perspective: isMobile ? '800px' : '1200px', perspectiveOrigin: '50% 40%' }}>
        <motion.div
          className="relative w-full h-full"
          style={{
            transformStyle: 'preserve-3d',
            width: panelWidth,
            height: panelHeight,
          }}
          animate={{
            rotateY: -currentPanel * PANEL_ANGLE,
          }}
          transition={{ type: 'spring', stiffness: 80, damping: 22 }}
        >
          {children.map((child, idx) => (
            <div
              key={`panel-${idx}`}
              className={`absolute top-0 left-0 flex items-center justify-center border-2 border-primary shadow-lg ${isMobile ? 'px-2 py-2' : 'px-8 py-8'}`}
              style={{
                transform: `rotateY(${idx * PANEL_ANGLE}deg) translateZ(${RADIUS}px)`,
                width: panelWidth,
                height: panelHeight,
                backfaceVisibility: 'hidden',
                background: `hsl(${idx * 60}, 80%, 98%)`,
                boxShadow: '0 0 40px 0 rgba(0,0,0,0.08)',
                overflowY: 'auto',
              }}
            >
              <div className="w-full h-full flex flex-col justify-center items-center">
                {child}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
      {/* Circular Panel Indicators */}
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-50">
        {children.map((_, index) => (
          <motion.div
            key={`indicator-${index}`}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${currentPanel === index ? 'bg-primary scale-125 shadow-lg' : 'bg-titanium/70'}`}
            style={{
              boxShadow: currentPanel === index ? '0 0 12px 2px #1b4332' : 'none',
              border: currentPanel === index ? '2px solid #1b4332' : 'none',
            }}
            animate={{
              scale: currentPanel === index ? 1.3 : 1,
              opacity: currentPanel === index ? 1 : 0.6,
            }}
            transition={{ duration: 0.3 }}
          />
        ))}
      </div>
    </div>
  )
} 