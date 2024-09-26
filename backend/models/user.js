import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
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
  role: {
    type: String,
    enum: ["client", "coach"],
    default: "client",
  },
  age: {
    type: Number,
    required: true,
  },
  weight: {
    type: Number,
    required: true,
  },
  height: {
    type: Number,
  },
  workouts: [{ type: mongoose.Schema.Types.ObjectId, ref: "workout" }],
  dietPlans: [{ type: mongoose.Schema.Types.ObjectId, ref: "dietPlan" }],
});

const userModel = mongoose.Model.User || mongoose.model("User", userSchema);

export default userModel;