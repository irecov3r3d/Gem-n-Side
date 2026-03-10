const express = require('express');
const morgan = require('morgan');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware for request logging
app.use(morgan('combined'));

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Main endpoint
app.get('/', (req, res) => {
  res.send('Welcome to Gem-n-Side!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
