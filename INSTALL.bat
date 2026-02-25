@echo off
echo ========================================
echo AI Travel Planner - CODE ALPHA
echo INN-O-THON Setup Script
echo ========================================
echo.

echo [1/3] Installing dependencies...
call npm install

echo.
echo [2/3] Creating environment file...
if not exist .env (
    copy .env.example .env
    echo .env file created! You can add your OpenAI API key later.
) else (
    echo .env file already exists.
)

echo.
echo [3/3] Setup complete!
echo.
echo ========================================
echo Next Steps:
echo ========================================
echo 1. Open TWO command prompts
echo 2. In first prompt, run:  npm run server
echo 3. In second prompt, run: npm run dev
echo 4. Open browser: http://localhost:3000
echo.
echo For detailed instructions, read START_HERE.md
echo ========================================
echo.
pause
