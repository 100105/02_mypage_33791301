// Import the built-in HTTP module
const http = require("http");

// Define the port number
const PORT = 8000;

// Create the server
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  
  // Send an HTML response
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <title>About Me</title>
      <style>
          body {
              font-family: Arial, sans-serif;
              background-color: #f7f9fc;
              color: #333;
              text-align: center;
              padding-top: 50px;
          }
          h1 {
              color: #0066cc;
          }
      </style>
  </head>
  <body>
      <h1>Hi, I'm Sara 👋</h1>
      <h2>I'm 20 years old and studying Computer Science at Goldsmiths, University of London.</h2>
      <p>There are 6 people in my family, and I love learning about web development!</p>
  </body>
  </html>`);
});

// Start the server
server.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});
