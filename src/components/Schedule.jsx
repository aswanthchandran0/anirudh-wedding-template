import React from 'react'
import { weddingInviteData as data } from '../data/invitationConfig'

const Schedule = () => {
  return (
    /* Using the same warm grey background as the gallery */
    <div className="w-full bg-[#e8e6e1] py-24 sm:py-32 flex flex-col items-center justify-center font-sans text-ink relative overflow-hidden">
      
      {/* Title */}
      <h2 className="font-script text-[2.8rem] sm:text-[4rem] text-neutral-800 mb-16 text-center px-4 leading-none drop-shadow-sm">
        {data.scheduleTitle}
      </h2>

      {/* Timeline Container */}
      <div className="relative w-full max-w-[500px] flex flex-col items-center">
        
        {/* The Central Vertical Line */}
        {/* Positioned exactly in the middle, stretching from top to bottom */}
        <div className="absolute top-0 bottom-0 left-1/2 w-[2px] bg-[#C5A880]/50 -translate-x-1/2 z-0"></div>

        {/* Map through the events */}
        {data.scheduleEvents?.map((event, index) => {
          const isLeft = index % 2 === 0 // Even numbers go left, odd go right

          return (
            <div key={index} className="relative w-full flex justify-between items-center py-6 sm:py-8 z-10">
              
              {/* --- LEFT SIDE TEXT --- */}
              <div className={`w-[42%] text-right pr-4 sm:pr-8 ${isLeft ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                {isLeft && (
                  <>
                    <h3 className="font-serif text-2xl sm:text-4xl text-neutral-800 mb-1">{event.time}</h3>
                    <p className="font-sans text-xs sm:text-sm text-neutral-600 leading-snug">{event.title}</p>
                  </>
                )}
              </div>

              {/* --- CENTER DIAMOND DOT --- */}
              {/* Rotated square to make a diamond */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-3 h-3 sm:w-4 sm:h-4 bg-[#C5A880] rotate-45 shadow-sm"></div>
              </div>

              {/* --- RIGHT SIDE TEXT --- */}
              <div className={`w-[42%] text-left pl-4 sm:pl-8 ${!isLeft ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                {!isLeft && (
                  <>
                    <h3 className="font-serif text-2xl sm:text-4xl text-neutral-800 mb-1">{event.time}</h3>
                    <p className="font-sans text-xs sm:text-sm text-neutral-600 leading-snug">{event.title}</p>
                  </>
                )}
              </div>

            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Schedule