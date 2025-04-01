import express from "express";

const app = express();

const port = process.env.PORT || 3000;

app.get("/", (req: express.Request, res: express.Response) => {
  res.status(200).send("OK");
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})