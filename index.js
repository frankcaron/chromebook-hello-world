const http = require('http');
const PORT = process.env.PORT || 5000;

// create a simple server
let server = http.createServer(function (req, res) {
 
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    res.write('hello heroku from my chromebook!', 'utf-8');
    res.end();

});

server.listen(PORT, () => {
  console.log(`Server running at on port: ${PORT}`);
});