import {Request, Response} from "express"
import { loginBusiness } from "../../business/user/loginBusiness"
import { Login } from "../../types/types"

export const login = async (req: Request, res: Response) => {
    try {
       let message = "Success!"
 
       const input: Login = {
            email: req.body.email,
            password: req.body.password
        }
 
       const token: string = await loginBusiness(input)
 
       res.status(200).send({ message, token })
 
    } catch (error) {
       let message = error.sqlMessage || error.message
       res.statusCode = 400
 
       res.send({ message })
    }
 }