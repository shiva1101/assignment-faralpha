const http = require('http');

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/sayHello') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: "Hello User" }));
  } else {
    res.writeHead(404);
    res.end();
  }
});

server.listen(80, () => {
  console.log('Server running on port 80');
});
