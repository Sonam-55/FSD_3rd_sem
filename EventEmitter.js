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
const EventEmitter1 = require("node:events");

const Button = class extends EventEmitter1 {};
const button = new Button();

button.on("click", () => {
    console.log("Button clicked");
});
button.on("mouseover", () => {
    console.log("Mouse over button");
});
button.emit("click");
button.emit("mouseover");