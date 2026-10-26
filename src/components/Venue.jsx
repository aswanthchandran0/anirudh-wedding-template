import React from 'react'
import { weddingInviteData as data } from '../data/invitationConfig'

const Venue = () => {
  // Generate a Google Maps search URL based on the venue name and address
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${data.venueName} ${data.venueAddress}`
  )}`

  return (
    /* Using the same warm grey background as Gallery and Schedule */
    <div className="w-full bg-[#e8e6e1] py-24 sm:py-32 flex flex-col items-center justify-center font-sans text-ink relative overflow-hidden">
      
      <div className="w-full max-w-[600px] px-6 flex flex-col items-center relative z-10">
        
        {/* Title */}
        <h2 className="font-script text-[2.8rem] sm:text-[4rem] text-neutral-800 mb-10 text-center leading-none drop-shadow-sm">
          {data.venueTitle}
        </h2>

        {/* =========================================
            THE VENUE CARD
            ========================================= */}
        {/* The entire card is now white and rounded */}
        <div className="relative w-full rounded-[2rem] overflow-hidden shadow-2xl bg-white flex flex-col">
          
          {/* 1. THE IMAGE */}
          {/* Removed the overlay text and gradients, keeping it clean */}
          <div className="relative h-[300px] sm:h-[400px] w-full">
            <img 
              src={data.venueImage} 
              alt={data.venueName} 
              className="w-full h-full object-cover"
            />
          </div>

          {/* 2. THE TEXT (Below Image) */}
          <div className="w-full px-8 pt-8 pb-6 flex flex-col items-center text-center">
            
            {/* The Map Pin Icon */}
            <svg className="w-8 h-8 text-[#C5A880] mb-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>

            <h3 className="font-serif text-2xl sm:text-3xl text-neutral-900 leading-tight mb-2">
              {data.venueName}
            </h3>
            
            <p className="font-sans text-xs sm:text-sm text-neutral-500 tracking-[0.15em] uppercase">
              {data.venueAddress}
            </p>
          </div>

          {/* 3. THE BUTTON (Below Text) */}
          <div className="w-full pb-8 px-6 flex justify-center">
            <a 
              href={mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-[#C5A880] text-neutral-900 rounded-full text-[0.7rem] sm:text-xs tracking-[0.2em] uppercase font-bold shadow-md hover:bg-[#b0956d] hover:shadow-lg transition-all cursor-pointer"
            >
              {/* Map Icon */}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path>
              </svg>
              View on Map
            </a>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Venue