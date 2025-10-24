# TechStack Academy - Online Training Platform

A complete three-tier web application for managing online tech stack training programs.

## Features
- Multi-page React frontend with responsive design
- RESTful API backend with Node.js & Express
- MongoDB database for persistent storage
- Docker support for easy deployment
- Production-ready configuration

## Tech Stack
- **Frontend**: React, Tailwind CSS, Axios
- **Backend**: Node.js, Express, MongoDB
- **Database**: MongoDB
- **Deployment**: Docker, Docker Compose

## Quick Start

### Using Docker (Recommended)
```bash
docker-compose up -d
```
Frontend: http://localhost:3000
Backend: http://localhost:5000

### Manual Setup

#### Backend
```bash
cd backend
npm install
cp .env.example .env
# Configure your MongoDB URI in .env
npm run dev
```

#### Frontend
```bash
cd frontend
npm install
cp .env.example .env
npm start
```

## Environment Variables

### Backend (.env)
