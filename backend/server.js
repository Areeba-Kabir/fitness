import express from "express";

import cors from "cors";

import db_Connect from "./db/dbConfig.js";

const app = express();

app.use(express.json());

app.use(cors());

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("API is getting!");
});

app.listen(process.env.PORT, () => {
  db_Connect();
  console.log(`server listening on http://localhost:${process.env.PORT}`);
});
