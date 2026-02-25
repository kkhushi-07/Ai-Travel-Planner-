import { useState } from 'react'
import Header from './components/Header'
import TravelForm from './components/TravelForm'
import ItineraryDisplay from './components/ItineraryDisplay'
import './App.css'

function App() {
  const [itinerary, setItinerary] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleGenerateItinerary = async (formData) => {
    setLoading(true)
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:5000'}/api/generate-itinerary`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      const data = await response.json()
      setItinerary(data.itinerary)
    } catch (error) {
      console.error('Error:', error)
      alert('Failed to generate itinerary. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <TravelForm onSubmit={handleGenerateItinerary} loading={loading} />
        {itinerary && <ItineraryDisplay itinerary={itinerary} />}
      </main>
    </div>
  )
}

export default App
