const fs = require("fs");
const crypto = require("crypto");

const start = Date.now();

/*
	process.env.UV_THREADPOOL_SIZE=1; 
	Don't work for me, so I added this functionality in the pachage.json on the start script

	** FOR FUTURE COPY-PASTE **

  "scripts": {
    "start": "set UV_THREADPOOL_SIZE=1 & node event-loop.js"
  },

*/

setTimeout(() => console.log("Timer 1 finished"), 0);
setImmediate(() => console.log("Immediate 1 finished"));

fs.readFile("test-file.txt", () => {
  console.log("I/O finished");
  console.log("---------------------");

  setTimeout(() => console.log("Timer 2 finished"), 0);
  setTimeout(() => console.log("Timer 3 finished"), 3000);

  //Immediate is going to be executed before 0 seconds timeout
  setImmediate(() => console.log("Immediate 2 finished"));

  //Next tick happenes before the next loop phase, and not the entire tick
  process.nextTick(() => console.log("Process.nextTick"));

  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log(Date.now() - start, "Password encrypted");
  });
  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log(Date.now() - start, "Password encrypted");
  });
  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log(Date.now() - start, "Password encrypted");
  });
  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log(Date.now() - start, "Password encrypted");
  });

  //Sync blocking code //

  crypto.pbkdf2Sync("password", "salt", 100000, 1024, "sha512");
  console.log(Date.now() - start, "Sync Password encrypted");

  crypto.pbkdf2Sync("password", "salt", 100000, 1024, "sha512");
  console.log(Date.now() - start, "Sync Password encrypted");

  crypto.pbkdf2Sync("password", "salt", 100000, 1024, "sha512");
  console.log(Date.now() - start, "Sync Password encrypted");

  crypto.pbkdf2Sync("password", "salt", 100000, 1024, "sha512");
  console.log(Date.now() - start, "Sync Password encrypted");
});

//Top level code is going to be executed first
console.log("Hello from top-Level code");
