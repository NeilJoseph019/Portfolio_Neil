'use client'

import React from 'react'

import {useEffect, useRef} from 'react'

export const BackgroundWithoutParticles = ()=>{
  return(
    <div
      className='absolute inset-0 -z-30 opacity-10'
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
        className='absolute inset-0 -z-30 opacity-10'
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


function Particles() {

    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        if (!canvasRef.current) return
    
        const canvas = canvasRef.current
        const ctx = canvas.getContext("2d")
        if (!ctx) return
    
        const particles: Particle[] = []
        const particleCount = window.innerWidth < 640 ? 250 : 600

        const resizeCanvas = () => {
          const dpr = window.devicePixelRatio || 1
          const rect = canvas.getBoundingClientRect()

          canvas.width = rect.width * dpr
          canvas.height = rect.height * dpr

          ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
        }
    
        class Particle {
          x: number
          y: number
          size: number
          speedX: number
          speedY: number
    
          constructor() {
            this.x = Math.random() * canvas.clientWidth
            this.y = Math.random() * canvas.clientHeight
            this.size = Math.random() * 2 + 0.1
            this.speedX = Math.random() * 2 - 1
            this.speedY = Math.random() * 2 - 1
          }
    
          update() {
            this.x += this.speedX
            this.y += this.speedY
    
            if (this.x > canvas.clientWidth) this.x = 0
            if (this.x < 0) this.x = canvas.clientWidth
            if (this.y > canvas.clientHeight) this.y = 0
            if (this.y < 0) this.y = canvas.clientHeight
          }
    
          draw() {
            if (!ctx) return
            ctx.fillStyle = "rgba(255, 255, 255, 0.5)"
            ctx.beginPath()
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
            ctx.fill()
          }
        }

        resizeCanvas()
    
        for (let i = 0; i < particleCount; i++) {
          particles.push(new Particle())
        }
    
        let frameId = 0

        function animate() {
          if (!ctx) return
          ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight)
    
          for (const particle of particles) {
            particle.update()
            particle.draw()
          }
    
          frameId = requestAnimationFrame(animate)
        }
    
        animate()
    
        
        window.addEventListener("resize", resizeCanvas)
        return () => {
          cancelAnimationFrame(frameId)
          window.removeEventListener("resize", resizeCanvas)
        }
      }, [])

    return (
        <canvas ref={canvasRef} className="absolute inset-0 -z-20 h-full w-full" />
  )
}