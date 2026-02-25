import './ItineraryDisplay.css'

function ItineraryDisplay({ itinerary }) {
  return (
    <div className="itinerary-container">
      <h2 className="itinerary-title">🎉 Your Personalized Itinerary</h2>
      
      <div className="itinerary-summary">
        <div className="summary-card">
          <span className="summary-icon">📍</span>
          <div>
            <p className="summary-label">Destination</p>
            <p className="summary-value">{itinerary.destination}</p>
          </div>
        </div>
        <div className="summary-card">
          <span className="summary-icon">📅</span>
          <div>
            <p className="summary-label">Duration</p>
            <p className="summary-value">{itinerary.duration} Days</p>
          </div>
        </div>
        <div className="summary-card">
          <span className="summary-icon">💰</span>
          <div>
            <p className="summary-label">Budget</p>
            <p className="summary-value">₹{itinerary.budget}</p>
          </div>
        </div>
      </div>

      <div className="days-container">
        {itinerary.days.map((day, index) => (
          <div key={index} className="day-card">
            <div className="day-header">
              <h3>Day {day.day}</h3>
              <span className="day-theme">{day.theme}</span>
            </div>
            <div className="activities">
              {day.activities.map((activity, actIndex) => (
                <div key={actIndex} className="activity">
                  <span className="activity-time">{activity.time}</span>
                  <div className="activity-details">
                    <h4>{activity.title}</h4>
                    <p>{activity.description}</p>
                    <span className="activity-cost">💵 ₹{activity.estimatedCost}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="tips-section">
        <h3>💡 Travel Tips</h3>
        <ul className="tips-list">
          {itinerary.tips.map((tip, index) => (
            <li key={index}>{tip}</li>
          ))}
        </ul>
      </div>

      <button className="download-btn" onClick={() => window.print()}>
        📥 Download Itinerary
      </button>
    </div>
  )
}

export default ItineraryDisplay
