# ⚡ QUICKSTART - Get Running in 3 Minutes!

## 🌐 Live Demo (Already Deployed!)

**Try it now:** https://ai-travel-planeer.vercel.app

No setup needed - just open and use! 🎉

---

## For Team Members

### First Time Setup
```bash
# 1. Install dependencies (takes ~1 minute)
npm install

# 2. Create environment file
cp .env.example .env

# Done! You're ready to run
```

### Running the App

**Open 2 terminals:**

**Terminal 1 - Backend:**
```bash
npm run server
```
Wait for: "🚀 Server running on port 5000"

**Terminal 2 - Frontend:**
```bash
npm run dev
```
Wait for: "Local: http://localhost:3000"

**Open browser:** http://localhost:3000

### Test It Works
1. Fill form with any values
2. Click "Generate Itinerary"
3. See results appear

✅ If you see an itinerary, everything works!

## For Judges/Reviewers

### View Live Demo
[Add your deployed URL here after deployment]

### Run Locally
```bash
npm install
npm run server &
npm run dev
```
Open http://localhost:3000

## Project Structure
```
ai-travel-planner/
├── src/                    # Frontend React app
│   ├── components/         # UI components
│   ├── App.jsx            # Main app
│   └── main.jsx           # Entry point
├── server/                 # Backend API
│   ├── index.js           # Express server
│   └── aiService.js       # AI logic
├── README.md              # Full documentation
├── SETUP.md               # Detailed setup
├── DEPLOYMENT.md          # Deploy guide
├── PRESENTATION.md        # Demo script
└── package.json           # Dependencies

```

## Key Files to Review

1. **src/App.jsx** - Main application logic
2. **src/components/TravelForm.jsx** - User input form
3. **src/components/ItineraryDisplay.jsx** - Results display
4. **server/aiService.js** - AI generation logic
5. **All CSS files** - Soft green theme styling

## Features to Test

- [ ] Form validation
- [ ] Itinerary generation
- [ ] Budget calculations
- [ ] Responsive design (resize browser)
- [ ] Download/Print functionality
- [ ] Different travel styles
- [ ] Various destinations

## Common Issues

**"Port 5000 already in use"**
- Kill the process: `npx kill-port 5000`
- Or change port in server/index.js

**"Cannot connect to server"**
- Make sure backend is running
- Check http://localhost:5000/api/health

**"Module not found"**
- Run `npm install` again
- Delete node_modules and reinstall

## Need Help?

1. Check README.md for full docs
2. Check SETUP.md for detailed setup
3. Check DEPLOYMENT.md for deploy help
4. All files are well-commented!

---

**Team CODE ALPHA** | Built for INN-O-THON 🚀
