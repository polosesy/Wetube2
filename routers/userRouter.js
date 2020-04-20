import express from "express";
import routes from "../routes";
import {
  editProfile,
  changePassword,
  usersDetail
} from "../controller/userController";
import { onlyPrivate } from "../middlewares";

const userRouter = express.Router();

userRouter.get(routes.editProfile, onlyPrivate, editProfile);
userRouter.get(routes.changePassword, onlyPrivate, changePassword);
userRouter.get(routes.userDetail(), usersDetail);

export default userRouter;
