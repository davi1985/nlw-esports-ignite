import { App } from "./server";

const app = new App().express;

const log = () => console.log("Server is running");

app.listen(3333, log);
