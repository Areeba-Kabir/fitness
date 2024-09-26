import mongoose from "mongoose";

const memberSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    requuired: true,
  },
  password: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    enum: ["male", "female", "other"],
    required:true,
  },
  age: {
    type: Number,
    required: true,
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

const memberModel = mongoose.Model.User || mongoose.model("User", memberSchema);

export default memberModel;