import React from 'react'
import { weddingInviteData as data } from '../../data/invitationConfig'

const WeddingInvite = ({ onOpenInvitation }) => {
  return (
    <div
      onClick={onOpenInvitation}
      className="
        min-h-screen w-full
        bg-ivory text-ink
        flex flex-col items-center
        relative overflow-x-hidden
        font-sans
        cursor-pointer
        select-none
      "
    >
      {/* ============ TOP: VINYL ============ */}
      <div className="w-full flex justify-center mb-4 sm:mb-8 pointer-events-none">
        <img
          src={data.vinylImage}
          alt="Vinyl Record"
          className="w-[80%] max-w-[500px] h-auto opacity-95"
        />
      </div>

      {/* ============ MAIN CONTENT ============ */}
      <div
        className="
          z-10 w-full max-w-[800px] /* Increased max-width for longer names */
          flex flex-col items-center text-center
          gap-6 sm:gap-8 pointer-events-none
          px-4 /* Added padding here so text never touches the edges */
        "
      >
        {/* NAMES SECTION */}
        <div className="flex flex-col items-center gap-1 sm:gap-2 w-full">
          
          {/* Partner 1: Fluid text size. Shrinks on mobile, grows on desktop */}
          <h1 className="font-serif font-light tracking-[1px] sm:tracking-[2px] uppercase text-[2rem] sm:text-[3.5rem] md:text-[4.5rem] leading-tight">
            {data.partner1}
          </h1>

          <span className="font-script text-[2rem] sm:text-[2.5rem] text-neutral-800 -my-2 sm:-my-3 relative z-20">
            {data.conjunction}
          </span>

          {/* Partner 2 */}
          <h1 className="font-serif font-light tracking-[1px] sm:tracking-[2px] uppercase text-[2rem] sm:text-[3.5rem] md:text-[4.5rem] leading-tight">
            {data.partner2}
          </h1>
        </div>

        {/* REQUEST TEXT */}
        <p className="mt-4 sm:mt-8 px-2 text-[0.65rem] sm:text-[0.85rem] tracking-[2px] sm:tracking-[3px] leading-[1.8] uppercase font-light text-neutral-700">
          {data.requestTextLine1}
          <br />
          {data.requestTextLine2}
        </p>

        {/* DATE */}
        <h2 className="font-serif text-[1.1rem] sm:text-[1.5rem] tracking-[1px] sm:tracking-[2px] font-normal my-2 sm:my-4">
          {data.date}
        </h2>

        {/* LOCATION */}
        <p className="px-2 text-[0.65rem] sm:text-[0.85rem] tracking-[2px] sm:tracking-[3px] leading-[1.8] uppercase font-light text-neutral-700">
          {data.venueName}
          <br />
          {data.venueAddress}
        </p>

        {/* FOOTER SCRIPT & OPEN TEXT */}
        <div className="mt-10 sm:mt-16 flex flex-col items-center gap-6 pb-12">
          <span className="font-script text-[1.8rem] sm:text-[2.5rem] text-neutral-800">
            {data.footerScript}
          </span>
          
          {/* THE "OPEN" TEXT */}
          <span className="font-sans text-[0.65rem] sm:text-xs uppercase tracking-[4px] text-neutral-500 animate-pulse mt-4">
            open
          </span>
        </div>
      </div>

      {/* ============ BOTTOM: SAXOPHONE ============ */}
      <div className="w-full flex justify-end pr-[5%] mt-auto pointer-events-none">
        <img
          src={data.saxophoneImage}
          alt="Saxophone Illustration"
          className="w-[50%] sm:w-[35%] max-w-[250px] h-auto opacity-95"
        />
      </div>
    </div>
  )
}

export default WeddingInvite