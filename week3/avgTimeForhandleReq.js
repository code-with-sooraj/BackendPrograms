const express = require('express');
const app = express();

let totalRequestTime = 0;
let requestCount = 0;

// Middleware to measure request time
app.use((req, res, next) => {
  const start = Date.now();

  res.on('finish', () => {
    const duration = Date.now() - start;
    totalRequestTime += duration;
    requestCount++;
    console.log(`Request ${requestCount} took ${duration} ms`);
  });

  next();
});

// Example route
app.get('/', (req, res) => {
  const averageTime = requestCount ? (totalRequestTime / requestCount).toFixed(2) : 0;
  res.send(`Total requests: ${requestCount}, Average request time: ${averageTime} ms`);
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
