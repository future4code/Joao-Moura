import { Request, Response } from "express"
import UseBusiness from "../business/UseBusiness"
import { inputFriendship } from "../model/Friend"
import { LoginInput, SignupInput } from "../model/User"

class UserController {
    async signup (req: Request, res: Response): Promise<void> {
        try {
    
            let message = "Success!"
    
            const signup: SignupInput = {
                name: req.body.name as string,
                email: req.body.email as string,
                password: req.body.password as string
            }
            
            const token:string = await UseBusiness.signup(signup)
            
            res.status(201).send({ message, token })
      
         } catch (error) {
            res.statusCode = 400
            let message = error.sqlMessage || error.message
      
            res.send({ message })
         }
    }

    async login (req: Request, res: Response):Promise<void> {
        try {
           let message = "Success!"
     
           const login: LoginInput = {
              email: req.body.email,
              password: req.body.password
           }
     
           const token: string = await UseBusiness.login(login)
     
           res.status(200).send({ message, token })
     
           } catch (error) {
              let message = error.sqlMessage || error.message
              res.statusCode = 400
     
              res.send({ message })
           }
    }

   async createFriendship (req: Request, res: Response):Promise<void> {
      try {
         let message = "Success!"
         
         const inputfriendship: inputFriendship = {
            userToken: req.headers.authorization as string,
            idFriend: req.params.id
         }

         await UseBusiness.createFriendship(inputfriendship)
   
         res.status(200).send({ message })
   
         } catch (error) {
            let message = error.sqlMessage || error.message
            res.statusCode = 400
   
            res.send({ message })
         }
   }
}

export default new UserController()