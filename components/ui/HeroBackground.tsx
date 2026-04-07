"use client";

import { useEffect, useRef } from 'react'

export function HeroBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    // Test if WebGL is available at all
    const gl = canvas.getContext('webgl2') || canvas.getContext('webgl')
    if (!gl) {
      console.error('[HeroBackground] WebGL not available — falling back to CSS gradient')
      return
    }
    console.log('[HeroBackground] WebGL OK — FluidFlow should work')
  }, [])

  return null
}
