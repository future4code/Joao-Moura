import express from "express"
import { createPost } from "../controller/post/createPost";
import { getPostById } from "../controller/post/getPostById";

export const postRouter = express.Router();

postRouter.post("/", createPost)
postRouter.get("/:id", getPostById)
