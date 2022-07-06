const fs = require('fs');
const http = require('http');
const path = require('path');
const url = require('url');

/////////////////////////////////
// FILES

// Blocking, synchronous way
// const textFromFile = fs.readFileSync('./txt/input.txt','utf-8');
// const textOut = `Text from other file is: \n${textFromFile}.\nCreated on ${Date.now()}`;
// fs.writeFileSync('./txt/output.txt',textOut);
// console.log('File written!');

// Non-Blocking, asynchronous way
// fs.readFile('./txt/start.txt','utf-8', (err,data1) => {
// 	if (err) return console.log(`ERROR.`);
// 	fs.readFile(`./txt/${data1}.txt`,'utf-8', (err,data2) => {
// 		console.log(data2);
// 		fs.readFile('./txt/append.txt','utf-8', (err,data3) => {
// 			console.log(data3);

// 			fs.writeFile('./txt/final.txt',`${data2}\n${data3}`,(err)=> {
// 				//This triangle called "Callback hell"
// 				console.log('Your File has been written!');
// 			});
// 		});
// 	});
// });
// console.log(`I'm not really sure that it is going to work...`);

/////////////////////////////////
// SERVER


//Created once
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`,'utf-8');
const dataObj = JSON.parse(data);


const server = http.createServer((req,res) => {
	const pathName = req.url;
	if(pathName === '/' || pathName === '/overview'){
		res.end('This is the OVERVIEW');
	} else if (pathName === '/product'){
		res.end('This is the PRODUCT');
	} else if (pathName === '/api') {
		res.writeHead(200, { 'Content-type': 'application/json'});
		res.end(data);
	}
	else {
		res.writeHead(404, {
			"Content-type": 'text/html',
			'my-own-header': 'hello-world'
		});
		res.end('<h1>ERROR 404</h1>');
	}
});

server.listen(8000, '127.0.0.1', () => {
	console.log('Listening to requests on port 8000');
});
