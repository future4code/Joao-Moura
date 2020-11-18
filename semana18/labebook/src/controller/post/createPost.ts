import {Request, Response} from "express"
import { createPostBusiness } from "../../business/post/createPostBusiness"
import { PostInput, stringToPostTypes } from "../../model/Post"

export const createPost = async (req: Request, res: Response):Promise<void> => {
    try {
        let message = "Success!"

        const post: PostInput = {
            photo: req.body.photo as string,
            description: req.body.description as string,
            token: req.headers.authorization as string,
            type: stringToPostTypes(String(req.body.type))
        }

        await createPostBusiness(post)
    
        res.status(201).send({ message })
    
    } catch (error) {
        let message = error.sqlMessage || error.message
        res.statusCode = 400
    
        res.send({ message })
    }
}