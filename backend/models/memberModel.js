import mongoose from "mongoose";

const memberSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    enum: ["male", "female", "other"],
  },
  age: {
    type: Number,
  },
  weight: {
    type: Number,
  },
  height: {
    type: Number,
  },
  workouts: [{ type: mongoose.Schema.Types.ObjectId, ref: "workout" }],
  dietPlans: [{ type: mongoose.Schema.Types.ObjectId, ref: "dietPlan" }],
});

const memberModel =
  mongoose.models.Member || mongoose.model("Member", memberSchema);

export default memberModel;
