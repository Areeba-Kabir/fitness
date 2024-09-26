import {
  login,
  getAll,
  signup,
  edit,
  signout,
} from "../controllers/memberController.js";

import express from "express";

const memberRouter = express.Router();

memberRouter.get('/', getAll);

memberRouter.post('/login', login);

memberRouter.post('/signup', signup);

memberRouter.post('/edit', edit);

memberRouter.delete('/signout', signout);

export default memberRouter;