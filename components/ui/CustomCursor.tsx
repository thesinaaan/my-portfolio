"use client";

import { useEffect, useRef, useState } from 'react'
import { motion, useSpring, AnimatePresence } from 'framer-motion'

type CursorMode = 'default' | 'VIEW' | 'SEND' | 'CLICK'

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const [mode, setMode] = useState<CursorMode>('default')
  const [visible, setVisible] = useState(false)

  // Spring physics — stiffness:150 feels like it's dragging slightly behind
  const springConfig = { stiffness: 150, damping: 18, mass: 0.8 }
  const x = useSpring(-100, springConfig)
  const y = useSpring(-100, springConfig)

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
      if (!visible) setVisible(true)
    }

    const onLeave = () => setVisible(false)
    const onEnter = () => setVisible(true)

    // Read data-cursor attribute from hovered element
    const onOver = (e: MouseEvent) => {
      const el = (e.target as HTMLElement).closest('[data-cursor]') as HTMLElement | null
      const val = el?.dataset.cursor as CursorMode | undefined
      setMode(val ?? 'default')
    }

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseover', onOver)
    document.addEventListener('mouseleave', onLeave)
    document.addEventListener('mouseenter', onEnter)

    // Hide native cursor globally
    document.documentElement.style.cursor = 'none'

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseleave', onLeave)
      document.removeEventListener('mouseenter', onEnter)
      document.documentElement.style.cursor = ''
    }
  }, [visible, x, y])

  const isExpanded = mode !== 'default'

  const size = isExpanded ? 72 : 14
  const label = mode !== 'default' ? mode : null

  return (
    <motion.div
      ref={cursorRef}
      aria-hidden
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        x,
        y,
        translateX: '-50%',
        translateY: '-50%',
        zIndex: 9999,
        pointerEvents: 'none',
        opacity: visible ? 1 : 0,
      }}
    >
      <motion.div
        animate={{
          width: size,
          height: size,
          borderRadius: isExpanded ? 20 : '50%',
          background: isExpanded
            ? 'rgba(93, 202, 165, 0.15)'
            : 'transparent',
          borderColor: isExpanded
            ? 'rgba(93, 202, 165, 0.6)'
            : 'rgba(255, 255, 255, 0.8)',
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 22 }}
        style={{
          border: '1.5px solid rgba(255,255,255,0.8)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backdropFilter: isExpanded ? 'blur(8px)' : 'none',
          WebkitBackdropFilter: isExpanded ? 'blur(8px)' : 'none',
        }}
      >
        <AnimatePresence>
          {label && (
            <motion.span
              key={label}
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.7 }}
              transition={{ duration: 0.15 }}
              style={{
                fontSize: 9,
                fontWeight: 700,
                letterSpacing: 1.5,
                color: '#5DCAA5',
                textTransform: 'uppercase',
                userSelect: 'none',
                whiteSpace: 'nowrap',
              }}
            >
              {label}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {!isExpanded && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ duration: 0.15 }}
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 4,
              height: 4,
              borderRadius: '50%',
              background: '#fff',
            }}
          />
        )}
      </AnimatePresence>
    </motion.div>
  )
}
