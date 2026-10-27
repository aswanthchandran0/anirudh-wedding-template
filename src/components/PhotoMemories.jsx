import React from 'react'
import { weddingInviteData as data } from '../data/invitationConfig'

const PhotoMemories = () => {
  // These define the exact position and rotation of each frame
  // to create that organic, "scattered on a desk" look.
  const frameLayouts = [
    // 1. Top Left (Tilted left)
    { rotate: '-rotate-6', top: 'top-0 left-0 z-10', width: 'w-[60%] sm:w-[55%]' },
    // 2. Top Right (Tilted right, behind the center)
    { rotate: 'rotate-3', top: 'top-8 right-0 z-10', width: 'w-[60%] sm:w-[55%]' },
    // 3. Center (Straight, on top)
    { rotate: '-rotate-1', top: 'top-[25%] left-[15%] z-30', width: 'w-[70%] sm:w-[65%]' },
    // 4. Bottom Left (Tilted left)
    { rotate: '-rotate-12', top: 'top-[55%] left-[-5%] z-20', width: 'w-[55%] sm:w-[50%]' },
    // 5. Bottom Right (Tilted right)
    { rotate: 'rotate-6', top: 'top-[60%] right-[-5%] z-20', width: 'w-[55%] sm:w-[50%]' },
  ]

  return (
    <div className="w-full bg-[#e8e6e1] py-24 sm:py-32 flex flex-col items-center justify-center font-sans relative overflow-hidden">
      
      {/* Title */}
      <h2 className="font-script text-[3rem] sm:text-[4rem] text-neutral-800 leading-none mb-16 drop-shadow-sm z-40 relative">
        Captured Moments
      </h2>

      {/* =========================================
          THE POLAROID STACK CONTAINER
          ========================================= */}
      {/* Fixed height allows us to absolutely position the frames without them collapsing */}
      <div className="relative w-full max-w-[600px] h-[700px] sm:h-[850px] mx-auto px-4">
        
        {data.galleryImages?.map((image, index) => {
          // Cycle through layouts. If you have more than 5 images, it will loop.
          const layout = frameLayouts[index % frameLayouts.length]
          
          return (
            <div 
              key={index}
              className={`
                absolute ${layout.top} ${layout.rotate} ${layout.width}
                transition-all duration-500 ease-out
                hover:z-50 hover:scale-105 hover:rotate-0 hover:shadow-2xl
                cursor-pointer group
              `}
            >
              {/* 
                THE POLAROID FRAME 
                - bg-white creates the border
                - p-2 sm:p-3 is the thickness of the side/top borders
              */}
              <div className="bg-white p-2 sm:p-3 pb-12 sm:pb-16 shadow-xl rounded-sm border border-neutral-200/50 relative">
                
                {/* The actual image (Square ratio) */}
                <div className="relative w-full aspect-square overflow-hidden bg-neutral-200">
                  <img 
                    src={image} 
                    alt={`Memory ${index + 1}`} 
                    className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0" 
                  />
                </div>

                {/* The Heart Icon in the bottom right white space */}
                <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4">
                  <svg 
                    className="w-4 h-4 sm:w-5 sm:h-5 text-neutral-300 group-hover:text-[#7A2E3A] transition-colors duration-300" 
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