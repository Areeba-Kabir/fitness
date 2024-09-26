import mongoose from "mongoose";

const workoutSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    name: String,
    enum: ["strength", "cardio", "flexibility"],
    required: true,
  },
  difficulty: {
    type: String,
    enum: ["beginner", "intermediate", "advanced"],
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
});

const workoutModel =
  mongoose.Model.WorkOuts || mongoose.model("WorkOuts", workoutSchema);

export default workoutModel;
