import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { generateItinerary } from './aiService.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

app.post('/api/generate-itinerary', async (req, res) => {
  try {
    const { destination, duration, budget, interests, travelStyle } = req.body
    
    const itinerary = await generateItinerary({
      destination,
      duration: parseInt(duration),
      budget: parseInt(budget),
      interests,
      travelStyle
    })
    
    res.json({ success: true, itinerary })
  } catch (error) {
    console.error('Error generating itinerary:', error)
    res.status(500).json({ success: false, error: error.message })
  }
})

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'AI Travel Planner API is running' })
})

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`)
})
