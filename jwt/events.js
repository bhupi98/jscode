const EventEmitter = require("events");
const event = new EventEmitter();
event.on("bhupi", function () {
  console.log("Hey Im the king of events");
});
event.emit("bhupi1");
