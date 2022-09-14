import express from "express";
import * as core from "express-serve-static-core";
import { routes } from "./routes";

interface AppProps {
  express: core.Express;
  isDev: boolean;
}

export class App implements AppProps {
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
