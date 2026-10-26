import React, { useState } from 'react'
import { weddingInviteData as data } from '../data/invitationConfig'

const DressCode = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === data.dressCodeImages.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? data.dressCodeImages.length - 1 : prevIndex - 1
    )
  }

  return (
    /* Using the same warm grey background as Gallery, Schedule, and Venue */
    <div className="w-full bg-[#e8e6e1] py-24 sm:py-32 flex flex-col items-center justify-center font-sans text-ink relative overflow-hidden">
      
      <div className="w-full max-w-[600px] px-6 flex flex-col items-center relative z-10">
        
        {/* Title Section */}
        <h2 className="font-script text-[2.8rem] sm:text-[4rem] text-neutral-800 mb-2 text-center leading-none drop-shadow-sm">
          {data.dressCodeTitle}
        </h2>
        <p className="font-sans text-xs sm:text-sm tracking-[0.3em] uppercase text-[#C5A880] font-bold mb-10">
          {data.dressCodeSubtitle}
        </p>

        {/* =========================================
            THE SLIDESHOW (Carousel)
            ========================================= */}
        <div className="relative w-full aspect-[4/5] sm:aspect-square max-w-[450px] overflow-hidden rounded-[2rem] shadow-2xl mb-8 border-[6px] border-white bg-white">
          
          {/* The sliding track */}
          <div 
            className="flex h-full w-full transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {data.dressCodeImages?.map((image, index) => (
              <div key={index} className="w-full h-full flex-shrink-0">
                <img 
                  src={image} 
                  alt={`Dress Code ${index + 1}`} 
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Left Arrow */}
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors cursor-pointer z-10"
          >
            <svg className="w-5 h-5 text-neutral-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>

          {/* Right Arrow */}
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors cursor-pointer z-10"
          >
            <svg className="w-5 h-5 text-neutral-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>

          {/* Slide Indicators (Dots) */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {data.dressCodeImages?.map((_, index) => (
              <div 
                key={index}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'w-6 bg-[#C5A880]' : 'w-2 bg-white/60'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Description Text */}
        <div className="max-w-[450px] text-center px-4">
          <p className="font-sans text-[0.8rem] sm:text-[0.9rem] text-neutral-600 leading-loose tracking-wide">
            {data.dressCodeDescription}
          </p>
        </div>

      </div>
    </div>
  )
}

export default DressCode