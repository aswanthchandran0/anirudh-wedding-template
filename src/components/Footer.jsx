import React from 'react'

const Footer = () => {
  return (
    /* Using the same warm grey background from the Schedule section */
    <footer className="w-full bg-[#e8e6e1] py-16 sm:py-24 flex flex-col items-center justify-center font-sans relative overflow-hidden">
      
      <div className="flex flex-col items-center text-center px-6">
        
        {/* The Heart Icon with a gentle pulse animation (Champagne Gold) */}
        <a 
          href="https://everloom-ruby.vercel.app/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="mb-6 flex items-center justify-center w-12 h-12 rounded-full bg-[#C5A880] shadow-lg hover:scale-110 transition-transform duration-300 cursor-pointer animate-pulse"
        >
          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </a>

        {/* Designed & Developed By Text */}
        <p className="font-sans text-[0.65rem] sm:text-xs tracking-[0.3em] text-neutral-500 uppercase mb-2">
          Designed & Developed By
        </p>

        {/* EVERLOOM Link with an animated underline on hover (Charcoal Ink) */}
        <a 
          href="https://everloom-ruby.vercel.app/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group relative font-serif text-2xl sm:text-3xl text-ink tracking-[0.1em] transition-colors duration-300 mb-12 inline-block"
        >
          EVERLOOM
          {/* The underline element that grows on hover (Champagne Gold) */}
          <span className="absolute left-0 bottom-[-4px] w-full h-[2px] bg-[#C5A880] transform scale-x-0 origin-left transition-transform duration-500 ease-out group-hover:scale-x-100"></span>
        </a>

        {/* Bottom Script Text */}
        <p className="font-sans text-[0.6rem] sm:text-[0.7rem] tracking-[0.2em] text-neutral-400 uppercase">
          With Love — Est. Forever
        </p>

        {/* Tiny Gold Bottom Dot */}
        <div className="mt-6 w-1.5 h-1.5 rounded-full bg-[#C5A880]/50"></div>
        
      </div>
    </footer>
  )
}

export default Footer