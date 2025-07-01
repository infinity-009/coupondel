# Coupondel Frontend App

A React-based coupon and deals application built with Vite, Material-UI, and Redux.

## 🌐 Live Demo

**🚀 App URL:** [https://infinity-009.github.io/coupondel/](https://infinity-009.github.io/coupondel/)

**🏢 Company Homepage:** [https://infinity-009.github.io/coupondel2/](https://infinity-009.github.io/coupondel2/)

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm

### Installation
```bash
cd frontend
npm install --legacy-peer-deps
```

### Development
```bash
npm run dev
```
The app will be available at `http://localhost:8000`

### Build for Production
```bash
npm run build
```

## 📦 Manual Deployment to GitHub Pages

### Step 1: Build the Project
```bash
npm run build
```

### Step 2: Deploy to GitHub Pages
```bash
npm run deploy
```

This will:
1. Build the project
2. Create/update the `gh-pages` branch
3. Deploy the `dist` folder content to GitHub Pages

### Step 3: Enable GitHub Pages
1. Go to your GitHub repository
2. Navigate to Settings → Pages
3. Set Source to "Deploy from a branch"
4. Select `gh-pages` branch
5. Set folder to `/ (root)`
6. Save

Your app will be available at: `https://infinity-009.github.io/coupondel/`

## 🔧 Configuration

The app is configured for GitHub Pages deployment with:
- Base URL: `/coupondel/` (matches repository name)
- Build output: `dist/` directory
- Assets optimization enabled

## 📁 Project Structure

```
src/
├── components/         # React components
│   ├── common/        # Shared components
│   ├── home/          # Home page
│   ├── coupons/       # Coupon listings
│   ├── affiliates/    # Store affiliates
│   └── account/       # User account
├── action/            # Redux actions
├── reducers/          # Redux reducers
├── Images/            # Static images
└── constants/         # App constants
```

## 🛠 Technologies Used

- React 18
- Vite
- Material-UI (MUI)
- Redux + Redux Toolkit
- React Router
- React Material UI Carousel

## 📝 Notes

- Uses legacy peer deps due to Material-UI v4/v5 compatibility
- Optimized for static hosting on GitHub Pages
- Responsive design for mobile and desktop
