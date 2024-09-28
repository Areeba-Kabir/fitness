import mongoose from "mongoose";

const workoutSchema = new mongoose.Schema({
  name: {
    type: String,
    required:true,
  },
  type: {
    name: String,
    enum: ["strength", "cardio", "flexibility"],
  },
  difficulty: {
    type: String,
    enum: ["beginner", "intermediate", "advanced"],
  },
  duration: {
    type: Number,
    required:true,
  },
});

const workoutModel =
  mongoose.models.Workout || mongoose.model("Workout", workoutSchema);

export default workoutModel;
