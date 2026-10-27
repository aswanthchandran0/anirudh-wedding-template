import React, { useEffect } from 'react'
import { weddingInviteData as data } from '../data/invitationConfig'
import ScratchCard from '../components/ScratchCard'
import FallingNotes from '../components/FallingNotes'
import Gallery from '../components/Gallery' // 👈 Import the new component
import Schedule from '../components/Schedule'
import Venue from '../components/Venue'
import DressCode from '../components/DressCode'
import Footer from '../components/Footer'
import MusicPlayer from '../components/MusicPlayer'
import PhotoMemories from '../components/PhotoMemories'

const InvitationDetails = ({ onBack, onReveal }) => {

    useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' // 'instant' ensures it doesn't smooth-scroll from the bottom
    })
  }, [])
  
  const googleCalendarUrl = () => {
    const startDate = data.calendarStart || "20241120T120000Z";
    const endDate = data.calendarEnd || "20241120T160000Z";
    const title = encodeURIComponent(data.calendarTitle || "Our Wedding");
    const details = encodeURIComponent(data.calendarDescription || "We can't wait to celebrate with you!");
    const location = encodeURIComponent(data.calendarLocation || "Anywhere Hotel");
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startDate}/${endDate}&details=${details}&location=${location}`;
  }

  return (
    <div className="w-full bg-ivory font-sans flex flex-col overflow-x-hidden">
      
      {/* SECTION 1: HERO IMAGE */}
      <div className="relative h-screen w-full overflow-hidden bg-black">
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <img src={data.heroImage} alt="Wedding Couple" className="w-full h-full object-cover object-center animate-slow-zoom sepia-[0.15]" />
        </div>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-x-0 bottom-0 h-96 bg-gradient-to-t from-black via-black/80 to-transparent z-10"></div>
        <FallingNotes className="text-white/30" />
        <div className="relative z-20 flex flex-col justify-between h-full w-full max-w-[800px] mx-auto p-6 sm:p-12">
          <div className="flex flex-col items-center text-white mt-4 sm:mt-8 animate-fade-up opacity-0">
            <h1 className="font-serif text-[2.5rem] sm:text-[4rem] tracking-[0.1em] uppercase leading-none drop-shadow-lg">{data.topTitle}</h1>
            <p className="font-sans text-[0.65rem] sm:text-sm tracking-[0.3em] uppercase mt-3 sm:mt-4 font-semibold drop-shadow-md text-white/90">{data.heroSubtext}</p>
          </div>
          <div className="flex flex-col items-center text-white text-center pb-24 sm:pb-32 w-full">
            <h2 className="font-script text-[3.5rem] sm:text-[5rem] lg:text-[6rem] leading-none mb-4 sm:mb-6 text-white drop-shadow-2xl animate-fade-up opacity-0 delay-300">{data.scriptNames}</h2>
            <div className="max-w-[450px] flex flex-col items-center px-4 animate-fade-up opacity-0 delay-500">
              <span className="text-white/60 text-sm mb-2 drop-shadow-md">♦</span>
              <p className="font-sans text-[0.7rem] sm:text-xs tracking-[0.2em] leading-[2] uppercase text-white font-semibold drop-shadow-md text-balance">{data.heroQuote}</p>
            </div>
            <div className="mt-12 animate-bounce flex flex-col items-center opacity-70">
              <svg className="w-5 h-5 text-white drop-shadow-md" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 2: SCRATCH CARD */}
      <div className="w-full bg-ivory text-ink pt-20 pb-16 px-6 sm:pt-28 sm:pb-24 -mt-10 relative z-30 flex flex-col items-center justify-center text-center overflow-hidden shadow-2xl">
        <div className="max-w-[600px] flex flex-col items-center relative z-10">
          <h3 className="font-script text-[3rem] sm:text-[4rem] text-neutral-800 mb-8 leading-none">{data.inviteHeading}</h3>
          <p className="font-sans text-[0.8rem] sm:text-[0.9rem] text-neutral-600 leading-loose tracking-[2px] uppercase font-light mb-12">{data.inviteMessage}</p>

          <div className="flex flex-col items-center mb-6">
            <h4 className="font-serif text-2xl text-ink uppercase tracking-[0.1em] mb-2">The Big Reveal</h4>
            <p className="font-sans text-[0.7rem] text-neutral-500 tracking-[0.2em] uppercase">Scratch the heart to reveal the date</p>
          </div>

          <ScratchCard 
            date={data.revealDate} 
            time={data.revealTime} 
            onComplete={onReveal} 
          />

          <div className="mt-12">
            <a 
              href={googleCalendarUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#C5A880] text-neutral-900 rounded-full text-[0.65rem] sm:text-xs tracking-[0.2em] uppercase font-bold shadow-md hover:bg-[#b0956d] hover:shadow-lg transition-all cursor-pointer"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
              add to calendar
            </a>
          </div>

          
         
        </div>
      </div>

      {/* =========================================
          SECTION 3: THE GALLERY COMPONENT
          ========================================= */}
      <Gallery />

            {/* =========================================
          SECTION 4: SCHEDULE OF EVENTS
          ========================================= */}
      <Schedule />

 {/* =========================================
          SECTION 5: WEDDING VENUE
          ========================================= */}
      <Venue />
      <DressCode />
       <PhotoMemories />
        <Footer />
     <MusicPlayer />
    </div>
  )
}

export default InvitationDetails