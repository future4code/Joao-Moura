import {Request, Response} from "express"
import { getPostBusiness } from "../../business/post/getPostBusiness"
import { Post } from "../../types/types"

export const getPostById = async (req: Request, res: Response):Promise<void> => {
    try {
        let message = "Success!"

        const { id } = req.params
        const token = req.headers.authorization as string

        const post: Post = await getPostBusiness(id, token)

        res.status(200).send({ message, post })
    
    } catch (error) {
        let message = error.sqlMessage || error.message
        res.statusCode = 400
    
        res.send({ message })
    }
}