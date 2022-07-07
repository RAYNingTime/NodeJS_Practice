// on and emit methods
// keep track of the order
// additional arguments
// buld-in modules utilize it

const EventEmitter = require("events");

const customEmitter = new EventEmitter();

// on - listen for an event
// emit - emit(Генерировать) an event
customEmitter.on("response", (name, id) => {
  console.log(` data recieve ${name} with id:${id} `);
});

customEmitter.on("response", () => {
  console.log(` some other logic here `);
});

// '.emit' MUST be AFTER '.on'
customEmitter.emit("response", "john", 34);
// ---------------   /\ Call --- /\ Arguments
