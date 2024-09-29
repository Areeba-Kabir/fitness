import dietModel from "../models/dietModel.js";

const addDietPlan = async (req, res) => {
  const { name, meals } = req.body;
  const totalCalories = meals.reduce((sum, meal) => sum + meal.calories, 0);
  try {
    const newDietPlan = await new dietModel({ name, meals, totalCalories });
    await newDietPlan.save();
    res.status(201).json({ success: true, msg: "DietPlan Added" });
  } catch (error) {
    console.log("error");
    res.status(501).json({ success: false, msg: "unknown error occured!" });
  }
};

const updateDietPlan = async (req, res) => {
  const id = req.params.id;
  try {
    const dietPlan = await dietModel.findById(id);
    if (!dietPlan) {
      return res
        .status(404)
        .json({ success: false, msg: "dietplan Not exists" });
    }

    const name = req.body.name || dietPlan.name;
    const meals = req.body.meals || dietPlan.meals;
    let totalCalories = dietPlan.totalCalories;

    if (meals) {
      totalCalories=req.body.meals.reduce((sum, meal) => sum + meal.calories, 0);
    }

    const updatedDiet = await dietModel.findByIdAndUpdate(
      id,
      { name, meals, totalCalories },
      { new: true }
    );

    res.status(200).json({ success: true, msg: "updated successfully!" });
  } catch (error) {
    console.log("error");
    res.status(501).json({ success: false, msg: "unknown error occured!" });
  }
};

const deleteDietPlan = async (req, res) => {
  const id = req.params.id;
  try {
    const dietPlanExists = await dietModel.findById(id);
    if (!dietPlanExists) {
      return res
        .status(404)
        .json({ success: false, msg: "dietplan Not exists" });
    }
    const deletedietPlan = await dietModel.findByIdAndDelete(id);

    res.status(200).json({ success: true, msg: "deleted successfully!" });
  } catch (error) {
    console.log("error");
    res.status(501).json({ success: false, msg: "unknown error occured!" });
  }
};

const getDietPlan = async (req, res) => {
  const id = req.params.id;
  try {
    const dietPlan = await dietModel.findById(id);
    if (!dietPlan) {
      return res
        .status(404)
        .json({ success: false, msg: "dietplan Not exists" });
    }

    res.status(200).json({
      success: true,
      msg: "deleted successfully!",
      data: dietPlan,
    });
  } catch (error) {
    console.log("error");
    res.status(501).json({ success: false, msg: "unknown error occured!" });
  }
};

const dietPlans = async (req, res) => {
  try {
    const dietPlans = await dietModel.find({});
    if (dietPlans.length === 0) {
      return res
        .status(404)
        .json({ success: false, msg: "dietplan Not exists" });
    }

    res.status(200).json({ success: true, msg: "data", data: dietPlans });
  } catch (error) {
    console.log("error");
    res.status(501).json({ success: false, msg: "unknown error occured!" });
  }
};

export { addDietPlan, updateDietPlan, deleteDietPlan, getDietPlan, dietPlans };
