// Status Codes from responses
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Status

// MIME types
// https://developer.mozilla.org/ru/docs/Web/HTTP/Basics_of_HTTP/MIME_types

const http = require('http');
const {readFileSync} = require('fs');

// get all files
const homePage = readFileSync('./index.html');

const server = http.createServer((req,res) => {
	// console.log(req.method);
	const url = req.url;

	//home page
	if(url ==='/') {
	res.writeHead(200,{'content-type':'text/html'});
	res.write(homePage);
	res.end();
	} else
	//about page
	if(url ==='/about'){
		res.writeHead(200,{'content-type':'text/html'});
		res.write('<h1>About Page</h1>');
		res.end();
	//404
	} else {
		res.writeHead(404,{'content-type':'text/html'});
		res.write('<h1>404. Page not found</h1>');
		res.end();
	}
});

server.listen(5000);