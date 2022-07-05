const fs = require('fs');

// Blocking, synchronous way
// const textFromFile = fs.readFileSync('./txt/input.txt','utf-8');
// const textOut = `Text from other file is: \n${textFromFile}.\nCreated on ${Date.now()}`;
// fs.writeFileSync('./txt/output.txt',textOut);
// console.log('File written!');

// Non-Blocking, asynchronous way
fs.readFile('./txt/start.txt','utf-8', (err,data1) => {
	if (err) return console.log(`ERROR.`);
	fs.readFile(`./txt/${data1}.txt`,'utf-8', (err,data2) => {
		console.log(data2);
		fs.readFile('./txt/append.txt','utf-8', (err,data3) => {
			console.log(data3);
			
			fs.writeFile('./txt/final.txt',`${data2}\n${data3}`,(err)=> {
				//This triangle called "Callback hell"
				console.log('Your File has been written!');
			});
		});
	});
});

console.log(`I'm not really sure that it is going to work...`);