// GLOBALS - NO WINDOW !!!

// __direname - path to current directory
// __filename - file name
// require    - function to use modules (CommonJS)
// module     - info about current module (file)
// process    - info about env where the program is being executed

console.log(__dirname);
// console.log( __filename);
// console.log(require);

setInterval(() => {
  console.log("hello world");
}, 1000);

//To stop ctrl+C
//To clear put in terminal "clear"
//To test an app "node [name].js"
