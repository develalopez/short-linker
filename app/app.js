const express = require('express')
const rateLimit = require('express-rate-limit');
const path = require('path');

const app = express()
const port = process.env.PORT || 8080;

// Set up rate limiter: maximum of five requests per minute
const limiter = rateLimit({
  windowMs: 1*60*1000, // 1 minute
  max: 5
});

// Apply rate limiter to all requests
app.use(limiter);

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, './src/index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
