"use client";

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

interface HorizontalScrollProps {
  children: React.ReactNode[]
  className?: string
}

export default function HorizontalScroll({ children, className = '' }: HorizontalScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const count = children.length

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ['0%', `${-(count - 1) / count * 100}%`]
  )

  return (
    <div
      ref={containerRef}
      className={className}
      style={{ height: `${count * 100}vh`, position: 'relative' }}
    >
      <div style={{
        position: 'sticky',
        top: 0,
        height: '100vh',
        overflow: 'hidden',
        width: '100%',
      }}>
        <motion.div
          style={{
            x,
            display: 'flex',
            width: `${count * 100}vw`,
            height: '100%',
            willChange: 'transform',
          }}
        >
          {children.map((child, i) => (
            <div
              key={i}
              style={{
                width: '100vw',
                height: '100vh',
                flexShrink: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0 40px',
              }}
            >
              {child}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
