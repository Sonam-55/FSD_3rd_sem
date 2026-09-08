const EventEmitter = require("node:events");

const emitter = new EventEmitter();

emitter.on("greet", (name) => {
    console.log(`Hello ${name}!Welcome to the world of Node.js`);
});

emitter.on("exit", () => {
    console.log("Program exited");
});

emitter.emit("greet", "Sonam, 2nd year! ");
emitter.emit("exit");