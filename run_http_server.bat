@echo off
call npm run build
cd dist
npx http-server -c-1