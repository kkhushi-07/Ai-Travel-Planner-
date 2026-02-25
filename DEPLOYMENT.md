# 🚀 Deployment Guide for INN-O-THON Demo

## Quick Deploy (Recommended for Hackathon)

### Option 1: Vercel (Frontend) + Render (Backend)

#### Deploy Backend First:
1. Go to https://render.com
2. Sign up/Login with GitHub
3. Click "New +" → "Web Service"
4. Connect your GitHub repository
5. Configure:
   - Name: `ai-travel-planner-api`
   - Build Command: `npm install`
   - Start Command: `node server/index.js`
   - Add environment variable (optional): `OPENAI_API_KEY=your_key`
6. Click "Create Web Service"
7. Copy the deployed URL (e.g., `https://ai-travel-planner-api.onrender.com`)

#### Deploy Frontend:
1. Go to https://vercel.com
2. Sign up/Login with GitHub
3. Click "Add New" → "Project"
4. Import your GitHub repository
5. Configure:
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
6. Add Environment Variable:
   - Key: `VITE_API_URL`
   - Value: Your Render backend URL
7. Click "Deploy"

### Option 2: All-in-One with Railway
1. Go to https://railway.app
2. Sign up with GitHub
3. Click "New Project" → "Deploy from GitHub repo"
4. Select your repository
5. Railway will auto-detect and deploy both frontend and backend
6. Add environment variables in settings

## Testing Before Demo

1. Test backend health:
```bash
curl https://your-backend-url.com/api/health
```

2. Test frontend:
- Open your Vercel URL
- Fill the form
- Generate itinerary
- Verify it displays correctly

## Demo Tips for Judges

1. **Show the form** - Explain how users input their preferences
2. **Generate itinerary** - Use a real example (e.g., "Paris, 5 days, $2000, food & culture")
3. **Highlight features**:
   - AI-powered recommendations
   - Budget breakdown
   - Day-by-day planning
   - Downloadable itinerary
4. **Mention scalability** - Can integrate real APIs (Google Places, Weather, etc.)
5. **Show the code** - Clean, well-structured, production-ready

## Troubleshooting

### Backend not responding:
- Check Render logs
- Verify environment variables
- Ensure server is running

### Frontend can't connect to backend:
- Check VITE_API_URL is correct
- Verify CORS is enabled
- Check browser console for errors

### Mock data showing instead of AI:
- This is normal without OpenAI API key
- Mock data is designed for demo purposes
- Add API key to enable real AI generation

## Cost Estimate
- Vercel: FREE
- Render: FREE tier available
- Railway: FREE tier with $5 credit
- OpenAI API: ~$0.002 per request (optional)

Total: $0 for hackathon demo! 🎉
