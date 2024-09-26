import mongoose from "mongoose";

import dotenv from "dotenv";

dotenv.config();

const db_Connect = async () => {
  await mongoose
    .connect(process.env.URI)
    .then(() => {
      console.log("connected to database.");
    })
    .catch((err) => {
      console.log("error connecting to database.");
    });
};

export default db_Connect;