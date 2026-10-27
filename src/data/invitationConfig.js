import vinyl from '../assets/vinyl.png'
import saxophone from '../assets/saxophone.png'
import heroPhoto from '../assets/couple.png'
import gallery1 from '../assets/couple.png'
import gallery2 from '../assets/couple.png'
import gallery3 from '../assets/couple.png'
import venuePhoto from '../assets/venuephoto.jpg'
import dress1 from '../assets/dress1.jpeg'
import dress2 from '../assets/dress2.jpeg'
import dress3 from '../assets/dress3.jpg'
import music from '../assets/music.mp3'
// import gallery4 from '../assets/couple.png'

export const weddingInviteData = {
  // Cover Page Data (No Changes)
  partner1: "Anirudh Ravichander",
  partner2: "Kavya Maran",
  conjunction: "and",
  requestTextLine1: "REQUEST THE PLEASURE OF YOUR COMPANY",
  requestTextLine2: "AT THEIR WEDDING CELEBRATION",
  date: "30TH OCTOBER 2023 | 3PM",
  venueName: "ANYWHERE HOTEL",
  venueAddress: "123 ANYWHERE STREET., ANY CITY",
  footerScript: "Reception to Follow",
  vinylImage: vinyl,
  saxophoneImage: saxophone,

  // Main Invitation Page Data
  heroImage: heroPhoto,
  topTitle: "THE WEDDING OF",
  scriptNames: "Anirudh & Kavya",
   // 👈 NEW: Mysterious Teaser Data (No exact date/location)
heroQuote: "Two souls, one heart. Bound by love, laughter, and a lifetime of shared dreams.",
  heroSubtext: "TOGETHER WITH THEIR FAMILIES", 
  
  // 👈 NEW: Warm Invitation Text
  inviteHeading: "An Intimate Celebration",
  inviteMessage: "With hearts full of joy, we invite you to share in the beginning of our forever. We would be honored to have you by our side as we say 'I do' surrounded by the people we love most.",

  revealPrompt: "Scratch to reveal the date",
  revealDate: "NOVEMBER 20, 2024",
  revealTime: "12:00 PM",

  galleryImages: [gallery1, gallery2, gallery3,gallery3,gallery3], // Add 4 images
  galleryTitle: "Our Love Story", 
  gallerySubtitle: "A journey of love, laughter, and forever.",

   // 👈 Schedule of Events Data
  scheduleTitle: "Schedule of Events",
  scheduleEvents: [
    { time: "16:30", title: "Opening of the doors" },
    { time: "17:00", title: "Ceremony" },
    { time: "18:00", title: "Cocktail and dancing time" },
    { time: "20:00", title: "Dinner" },
    { time: "21:00", title: "Party and Open Bar" },
    { time: "23:00", title: "End of the celebration" }
  ]
,
  venueTitle: "Wedding Venue",
  venueImage: venuePhoto,

   dressCodeTitle: "Dress Code",
  dressCodeSubtitle: "Traditional Elegance",
  dressCodeDescription: "We kindly request our guests to embrace the beauty of traditional Indian attire. Think rich silks, vibrant colors, and elegant embroidery to celebrate with us.",
  dressCodeImages: [dress1, dress2, dress3],
  musicUrl:music, 
}