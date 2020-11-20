import express from "express"
import FriendshipController from "../controller/FriendshipController";

export const friendshipRouter = express.Router();

friendshipRouter.post("/:id", FriendshipController.createFriendship)
friendshipRouter.delete("/:id", FriendshipController.undoFriendship)