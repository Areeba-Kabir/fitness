import mongoose from "mongoose";

const dietSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  meals: [
    {
      mealName: {
        type: String,
        required: true,
      },
      foodItems: [{ type: String, required: true }],
      calories: {
        type: Number,
        required: true,
      },
    },
  ],
  totalCalories: {
    type: Number,
    required: true,
  },
});

const dietModel = mongoose.models.Diet || mongoose.model("Diet", dietSchema);

export default dietModel;