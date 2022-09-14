import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const routes = express.Router();

routes.get("/games", async (request: Request, response: Response) => {
  const games = await prisma.game.findMany();

  return response.json(games);
});

routes.post("/ads", (request: Request, response: Response) =>
  response.status(201).json([])
);

routes.get("/ads", (request: Request, response: Response) =>
  response.json([
    { id: 1, name: "Anúncio 1" },
    { id: 1, name: "Anúncio 2" },
    { id: 1, name: "Anúncio 3" },
  ])
);

routes.get("/ads/:id", (request: Request, response: Response) =>
  response.json([
    { id: 1, name: "Anúncio 1" },
    { id: 1, name: "Anúncio 2" },
    { id: 1, name: "Anúncio 3" },
  ])
);

routes.get("/games/:id/ads", (request: Request, response: Response) =>
  response.json([
    { id: 1, name: "Anúncio 1" },
    { id: 1, name: "Anúncio 2" },
    { id: 1, name: "Anúncio 3" },
  ])
);

routes.get("/ads/:id/discord", (request: Request, response: Response) =>
  response.json([
    { id: 1, name: "Anúncio 1" },
    { id: 1, name: "Anúncio 2" },
    { id: 1, name: "Anúncio 3" },
  ])
);

export { routes };
