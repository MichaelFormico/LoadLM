#!/bin/bash

cd backend || { echo "backend folder not found"; exit 1; }
npm install
pm2 delete all
pm2 start ecosystem.config.js --env production
pm2 save
echo "Backend started successfully. Check pm2 logs for more details."

cd .. || { echo "cd .. failed"; exit 1; }

cd frontend || { echo "frontend folder not found"; exit 1; } 
npm install 
export REACT_APP_BACKEND_URL=/api
npm run build
sudo cp -r build/* /var/www/html/
sudo chown -R www-data:www-data /var/www/html/*
sudo chmod -R 755 /var/www/html/*
echo "Build contents successfully copied to /var/www/html"
