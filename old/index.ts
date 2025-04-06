import express from "express";
import { PrismaClient } from "./generated/prisma"

const app = express();
const prisma = new PrismaClient();

const port = process.env.PORT || 3000;

app.get("/", (req: express.Request, res: express.Response) => {
  res.status(200).send("OK");
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})
/*
app.get('/users', (req: express.Request, res: express.Response) => {
  const users = prisma.user.findMany();
  res.json(users);
})*/
