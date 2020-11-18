import {Request, Response} from "express"
import { generateId } from "../../services/generateID"
import { createUser } from "../../business/user/createUser"
import { User } from "../../types/types"

export const signup = async(req: Request, res: Response): Promise<void> =>{
    try {

        let message = "Success!"

        const inputSignup: User = {
            id: generateId(),
            name: req.body.name as string,
            email: req.body.email as string,
            password: req.body.password as string
        }
        
        const token = await createUser(inputSignup)
        
        res.status(201).send({ message, token })
  
     } catch (error) {
        res.statusCode = 400
        let message = error.sqlMessage || error.message
  
        res.send({ message })
     }
}