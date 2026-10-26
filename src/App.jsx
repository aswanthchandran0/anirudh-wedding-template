import { useState } from 'react'
import './App.css'
import WeddingInvite from './components/WeddingInvite/WeddingInvite'
import InvitationDetails from './pages/InvitationDetails'

function App() {
  const [currentPage, setCurrentPage] = useState('cover')

  return (
    <>
      {currentPage === 'cover' ? (
        <WeddingInvite onOpenInvitation={() => setCurrentPage('details')} />
      ) : (
        <InvitationDetails onBack={() => setCurrentPage('cover')} />
      )}
    </>
  )
}

export default App