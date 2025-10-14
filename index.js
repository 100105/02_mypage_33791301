const http = require("http");
const PORT = 8000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <title>About Me</title>
      <style>
        body {
          text-align: center;
          font-family: Arial, sans-serif;
        }
      </style>
  </head>
  <body>
      <h1>Hi, I'm Sara</h1>
      <h2>I'm 20 years old and a student at Goldsmiths. Welcome to my page. </h2>
      <p>There are 6 people in my family, three boys and three girls.</p>
  </body>
  </html>`);
});


server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
