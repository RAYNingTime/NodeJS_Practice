const EventEmitter = require("events");
const http = require("http");

// Sales - parent class
// EventEmitter - super class
class Sales extends EventEmitter {
  constructor() {
    // Running super() we then get access to all the methods of the parent class.
    super();
  }
}

const myEmitter = new Sales();

// Observer
// Objects that observe the emitter and wait until it emits the newSale event
myEmitter.on("newSale", () => {
  console.log("There was a new sale!");
});

// Observer
// Objects that observe the emitter and wait until it emits the newSale event
myEmitter.on("newSale", () => {
  console.log("Costumer name: Jonas");
});

myEmitter.on("newSale", (stock) => {
  console.log(`There are now ${stock} items left in stock.`);
});

// Emitter
// Object that emits the events
myEmitter.emit("newSale", 9);

//////////////

const server = http.createServer();

server.on("request", (req, res) => {
  console.log("Request recieved!");
  console.log(req.url);
  res.end("Request recieved!");
});

server.on("request", (req, res) => {
  console.log("Another request");
});

server.on("close", () => {
  console.log("Server closed!");
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Waiting for requests...");
});
