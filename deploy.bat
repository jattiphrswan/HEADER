@echo off
echo ========================================================
echo   Deploying Header Collection to GitHub Pages
echo ========================================================
echo.

echo [1/3] Building production bundle in dist/ ...
call npm run build
if %errorlevel% neq 0 (
    echo Error building project.
    pause
    exit /b %errorlevel%
)

echo.
echo [2/3] Pushing source code to main branch...
git push origin main

echo.
echo [3/3] Deploying dist folder to gh-pages branch...
call npx gh-pages -d dist

echo.
echo ========================================================
echo   SUCCESS! Deployment complete!
echo   Your live website link:
echo   https://jattiphrswan.github.io/HEADER/
echo ========================================================
echo.
pause
