import React, { useState, useEffect } from 'react'
import { weddingInviteData as data } from '../data/invitationConfig'

// 👈 1. The Countdown Timer Sub-Component
const Countdown = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    // Parse the target date (e.g., "November 20, 2024 12:00:00")
    const target = new Date(targetDate).getTime()

    const interval = setInterval(() => {
      const now = new Date().getTime()
      const distance = target - now

      if (distance < 0) {
        clearInterval(interval)
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        return
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [targetDate])

  // Helper to format numbers with leading zeros (e.g., 09 instead of 9)
  const formatTime = (time) => String(time).padStart(2, '0')

  return (
    <div className="flex gap-4 sm:gap-6 justify-center items-center mt-12 sm:mt-16 w-full px-4">
      {[
        { label: 'Days', value: timeLeft.days },
        { label: 'Hours', value: timeLeft.hours },
        { label: 'Mins', value: timeLeft.minutes },
        { label: 'Secs', value: timeLeft.seconds },
      ].map((item, index) => (
        <div key={index} className="flex flex-col items-center justify-center">
          {/* The Box */}
          <div className="w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] bg-ivory border border-[#C5A880]/40 rounded-xl flex items-center justify-center shadow-sm mb-2">
            <span className="font-serif text-2xl sm:text-4xl text-ink font-medium">
              {formatTime(item.value)}
            </span>
          </div>
          {/* The Label */}
          <span className="font-sans text-[0.55rem] sm:text-[0.65rem] text-neutral-500 uppercase tracking-[0.2em]">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  )
}

const Gallery = () => {
  // We combine the date and time for the countdown
  // Example: "November 20, 2024 12:00:00"
  const targetDateString = `${data.revealDate} ${data.revealTime}`

  return (
    <div className="w-full bg-[#e8e6e1] relative py-24 sm:py-40 flex flex-col items-center justify-center overflow-hidden">
      
      {/* =========================================
          TOP PART: THE CIRCULAR IMAGE CLUSTER
          ========================================= */}
      <div className="relative w-[340px] h-[550px] sm:w-[500px] sm:h-[700px] mx-auto">
        
        {/* --- IMAGE 1 (Top Left) --- */}
        <div className="absolute top-0 left-0 w-[65%] h-[35%] z-10 rotate-[-4deg] shadow-2xl rounded-[2rem] overflow-hidden border-[6px] border-white animate-fade-up opacity-0 delay-100">
          <img src={data.galleryImages?.[0]} alt="Gallery 1" className="w-full h-full object-cover grayscale" />
        </div>

        {/* --- IMAGE 2 (Top Right, overlapping) --- */}
        <div className="absolute top-[12%] right-0 w-[55%] h-[30%] z-20 rotate-[6deg] shadow-2xl rounded-[2rem] overflow-hidden border-[6px] border-white animate-fade-up opacity-0 delay-300">
          <img src={data.galleryImages?.[1]} alt="Gallery 2" className="w-full h-full object-cover grayscale" />
        </div>

        {/* --- IMAGE 3 (Bottom Center) --- */}
        <div className="absolute bottom-[-8%] left-[10%] w-[75%] h-[45%] z-10 rotate-[-2deg] shadow-2xl rounded-[3rem] overflow-hidden border-[6px] border-white animate-fade-up opacity-0 delay-500">
          <img src={data.galleryImages?.[2]} alt="Gallery 3" className="w-full h-full object-cover grayscale" />
        </div>

        {/* --- THE CENTRAL TEXT CIRCLE (Frosted Glass) --- */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] z-30 rounded-full bg-white/70 backdrop-blur-md shadow-[0_10px_40px_rgba(0,0,0,0.15)] border border-white/50 flex flex-col items-center justify-center text-center p-6 animate-fade-up opacity-0">
          
          <div className="w-8 h-[2px] bg-[#C5A880] mb-3"></div>
          
          <h2 className="font-serif text-2xl sm:text-3xl text-neutral-900 leading-tight mb-2 drop-shadow-sm">
            {data.galleryTitle}
          </h2>
          
          <p className="font-sans text-[0.55rem] sm:text-[0.65rem] text-neutral-600 uppercase tracking-[0.15em] leading-relaxed">
            {data.gallerySubtitle}
          </p>
          
          <div className="w-8 h-[2px] bg-[#C5A880] mt-3"></div>
        </div>
      </div>

      {/* =========================================
          BOTTOM PART: THE COUNTDOWN TIMER
          ========================================= */}
      <div className="w-full flex flex-col items-center mt-24 sm:mt-20 z-20 animate-fade-up opacity-0 delay-700">
        
        <h3 className="font-script text-3xl sm:text-5xl text-neutral-800 mb-2">
          Counting down to forever
        </h3>
        <p className="font-sans text-[0.65rem] sm:text-xs text-neutral-500 uppercase tracking-[0.3em] mb-6">
          Until we say "I Do"
        </p>

        {/* The Timer Component */}
        <Countdown targetDate={targetDateString} />
        
      </div>

    </div>
  )
}

export default Gallery