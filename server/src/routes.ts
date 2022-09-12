import express, { Request, Response } from "express";

const routes = express.Router();

routes.get("/ads", (request: Request, response: Response) =>
  response.json([
    { id: 1, name: "Anúncio 1" },
    { id: 1, name: "Anúncio 2" },
    { id: 1, name: "Anúncio 3" },
  ])
);

export { routes };
