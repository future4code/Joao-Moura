import express from "express"
import PostController from "../controller/PostController";

export const postRouter = express.Router();

postRouter.post("/", PostController.createPost)
postRouter.get("/:id", PostController.getPostById)
