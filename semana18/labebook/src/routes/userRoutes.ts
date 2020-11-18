import express from "express"
import { login } from "../controller/user/login";
import { signup } from "../controller/user/signup";

export const userRouter = express.Router();

userRouter.post("/signup", signup);
userRouter.post("/login", login)