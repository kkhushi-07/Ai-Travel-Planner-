import axios from 'axios'

export async function generateItinerary(data) {
  const { destination, duration, budget, interests, travelStyle } = data
  
  // If OpenAI API key is available, use it
  if (process.env.OPENAI_API_KEY) {
    return await generateWithOpenAI(data)
  }
  
  // Fallback to mock data for demo purposes
  return generateMockItinerary(data)
}

async function generateWithOpenAI(data) {
  const { destination, duration, budget, interests, travelStyle } = data
  
  const prompt = `Create a detailed ${duration}-day travel itinerary for ${destination} with a budget of ₹${budget} INR. 
  The traveler is interested in: ${interests}. 
  Travel style: ${travelStyle}.
  All costs should be in Indian Rupees (₹).
  
  Return a JSON object with this structure:
  {
    "destination": "${destination}",
    "duration": ${duration},
    "budget": ${budget},
    "days": [
      {
        "day": 1,
        "theme": "Day theme",
        "activities": [
          {
            "time": "09:00 AM",
            "title": "Activity name",
            "description": "Activity description",
            "estimatedCost": 5000
          }
        ]
      }
    ],
    "tips": ["Tip 1", "Tip 2", "Tip 3"]
  }`

  try {
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-3.5-turbo',
        messages: [
          { role: 'system', content: 'You are a travel planning expert for India. Always respond with valid JSON. All costs must be in Indian Rupees (₹).' },
          { role: 'user', content: prompt }
        ],
        temperature: 0.7
      },
      {
        headers: {
          'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
          'Content-Type': 'application/json'
        }
      }
    )
    
    const content = response.data.choices[0].message.content
    return JSON.parse(content)
  } catch (error) {
    console.error('OpenAI API error:', error.message)
    return generateMockItinerary(data)
  }
}

function generateMockItinerary(data) {
  const { destination, duration, budget, interests } = data
  
  const days = []
  const themes = ['Arrival & Exploration', 'Cultural Immersion', 'Adventure Day', 'Relaxation', 'Shopping & Cuisine', 'Hidden Gems', 'Departure']
  
  for (let i = 1; i <= duration; i++) {
    days.push({
      day: i,
      theme: themes[(i - 1) % themes.length],
      activities: [
        {
          time: '09:00 AM',
          title: `Morning ${interests.split(',')[0]?.trim() || 'sightseeing'} tour`,
          description: `Explore the best ${interests.split(',')[0]?.trim() || 'attractions'} ${destination} has to offer`,
          estimatedCost: Math.round(budget * 0.1)
        },
        {
          time: '01:00 PM',
          title: 'Local cuisine experience',
          description: `Enjoy authentic local food at a popular restaurant in ${destination}`,
          estimatedCost: Math.round(budget * 0.05)
        },
        {
          time: '04:00 PM',
          title: `${interests.split(',')[1]?.trim() || 'Cultural'} activity`,
          description: `Immerse yourself in local ${interests.split(',')[1]?.trim() || 'culture'} and traditions`,
          estimatedCost: Math.round(budget * 0.08)
        },
        {
          time: '07:00 PM',
          title: 'Evening entertainment',
          description: `Experience the nightlife and entertainment scene of ${destination}`,
          estimatedCost: Math.round(budget * 0.07)
        }
      ]
    })
  }
  
  return {
    destination,
    duration,
    budget,
    days,
    tips: [
      `Best time to visit ${destination} is during spring or fall for pleasant weather`,
      'Book accommodations in advance to get better deals',
      'Try local street food for authentic and budget-friendly meals',
      'Use public transportation to save money and experience local life',
      'Learn a few basic phrases in the local language'
    ]
  }
}
