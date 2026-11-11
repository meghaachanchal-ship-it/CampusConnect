const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables from .env
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Core Middleware
app.use(cors());
app.use(express.json());

// Welcome & Health Check Routes
app.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Welcome to CampusConnect API Server',
    status: 'Running',
    version: '1.0.0'
  });
});

app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'healthy',
    uptime: process.uptime(),
    timestamp: new Date().toISOString()
  });
});

// Start Express Server
app.listen(PORT, () => {
  console.log(`===============================================`);
  console.log(` CampusConnect Backend Server running on port ${PORT}`);
  console.log(` Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(` Health Check: http://localhost:${PORT}/api/health`);
  console.log(`===============================================`);
});