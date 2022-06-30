const http = require('http');

const server = http.createServer((req,res) => {
	res.end('Welcome to our home page');
	console.log('user hit the server');
});

server.listen(5000);