import express from "express"
import { createPost } from "../controller/post/createPost";

export const postRouter = express.Router();

postRouter.post("/", createPost)
