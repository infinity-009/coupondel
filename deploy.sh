#!/bin/bash

echo "🚀 Building Coupondel Frontend for GitHub Pages..."

# Navigate to frontend directory
cd frontend

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install --legacy-peer-deps
fi

# Build the project
echo "🔨 Building project..."
npm run build

# Deploy to GitHub Pages
echo "🌐 Deploying to GitHub Pages..."
npm run deploy

echo "✅ Deployment complete!"
echo ""
echo "🌐 Your app is now live at:"
echo "   https://mallikarjunreddy3015.github.io/coupondel/"
echo ""
echo "🏢 Company Homepage:"
echo "   https://infinity-009.github.io/coupondel2/"
echo ""
echo "Don't forget to enable GitHub Pages in your repository settings:"
echo "1. Go to Settings → Pages"
echo "2. Set Source to 'Deploy from a branch'"
echo "3. Select 'gh-pages' branch"
echo "4. Set folder to '/ (root)'"
