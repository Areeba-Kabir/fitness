import express from "express";
import cors from "cors";

import db_Connect from "./db/dbConfig.js";
import memberRouter from "./routes/memberRoutes.js";
import workoutRouter from "./routes/workoutRoutes.js";

const app = express();

app.use(express.json());

app.use(cors());

//middlewares
app.use(express.urlencoded({ extended: false }));
app.use("/api/member", memberRouter);
app.use("/api/workout", workoutRouter);


app.listen(process.env.PORT, () => {
  db_Connect();
  console.log(`server listening on http://localhost:${process.env.PORT}`);
});
