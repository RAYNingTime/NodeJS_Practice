// Status Codes from responses
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Status

// MIME types
// https://developer.mozilla.org/ru/docs/Web/HTTP/Basics_of_HTTP/MIME_types

const http = require('http');

const server = http.createServer((req,res) => {
	res.writeHead(200,{'content-type':'text/html'});
	res.write('<h1>Home Page</h1>');
	res.end();
});

server.listen(5000);