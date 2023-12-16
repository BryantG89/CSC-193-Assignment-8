'use strict';
const express = require('express');
const app = express();


// define all endpoints here
app.use(express.static('public'));


// first Endpoint to hello.js
app.get('/hello', function (req, res) 
{
  res.type('text');
  res.send('Hello World!');
});
  

// endpoint # 1 to calculate circle area and circumference
app.get('/math/circle/:r', function(req, res) 
{
  // get radius from URL parameter
  const radius = parseFloat(req.params.r);

  // Check if the radius is a valid number
  if (isNaN(radius) || radius <= 0) 
  {
    // If the radius is not valid, send a 400 Bad Request response
    res.status(400).json({ error: 'Invalid radius provided' });
  } 
  else 
  {
    // Calculate the area and circumference
    const area = Math.PI * radius * radius;
    const circumference = Math.PI * 2 * radius;

    // Send a JSON response with the calculated values
    res.json({ area: area, circumference: circumference });
    // res.type("text");
    // res.send(`Area: ${area}, Circumference: ${circumference}`);
  }
});


// app.use(express.static('public'));
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => 
{
  console.log('server is running on http://localhost:${PORT}');
});

module.exports = app;
