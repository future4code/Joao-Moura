import {Request, Response} from "express"
import { createPostBusiness } from "../../business/post/createPostBusiness"

export const createPost = async (req: Request, res: Response):Promise<void> => {
    try {
        let message = "Success!"

        const {photo, description, type} = req.body
        const token = req.headers.authorization as string

        await createPostBusiness(photo, description, type, token)
    
        res.status(201).send({ message })
    
    } catch (error) {
        let message = error.sqlMessage || error.message
        res.statusCode = 400
    
        res.send({ message })
    }
}