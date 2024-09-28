import workoutModel from "../models/workoutModel.js";
import memberModel from "../models/memberModel.js";

const addWorkout = async (req, res) => {
  const { name, type, difficulty, duration, memberId } = req.body;
  try {
    const workoutExists = await workoutModel.findOne({ name });
    if (workoutExists) {
      return res
        .status(404)
        .json({ success: false, msg: "Workout already exists!" });
    }
    const newWorkout = await workoutModel.create({
      name,
      type,
      difficulty,
      duration,
    });

    await memberModel.findByIdAndUpdate(
      memberId,
      { $push: { workouts: newWorkout._id } },
      { new: true }
    );

    res.status(201).json({ success: true, msg: "Workout added!", newWorkout });
  } catch (error) {
    console.log("error");
    res.status(504).json({ success: false, msg: "unknown error occured!" });
  }
};

const updateWorkout = async (req, res) => {
  const id = req.params.id;
  try {
    const { name, type, difficulty, duration } = req.body;
    const workoutExists = await workoutModel.findById(id);
    if (!workoutExists) {
      return res
        .status(404)
        .json({ success: false, msg: "Workout already exists!" });
    }
    const updatedWorkout = await workoutModel.findByIdAndUpdate(
      id,
      {
        name,
        type,
        difficulty,
        duration,
      },
      { new: true }
    );
    res
      .status(200)
      .json({ success: true, msg: "Workout updated!", data: updatedWorkout });
  } catch (error) {
    console.log("error");
    res.status(504).json({ success: false, msg: "unknown error occured" });
  }
};

const deleteWorkout = async (req, res) => {
  const id = req.params.id;
  try {
    const workout = await workoutModel.findById(id);
    if (!workout) {
      return res
        .status(404)
        .json({ success: false, msg: "Workout doesnot exists" });
    }
    const deletedWorkout = await workoutModel.findByIdAndDelete(id);

    res.status(504).json({ success: true, msg: "Deletion success" });
  } catch (error) {
    console.log("error");
    res.status(504).json({ success: false, msg: "unknown error occured" });
  }
};

const getWorkout = async (req, res) => {
  const id = req.params.id;
  try {
    const workout = await workoutModel.findById(id);
    if (!workout) {
      return res
        .status(404)
        .json({ success: false, msg: "Workout doesnot exists" });
    }

    res.status(504).json({ success: true, data: workout });
  } catch (error) {
    console.log("error");
    res.status(504).json({ success: false, msg: "unknown error occured" });
  }
};

const Workouts = async (req, res) => {
  try {
    const workout = await workoutModel.find({});
    if (workout.length === 0) {
      return res
        .status(404)
        .json({ success: false, msg: "Workout doesnot exists" });
    }

    res.status(504).json({ success: true, data: workout });
  } catch (error) {
    console.log("error");
    res.status(504).json({ success: false, msg: "unknown error occured" });
  }
};

export { addWorkout, updateWorkout, deleteWorkout, Workouts, getWorkout };
