import { useState } from 'react'
import './TravelForm.css'

function TravelForm({ onSubmit, loading }) {
  const [formData, setFormData] = useState({
    destination: '',
    duration: '',
    budget: '',
    interests: '',
    travelStyle: 'balanced'
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(formData)
  }

  return (
    <div className="form-container">
      <h2 className="form-title">Plan Your Perfect Trip</h2>
      <form onSubmit={handleSubmit} className="travel-form">
        <div className="form-group">
          <label htmlFor="destination">Destination</label>
          <input
            type="text"
            id="destination"
            name="destination"
            value={formData.destination}
            onChange={handleChange}
            placeholder="e.g., Paris, Tokyo, New York"
            required
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="duration">Duration (days)</label>
            <input
              type="number"
              id="duration"
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              placeholder="e.g., 5"
              min="1"
              max="30"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="budget">Budget (₹ INR)</label>
            <input
              type="number"
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              placeholder="e.g., 50000"
              min="1000"
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="interests">Interests</label>
          <input
            type="text"
            id="interests"
            name="interests"
            value={formData.interests}
            onChange={handleChange}
            placeholder="e.g., food, culture, adventure, shopping"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="travelStyle">Travel Style</label>
          <select
            id="travelStyle"
            name="travelStyle"
            value={formData.travelStyle}
            onChange={handleChange}
          >
            <option value="budget">Budget-Friendly</option>
            <option value="balanced">Balanced</option>
            <option value="luxury">Luxury</option>
          </select>
        </div>

        <button type="submit" className="submit-btn" disabled={loading}>
          {loading ? '✨ Generating Your Itinerary...' : '🚀 Generate Itinerary'}
        </button>
      </form>
    </div>
  )
}

export default TravelForm
