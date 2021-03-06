import { Request, Response } from "express"
import PostBusiness from "../business/PostBusiness"
import { Post, PostInput } from "../model/Post"

class PostController {
    async createPost (req: Request, res: Response):Promise<void> {
        try {
            let message = "Success!"
    
            const post: PostInput = {
                photo: req.body.photo as string,
                description: req.body.description as string,
                token: req.headers.authorization as string,
                type: req.body.type 
            }
    
            await PostBusiness.createPost(post)
        
            res.status(201).send({ message })
        
        } catch (error) {
            let message = error.sqlMessage || error.message
            res.statusCode = 400
        
            res.send({ message })
        }
    }

    async getPostById (req: Request, res: Response):Promise<void> {
        try {
            let message = "Success!"
    
            const { id } = req.params
            const token = req.headers.authorization as string
    
            const post: Post = await PostBusiness.getPost(id, token)
    
            res.status(200).send({ message, post })
        
        } catch (error) {
            let message = error.sqlMessage || error.message
            res.statusCode = 400
        
            res.send({ message })
        }
    }
}

export default new PostController()