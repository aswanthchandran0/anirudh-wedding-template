import React, { useState, useRef, useEffect } from 'react'
import { weddingInviteData as data } from '../data/invitationConfig'

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef(null)

  useEffect(() => {
    // Try to play automatically when the component mounts (when they open the invitation)
    const playAudio = async () => {
      try {
        if (audioRef.current) {
          await audioRef.current.play()
          setIsPlaying(true)
        }
      } catch (error) {
        // If the browser blocks autoplay, we just wait for the user to click the button
        console.log("Autoplay blocked by browser. Waiting for user interaction.")
        setIsPlaying(false)
      }
    }
    
    playAudio()
  }, [])

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause()
      setIsPlaying(false)
    } else {
      audioRef.current.play()
      setIsPlaying(true)
    }
  }

  return (
    <>
      {/* The invisible audio element */}
      <audio ref={audioRef} src={data.musicUrl} loop />

      {/* The Floating Controller (Bottom Right) */}
      <button
        onClick={togglePlay}
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-[#C5A880] text-white rounded-full shadow-2xl hover:bg-[#b0956d] transition-all duration-300 cursor-pointer"
        aria-label={isPlaying ? "Pause Music" : "Play Music"}
      >
        {isPlaying ? (
          /* Pause Icon */
          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
          </svg>
        ) : (
          /* Play Icon */
          <svg className="w-5 h-5 sm:w-6 sm:h-6 ml-1" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        )}

        {/* Optional: A subtle spinning ring animation when playing */}
        {isPlaying && (
          <span className="absolute inset-0 rounded-full border-2 border-white/30 animate-ping opacity-20 pointer-events-none"></span>
        )}
      </button>
    </>
  )
}

export default MusicPlayer