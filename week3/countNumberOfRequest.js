const express = require('express');
const app = express();

let requestCount = 0;

// Middleware to count requests
app.use((req, res, next) => {
  requestCount++;
  console.log(`Request count: ${requestCount}`);
  next();
});

// Example route
app.get('/', (req, res) => {
  res.send(`Total requests: ${requestCount}`);
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
