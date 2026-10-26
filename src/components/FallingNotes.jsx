import React from 'react'

const FallingNotes = () => {
  // We define different start positions, sizes, and delays to make it look organic
  const notes = [
    { left: '10%', size: 24, delay: '0s', duration: '18s' },
    { left: '25%', size: 16, delay: '3s', duration: '22s' },
    { left: '50%', size: 30, delay: '1s', duration: '15s' },
    { left: '75%', size: 20, delay: '5s', duration: '20s' },
    { left: '90%', size: 28, delay: '2s', duration: '16s' },
    { left: '40%', size: 18, delay: '7s', duration: '25s' },
  ]

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
      {notes.map((note, index) => (
        <div
          key={index}
          className="absolute animate-float-down text-white/40"
          style={{
            left: note.left,
            animationDelay: note.delay,
            animationDuration: note.duration,
          }}
        >
          {/* SVG Music Note (Eighth Note) */}
          <svg width={note.size} height={note.size} viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
          </svg>
        </div>
      ))}
    </div>
  )
}

export default FallingNotes