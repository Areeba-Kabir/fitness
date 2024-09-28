import {
  Workouts,
  getWorkout,
  addWorkout,
  updateWorkout,
  deleteWorkout,
} from "../controllers/workoutController.js";

import express from "express";

const workoutRouter = express.Router();

workoutRouter.post("/add", addWorkout);
workoutRouter.patch("/update/:id", updateWorkout);
workoutRouter.delete("/delete/:id", deleteWorkout);
workoutRouter.get("/:id", getWorkout);
workoutRouter.get("/", Workouts);

export default workoutRouter;
