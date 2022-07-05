const fs = require('fs');

const textFromFile = fs.readFileSync('./txt/input.txt','utf-8');

const textOut = `Text from other file is: \n${textFromFile}.\nCreated on ${Date.now()}`;
fs.writeFileSync('./txt/output.txt',textOut);
console.log('File written!');