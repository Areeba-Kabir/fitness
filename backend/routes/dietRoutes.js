import {
  addDietPlan,
  updateDietPlan,
  deleteDietPlan,
  getDietPlan,
  dietPlans,
} from "../controllers/dietController.js";

import express from "express";

const dietPlanRouter = express.Router();

dietPlanRouter.post("/add", addDietPlan);
dietPlanRouter.patch("/update/:id", updateDietPlan);
dietPlanRouter.delete("/delete/:id", deleteDietPlan);
dietPlanRouter.get("/:id", getDietPlan);
dietPlanRouter.get("/", dietPlans);

export default dietPlanRouter;
