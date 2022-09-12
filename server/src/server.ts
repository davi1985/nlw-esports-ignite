import express from "express";
import * as core from "express-serve-static-core";
import { routes } from "./routes";

export class App {
  express: core.Express;
  isDev: boolean;

  constructor() {
    this.express = express();
    this.isDev = process.env.NODE_ENV !== "production";

    this.middlewares();
    this.routes();
  }

  private middlewares() {
    this.express.use(express.json());
  }

  private routes() {
    this.express.use(routes);
  }
}
