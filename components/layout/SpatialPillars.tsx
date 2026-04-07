"use client";

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// ─── shared glass styles ───────────────────────────────────────────────
const glass = {
  background: 'rgba(255, 255, 255, 0.06)',
  backdropFilter: 'blur(24px) saturate(180%)',
  WebkitBackdropFilter: 'blur(24px) saturate(180%)',
  border: '1px solid rgba(255, 255, 255, 0.12)',
  boxShadow: `
    inset 0 1px 0 rgba(255, 255, 255, 0.15),
    0 8px 32px rgba(0, 0, 0, 0.25)
  `,
} as React.CSSProperties

const pillBase = {
  ...glass,
  position: 'fixed' as const,
  zIndex: 50,
  display: 'flex',
  alignItems: 'center',
  borderRadius: '100px',
}

const fadeUp = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as any },
}



// ─── Clock pill ───────────────────────────────────────────────────────
export function ClockPill() {
  const [time, setTime] = useState('')

  useEffect(() => {
    const tick = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-IN', {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      }))
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <motion.div
      {...fadeUp}
      transition={{ ...fadeUp.transition, delay: 2.8 }}
      style={{
        ...pillBase,
        top: '20px',
        right: '20px',
        gap: '10px',
        padding: '8px 16px',
      }}
    >
      {/* Kerala status dot */}
      <span style={{
        width: 6,
        height: 6,
        borderRadius: '50%',
        background: '#28C840',
        boxShadow: '0 0 6px rgba(40,200,64,0.8)',
        flexShrink: 0,
      }} />

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
        <span style={{ fontSize: 12, fontWeight: 600, color: '#fff', letterSpacing: '-0.3px', lineHeight: 1.2 }}>
          {time}
        </span>
        <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.35)', letterSpacing: '0.3px', lineHeight: 1.2 }}>
          Kerala, India
        </span>
      </div>
    </motion.div>
  )
}

// ─── Dock pill ────────────────────────────────────────────────────────
const DOCK_ITEMS = [
  { icon: '⌂', label: 'Home',     href: '#home'     },
  { icon: '◈', label: 'Work',     href: '#projects' },
  { icon: '◉', label: 'About',    href: '#about'    },
  { icon: '✦', label: 'Skills',   href: '#skills'   },
  { icon: '◎', label: 'Contact',  href: '#contact'  },
]

export function DockPill() {
  const [hovered, setHovered] = useState<string | null>(null)

  return (
    <motion.div
      {...fadeUp}
      transition={{ ...fadeUp.transition, delay: 3.0 }}
      style={{
        ...pillBase,
        bottom: '24px',
        left: '50%',
        transform: 'translateX(-50%)',
        gap: '4px',
        padding: '8px 12px',
        overflow: 'visible',
      }}
    >
      {DOCK_ITEMS.map(item => (
        <a
          key={item.label}
          href={item.href}
          onMouseEnter={() => setHovered(item.label)}
          onMouseLeave={() => setHovered(null)}
          style={{ textDecoration: 'none', position: 'relative' }}
        >
          {/* Tooltip */}
          <AnimatePresence>
            {hovered === item.label && (
              <motion.span
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 4 }}
                transition={{ duration: 0.15 }}
                style={{
                  position: 'absolute',
                  bottom: '110%',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  fontSize: 10,
                  color: '#fff',
                  background: 'rgba(0,0,0,0.6)',
                  backdropFilter: 'blur(8px)',
                  padding: '3px 8px',
                  borderRadius: 6,
                  whiteSpace: 'nowrap',
                  pointerEvents: 'none',
                }}
              >
                {item.label}
              </motion.span>
            )}
          </AnimatePresence>

          {/* Icon button */}
          <motion.div
            animate={{
              scale: hovered === item.label ? 1.3 : 1,
              y: hovered === item.label ? -4 : 0,
            }}
            transition={{ type: 'spring', stiffness: 400, damping: 22 }}
            style={{
              width: 36,
              height: 36,
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 14,
              color: hovered === item.label ? '#5DCAA5' : 'rgba(255,255,255,0.5)',
              background: hovered === item.label
                ? 'rgba(93,202,165,0.12)'
                : 'transparent',
              transition: 'color 0.2s, background 0.2s',
            }}
          >
            {item.icon}
          </motion.div>
        </a>
      ))}
    </motion.div>
  )
}
