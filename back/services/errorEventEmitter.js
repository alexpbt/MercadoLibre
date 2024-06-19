import EventEmitter from "events";
const errorLogger = new EventEmitter();

errorLogger.on("errorLogged", (errorMessage) => {
	console.log(`Error logged: ${errorMessage}`);
});

errorLogger.emit("errorLogged", "error 404");
