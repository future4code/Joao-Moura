import express from "express"
import { signup } from "../controller/user/signup";

export const userRouter = express.Router();

userRouter.post("/signup", signup);