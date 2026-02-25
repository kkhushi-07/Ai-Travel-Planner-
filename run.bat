@echo off
echo ========================================
echo AI Travel Planner - CODE ALPHA
echo Starting Application...
echo ========================================
echo.

echo Starting Backend Server...
start cmd /k "npm run server"

timeout /t 3 /nobreak > nul

echo Starting Frontend...
start cmd /k "npm run dev"

echo.
echo ========================================
echo Application is starting!
echo ========================================
echo Backend: http://localhost:5000
echo Frontend: http://localhost:3000
echo.
echo Two windows will open - keep both running!
echo ========================================
