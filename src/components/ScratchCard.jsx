import React, { useRef, useEffect, useState } from 'react'
import confetti from 'canvas-confetti'

const ScratchCard = ({ date, time, onComplete }) => {
  const canvasRef = useRef(null)
  const [isScratched, setIsScratched] = useState(false)
  const [isDrawing, setIsDrawing] = useState(false)
  const lastPos = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    
    const rect = canvas.getBoundingClientRect()
    const dpr = window.devicePixelRatio || 1
    canvas.width = rect.width * dpr
    canvas.height = rect.height * dpr
    ctx.scale(dpr, dpr)

    canvas.style.width = `${rect.width}px`
    canvas.style.height = `${rect.height}px`

    ctx.fillStyle = '#C5A880' 
    ctx.fillRect(0, 0, rect.width, rect.height)

    for (let i = 0; i < 800; i++) {
      const x = Math.random() * rect.width
      const y = Math.random() * rect.height
      const radius = Math.random() * 1.5
      ctx.fillStyle = Math.random() > 0.5 ? 'rgba(255,255,255,0.5)' : 'rgba(160,130,90,0.3)'
      ctx.beginPath()
      ctx.arc(x, y, radius, 0, Math.PI * 2)
      ctx.fill()
    }

    ctx.globalCompositeOperation = 'destination-out'
    ctx.lineWidth = 40 
    ctx.lineCap = 'round'
    ctx.lineJoin = 'round'
  }, [])

  // 👈 SUBTLE CELEBRATION (Much smaller intensity)
  const triggerCelebration = () => {
    if (typeof confetti !== 'function') return;

    // Just one gentle burst from the center of the screen
    confetti({
      particleCount: 40, // Reduced from 120
      spread: 60,        // Narrower spread
      startVelocity: 25, // Slower launch speed
      scalar: 0.8,       // Smaller particles
      origin: { y: 0.6 },
      colors: ['#C5A880', '#7A2E3A', '#faf9f6', '#1a1a1a']
    });
  }

  const getCoordinates = (e) => {
    const canvas = canvasRef.current
    const rect = canvas.getBoundingClientRect()
    if (e.touches && e.touches.length === 0) return { x: 0, y: 0 }
    const clientX = e.touches ? e.touches[0].clientX : e.clientX
    const clientY = e.touches ? e.touches[0].clientY : e.clientY
    return { x: clientX - rect.left, y: clientY - rect.top }
  }

  const startDrawing = (e) => {
    setIsDrawing(true)
    const { x, y } = getCoordinates(e)
    lastPos.current = { x, y }
    scratch(e)
  }

  const stopDrawing = () => {
    setIsDrawing(false)
    lastPos.current = null
    checkScratchPercentage()
  }

  const scratch = (e) => {
    if (!isDrawing || isScratched) return
    e.preventDefault() 

    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const { x, y } = getCoordinates(e)

    if (lastPos.current) {
      ctx.beginPath()
      ctx.moveTo(lastPos.current.x, lastPos.current.y)
      ctx.lineTo(x, y)
      ctx.stroke()
    }

    lastPos.current = { x, y }
    checkScratchPercentage() 
  }

  const checkScratchPercentage = () => {
    if (isScratched) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
    const pixels = imageData.data
    let transparentPixels = 0

    for (let i = 3; i < pixels.length; i += 16) {
      if (pixels[i] === 0) transparentPixels++
    }

    const percentage = (transparentPixels / (pixels.length / 16)) * 100

    if (percentage > 15) {
      setIsScratched(true)
      triggerCelebration() 
      if (onComplete) onComplete()
    }
  }

  return (
    <div 
      className="relative w-[240px] h-[240px] flex justify-center items-center group mx-auto"
      style={{
        clipPath: 'path("M 120 220 C 40 140 0 90 0 55 C 0 20 25 0 60 0 C 90 0 110 20 120 40 C 130 20 150 0 180 0 C 215 0 240 20 240 55 C 240 90 200 140 120 220 Z")'
      }}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center pt-8 bg-ivory">
        <h3 className="font-serif text-[1.3rem] text-[#C5A880] tracking-[0.1em] uppercase font-semibold text-center px-4 leading-tight">
          {date}
        </h3>
        <div className="w-8 h-[1px] bg-[#C5A880]/40 my-2"></div>
        <p className="font-sans text-[0.65rem] text-[#C5A880]/90 tracking-[0.2em] uppercase font-medium">
          {time}
        </p>
      </div>

      {!isScratched && (
        <canvas
          ref={canvasRef}
          onMouseDown={startDrawing}
          onMouseUp={stopDrawing}
          onMouseLeave={stopDrawing}
          onMouseMove={scratch}
          onTouchStart={startDrawing}
          onTouchEnd={stopDrawing}
          onTouchMove={scratch}
          className="absolute inset-0 w-full h-full touch-none z-10 cursor-crosshair transition-opacity duration-1000 ease-in-out"
          style={{ opacity: isScratched ? 0 : 1 }}
        />
      )}
    </div>
  )
}

export default ScratchCard