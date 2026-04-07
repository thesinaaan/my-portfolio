"use client";

import { useEffect, useRef } from 'react'

export default function PageGlow() {
  const glowRef = useRef<HTMLDivElement>(null)
  const rafRef = useRef<number>(0)
  const target = useRef({ x: -9999, y: -9999 })
  const current = useRef({ x: -9999, y: -9999 })

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      target.current = { x: e.clientX, y: e.clientY }
    }
    window.addEventListener('mousemove', onMove)

    // Lerp the glow at 0.06 friction — feels like it floats
    const tick = () => {
      current.current.x += (target.current.x - current.current.x) * 0.06
      current.current.y += (target.current.y - current.current.y) * 0.06
      if (glowRef.current) {
        glowRef.current.style.setProperty('--mx', `${current.current.x}px`)
        glowRef.current.style.setProperty('--my', `${current.current.y}px`)
      }
      rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <div
      ref={glowRef}
      aria-hidden
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 0,
        background: `radial-gradient(
          600px circle at var(--mx) var(--my),
          rgba(93, 202, 165, 0.055),
          transparent 80%
        )`,
      }}
    />
  )
}
