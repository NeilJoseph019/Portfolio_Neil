'use client'

import React from 'react'

import {useEffect, useRef} from 'react'

export const BackgroundWithoutParticles = ()=>{
  return(
    <div
      className='absolute inset-0 -z-30 opacity-[0.04] dark:opacity-10'
      style={{ 
        backgroundImage : "url('/grain.jpg')",
      }}
      >
    </div>
  )
}


const Background = () => {
  return (
    <>
        <div
        className='absolute inset-0 -z-30 opacity-[0.04] dark:opacity-10'
        style={{ 
          backgroundImage : "url('/grain.jpg')",
        }}
        >
        </div>
        <Particles/>
    </>
  )
}

export default Background


// Roughly one particle per this many CSS pixels, so density looks the same on every screen
const PIXELS_PER_PARTICLE = 2200
const MIN_PARTICLES = 60
const MAX_PARTICLES = 600
// Capping the pixel ratio keeps the canvas well under mobile canvas-size limits
const MAX_DPR = 2

const particleColor = () =>
  document.documentElement.classList.contains("dark")
    ? "rgba(255, 255, 255, 0.5)"
    : "rgba(23, 23, 23, 0.3)"

class Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number

  constructor(width: number, height: number) {
    this.x = Math.random() * width
    this.y = Math.random() * height
    this.size = Math.random() * 2 + 0.1
    this.speedX = Math.random() * 2 - 1
    this.speedY = Math.random() * 2 - 1
  }

  update(width: number, height: number) {
    this.x += this.speedX
    this.y += this.speedY

    if (this.x > width) this.x = 0
    if (this.x < 0) this.x = width
    if (this.y > height) this.y = 0
    if (this.y < 0) this.y = height
  }

  draw(ctx: CanvasRenderingContext2D, color: string) {
    ctx.fillStyle = color
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
    ctx.fill()
  }
}

function Particles() {

    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext("2d")
        if (!ctx) return

        const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)")

        const particles: Particle[] = []
        let width = 0
        let height = 0
        let frameId = 0

        let color = particleColor()

        const drawFrame = (move = true) => {
          ctx.clearRect(0, 0, width, height)
          for (const particle of particles) {
            if (move) particle.update(width, height)
            particle.draw(ctx, color)
          }
        }

        // next-themes toggles the `dark` class on <html>; recolour without resetting particles
        const themeObserver = new MutationObserver(() => {
          color = particleColor()
          if (reducedMotion.matches) drawFrame(false)
        })
        themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] })

        // The canvas is fixed to the viewport, so its size never depends on page length
        const resizeCanvas = () => {
          const dpr = Math.min(window.devicePixelRatio || 1, MAX_DPR)
          width = canvas.clientWidth
          height = canvas.clientHeight

          canvas.width = Math.round(width * dpr)
          canvas.height = Math.round(height * dpr)
          ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

          const target = Math.min(
            MAX_PARTICLES,
            Math.max(MIN_PARTICLES, Math.round((width * height) / PIXELS_PER_PARTICLE)),
          )
          while (particles.length < target) particles.push(new Particle(width, height))
          particles.length = Math.min(particles.length, target)

          // Resizing clears the canvas; repaint right away so there is no blank flash
          if (reducedMotion.matches) drawFrame(false)
        }

        const animate = () => {
          drawFrame()
          frameId = requestAnimationFrame(animate)
        }

        const start = () => {
          cancelAnimationFrame(frameId)
          if (reducedMotion.matches) {
            drawFrame(false)
          } else {
            frameId = requestAnimationFrame(animate)
          }
        }

        resizeCanvas()
        start()

        window.addEventListener("resize", resizeCanvas)
        reducedMotion.addEventListener("change", start)
        return () => {
          cancelAnimationFrame(frameId)
          themeObserver.disconnect()
          window.removeEventListener("resize", resizeCanvas)
          reducedMotion.removeEventListener("change", start)
        }
      }, [])

    return (
        <canvas
          ref={canvasRef}
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 -z-20 h-full w-full"
        />
  )
}
