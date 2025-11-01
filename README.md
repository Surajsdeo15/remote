# Remote Application - Microfrontend Architecture

This is the **Remote Application** built with **Create React App (CRA)** that exposes components via Module Federation.

## 🚀 Quick Start

### Development
```bash
npm install
npm start
```
Runs on http://localhost:3001

### Production Build
```bash
npm run build
npm run serve
```

## 📦 Features

- Create React App (CRA) + TypeScript
- Module Federation plugin (CRACO)
- React Router for routing
- Exposes App and Profile components
- Standalone application

## 🔧 Environment Variables

Create `.env` file (see `.env.example` for reference):

```env
REACT_APP_NAME=Remote Application
PORT=3001
BROWSER=none
REACT_APP_MODULE_FEDERATION_NAME=remote
REACT_APP_REMOTE_ENTRY_FILE=remoteEntry.js
REACT_APP_API_URL=https://dummyjson.com
REACT_APP_ENV=development
REACT_APP_REMOTE_URL=http://localhost:3001
REACT_APP_ALLOWED_ORIGINS=http://localhost:3000
```

## 📝 Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm run serve` - Serve production build
- `npm test` - Run tests

## 🚢 Deployment

### Deploy to Vercel

1. Push this repository to GitHub
2. Import project in Vercel
3. Set environment variables in Vercel dashboard
4. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `build`
5. Deploy!

**Important**: Deploy this remote app FIRST before deploying the host app!

See [DEPLOYMENT.md](../DEPLOYMENT.md) for detailed instructions.

## 📁 Project Structure

```
remote/
├── src/
│   ├── App.tsx
│   ├── Profile.tsx
│   ├── bootstrap.tsx
│   └── index.tsx
├── craco.config.js
└── package.json
```

## 🔗 Module Federation

This app exposes:
- `./App` - Main application component
- `./Profile` - Profile page component

These components are consumed by the host application via Module Federation.
