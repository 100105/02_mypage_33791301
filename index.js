const http = require("http");
const PORT = 8000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <title>About Me</title>
      </head>
      <body>
      <h1>Hi, I'm Sara</h1>
      <h2>I'm 20 years old and studying Computer Science at Goldsmiths, University of London.</h2>
      <p>There are 6 people in my family, and I love learning about web development!</p>
  </body>
  </html>`);
});


server.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});
