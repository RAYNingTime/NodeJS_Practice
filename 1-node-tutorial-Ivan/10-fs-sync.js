const { readFileSync, writeFileSync } = require("fs");

console.log("start");

const first = readFileSync("./content/first.txt", "utf-8");
const second = readFileSync("./content/second.txt", "utf-8");

writeFileSync(
  "./content/result-sync.txt",
  `Here is the result: ${first}, ${second}`,
  //To print something two times you can use flag a
  { flag: "a" }
);

console.log("done with this task");
console.log("starting the next one");
