var http = require("http");
const port = 8000;
//test now pls
http.createServer(function(req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    //text written under
    res.end(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>About Me</title>
</head>
<body>
    <h1>My name is Sara.</h1>
    <h2>I'm twenny</h2>
    <p>I have 6 people in my family and they are all annoying.</p>
</body>
</html>`);
}).listen(port, function() {
    console.log(`Node server is running on port ${port}...`);
});
