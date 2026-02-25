# 🌍 AI Travel Planner

**Team:** CODE ALPHA  
**Hackathon:** INN-O-THON  
**Track:** Innovation Track - Traveling/Tourism

## 🎯 Problem Statement
AI-Based Travel Itinerary Planner: Generate personalized travel plans using preferences and budget.

## ✨ Features
- 🤖 AI-powered itinerary generation
- 💰 Budget-based recommendations
- 🎨 Beautiful soft green UI
- 📱 Fully responsive design
- 📥 Downloadable itineraries
- ⚡ Fast and intuitive

## 🌐 Live Demo

**Try it now:** https://ai-travel-planeer.vercel.app

**API:** https://ai-travel-planeer.onrender.com

**GitHub:** https://github.com/Mayankk88/Ai-Travel-Planeer

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <your-repo-url>
cd ai-travel-planner
```

2. Install dependencies
```bash
npm install
```

3. Create `.env` file
```bash
cp .env.example .env
```

4. (Optional) Add OpenAI API key to `.env`
```
OPENAI_API_KEY=your_key_here
```
Note: The app works without API key using mock data for demo!

### Running Locally

1. Start the backend server:
```bash
npm run server
```

2. In a new terminal, start the frontend:
```bash
npm run dev
```

3. Open http://localhost:3000

## 📦 Deployment

### Frontend (Vercel)
1. Push code to GitHub
2. Import project in Vercel
3. Set build command: `npm run build`
4. Set output directory: `dist`
5. Deploy!

### Backend (Render/Railway)
1. Create new Web Service
2. Connect GitHub repo
3. Set build command: `npm install`
4. Set start command: `npm run server`
5. Add environment variable: `OPENAI_API_KEY` (optional)
6. Deploy!

### Update Frontend API URL
After backend deployment, update `VITE_API_URL` in Vercel environment variables.

## 🛠️ Tech Stack
- **Frontend:** React, Vite
- **Backend:** Node.js, Express
- **AI:** OpenAI API (optional)
- **Styling:** Pure CSS with soft green theme
