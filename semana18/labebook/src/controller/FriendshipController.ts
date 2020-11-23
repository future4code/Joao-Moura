import { Request, Response } from "express"
import FriendshipBusiness from "../business/FriendshipBusiness"
import { inputFriendship } from "../model/Friend"

class FriendshipController {
   async createFriendship (req: Request, res: Response):Promise<void> {
      try {
         let message = "Success!"
         
         const inputfriendship: inputFriendship = {
            userToken: req.headers.authorization as string,
            idFriend: req.params.id
         }

         await FriendshipBusiness.createFriendship(inputfriendship)
   
         res.status(200).send({ message })
   
         } catch (error) {
            let message = error.sqlMessage || error.message
            res.statusCode = 400
   
            res.send({ message })
         }
   }

   async undoFriendship (req: Request, res: Response):Promise<void> {
    try {
       let message = "Deleted!"
       
       const inputfriendship: inputFriendship = {
          userToken: req.headers.authorization as string,
          idFriend: req.params.id
       }

       await FriendshipBusiness.undoFriendship(inputfriendship)
 
       res.status(200).send({ message })
 
       } catch (error) {
          let message = error.sqlMessage || error.message
          res.statusCode = 400
 
          res.send({ message })
       }
 }
}

export default new FriendshipController()