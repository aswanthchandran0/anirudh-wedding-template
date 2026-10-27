import React, { useState } from 'react'
import { weddingInviteData as data } from '../data/invitationConfig'

const PhotoMemories = () => {
  // 👈 State to track which image is currently active (tapped)
  const [activeIndex, setActiveIndex] = useState(null)

  const frameLayouts = [
    { rotate: '-rotate-6', top: 'top-0 left-0 z-10', width: 'w-[60%] sm:w-[55%]' },
    { rotate: 'rotate-3', top: 'top-8 right-0 z-10', width: 'w-[60%] sm:w-[55%]' },
    { rotate: '-rotate-1', top: 'top-[25%] left-[15%] z-30', width: 'w-[70%] sm:w-[65%]' },
    { rotate: '-rotate-12', top: 'top-[55%] left-[-5%] z-20', width: 'w-[55%] sm:w-[50%]' },
    { rotate: 'rotate-6', top: 'top-[60%] right-[-5%] z-20', width: 'w-[55%] sm:w-[50%]' },
  ]

  const handleImageClick = (index) => {
    // If the image is already active, tapping it again will reset it
    if (activeIndex === index) {
      setActiveIndex(null)
    } else {
      setActiveIndex(index)
    }
  }

  return (
    <div className="w-full bg-[#e8e6e1] py-24 sm:py-32 flex flex-col items-center justify-center font-sans relative overflow-hidden">
      
      {/* Title */}
      <h2 className="font-script text-[3rem] sm:text-[4rem] text-neutral-800 leading-none mb-16 drop-shadow-sm z-40 relative">
        Captured Moments
      </h2>

      {/* Instruction for Mobile Users */}
      <p className="sm:hidden font-sans text-[0.65rem] uppercase tracking-[0.2em] text-neutral-500 mb-8 -mt-8 relative z-40">
        Tap a photo to bring it forward
      </p>

      {/* =========================================
          THE POLAROID STACK CONTAINER
          ========================================= */}
      <div className="relative w-full max-w-[600px] h-[700px] sm:h-[850px] mx-auto px-4">
        
        {data.galleryImages?.map((image, index) => {
          const layout = frameLayouts[index % frameLayouts.length]
          
          // Check if this specific image is the currently active one
          const isActive = activeIndex === index

          return (
            <div 
              key={index}
              onClick={() => handleImageClick(index)}
              className={`
                absolute ${layout.top} ${layout.width}
                transition-all duration-500 ease-out
                cursor-pointer group
                /* 👈 APPLY DYNAMIC CLASSES BASED ON ACTIVE STATE */
                ${isActive 
                  ? 'z-50 scale-105 rotate-0 shadow-2xl' 
                  : `${layout.rotate} shadow-xl hover:z-40 hover:scale-105 hover:rotate-0 hover:shadow-2xl`
                }
              `}
            >
              {/* The Polaroid Frame */}
              <div className="bg-white p-2 sm:p-3 pb-12 sm:pb-16 rounded-sm border border-neutral-200/50 relative">
                
                {/* The Image */}
                <div className="relative w-full aspect-square overflow-hidden bg-neutral-200">
                  <img 
                    src={image} 
                    alt={`Memory ${index + 1}`} 
                    className={`
                      w-full h-full object-cover transition-all duration-700
                      /* 👈 IF ACTIVE, SHOW COLOR. IF NOT, GREYSCALE (ONLY HOVER ON DESKTOP) */
                      ${isActive ? 'grayscale-0' : 'grayscale group-hover:grayscale-0'}
                    `} 
                  />
                </div>

                {/* The Heart Icon */}
                <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4">
                  <svg 
                    className={`
                      w-4 h-4 sm:w-5 sm:h-5 transition-colors duration-300
                      ${isActive ? 'text-[#7A2E3A]' : 'text-neutral-300 group-hover:text-[#7A2E3A]'}
                    `} 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                </div>

              </div>
            </div>
          )
        })}
      </div>

    </div>
  )
}

export default PhotoMemories