import express from "express";
import routes from "../routes";
import {
  editProfile,
  changePassword,
  usersDetail
} from "../controller/userController";

const userRouter = express.Router();

userRouter.get(routes.editProfile, editProfile);
userRouter.get(routes.changePassword, changePassword);
userRouter.get(routes.userDetail(), usersDetail);

export default userRouter;
