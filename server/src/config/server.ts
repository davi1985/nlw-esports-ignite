import { App } from "./app";

const app = new App().express;

export class Server {
  static async init(): Promise<void> {
    const log = () => console.log("Server is running");

    app.listen(3333, log);
  }
}
