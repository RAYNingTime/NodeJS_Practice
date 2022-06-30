// Status Codes from responses
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Status

// MIME types
// https://developer.mozilla.org/ru/docs/Web/HTTP/Basics_of_HTTP/MIME_types

const http = require('http');
const {readFileSync} = require('fs');

// get all files
const homePage = readFileSync('./navbar-app/index.html');
const homeStyles = readFileSync('./navbar-app/styles.css');
const homeImage = readFileSync('./navbar-app/logo.svg');
const homeLogic = readFileSync('./navbar-app/browser-app.js');

const server = http.createServer((req,res) => {
	// console.log(req.method);
	const url = req.url;

	// home page
	if(url ==='/') {
	res.writeHead(200,{'content-type':'text/html'});
	res.write(homePage);
	res.end();
	} 
	// styles
	else if(url ==='/styles.css'){
		res.writeHead(200,{'content-type':'text/css'});
		res.write(homeStyles);
		res.end();
	}
	// image/logo
	else if(url ==='/logo.svg'){
		res.writeHead(200,{'content-type':'image/svg+xml'});
		res.write(homeImage);
		res.end();
	}
	//logic
	else if(url ==='/browser-app.js'){
		res.writeHead(200,{'content-type':'text/javascript'});
		res.write(homeLogic);
		res.end();
	}
	//404
	else {
		res.writeHead(404,{'content-type':'text/html'});
		res.write('<h1>404. Page not found</h1>');
		res.end();
	}
});

server.listen(5000);