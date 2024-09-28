import memberModel from "../models/memberModel.js";

import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const userExists = await memberModel.findOne({ email });
    if (!userExists) {
      return res
        .status(404)
        .json({ success: false, message: "No user exists with this email" });
    }

    const isMatch = await bcrypt.compare(password, userExists.password);

    if (!isMatch) {
      return res
        .status(404)
        .json({ success: false, message: "Incorrect email or password!" });
    }

    const token = createToken(userExists._id);
    res
      .status(200)
      .json({ success: true, message: "Login Successful!", token });
  } catch (error) {
    console.log("error");
    res.status(500).json({ success: false, msg: "error" });
  }
};

const getAll = async (req, res) => {
  try {
    const members = await memberModel.find({});
    if (members.length === 0) {
      return res
        .status(404)
        .json({ success: false, message: "0 members at the moment!" });
    }

    return res.status(200).json({ success: true, data: members });
  } catch (error) {
    console.log("error getting members");
    res.status(404).json({ success: false, message: "error" });
  }
};

const createToken = (id) => {
  return jwt.sign({ id }, process.env.jwt_secret, { expiresIn: "15m" });
};

const signup = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const userExists = await memberModel.findOne({ email });
    if (userExists) {
      return res
        .status(404)
        .json({ success: false, msg: "user already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    const newMember = new memberModel({
      username,
      email,
      password: hashPassword,
    });

    const savedMember = await newMember.save();

    const token = createToken(savedMember._id);

    res.status(200).json({ success: true, msg: "Member Added", token });
  } catch (error) {
    console.log("error");
    res.status(500).json({ success: false, msg: error });
  }
};

const edit = async (req, res) => {};

const signout = async (req, res) => {
  try {
    const id = req.params.id;
    const { token } = req.headers || req.query.token;
    const userExists = await memberModel.findById(id);
    if (!userExists) {
      return res
        .status(404)
        .json({ success: false, msg: "no user exists with this email" });
    }
    const deleteMember = await memberModel.findByIdAndDelete(id);
    //localStorage.removeItem(token);
    res.status(200).json({ success: true, msg: "Account deleted permanently" });
  } catch (error) {
    console.log("error");
    res
      .status(504)
      .json({ success: false, msg: "some unknown error occured." });
  }
};

export { login, getAll, signup, edit, signout };
