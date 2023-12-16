"use strict";
const express = require("express");
const app = express();

// Serve static files from the 'public' directory
app.use(express.static("public"));

// First endpoint to hello.js
// Test first endpoint at: http://localhost:8000/hello.html
app.get("/hello", function (req, res) 
{
  res.type("text");
  res.send("Hello World!");
});

// Define endpoint for excercise 1 here: Splendid Circles
// Test endpoint #1 at: http://localhost:8000/math/circle/10
app.get("/math/circle/:r", function (req, res) 
{
  const radius = parseFloat(req.params.r);

 if (isNaN(radius) || radius <= 0) 
 {
        res.status(400).json({ error: 'Invalid radius provided' });
    } else 
    {
        const area = Math.PI * radius * radius;
        const circumference = Math.PI * 2 * radius;
        res.json({ area: area, circumference: circumference });
    }
});

// Define endpoint for excercise 2 here: Hello, you!
// Test endpoint #2 at:  http://localhost:8000/hello/Bryant/Galo
app.get("/hello/:firstName/:lastName", function (req, res) 
{
  const firstName = req.params.firstName;
  const lastName = req.params.lastName;

  if (firstName && lastName) 
  {
    res.type("text");
    res.send(`Hello ${req.params["firstName"]} ${req.params["lastName"]}`);
  }
  else
  {
    res.status(400).send("Missing Required GET parameters: first, last");
  }
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;