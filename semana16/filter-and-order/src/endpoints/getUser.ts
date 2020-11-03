import { Request, Response } from "express"
import {selectUserByName} from "../data/selectUserByName"

export const getUser = async(req: Request,res: Response): Promise<void> =>{
   try {
      
      const name = req.query.name as string

      if(!name){
         throw new Error("o nome não foi informado na busca")
      }

      const users = await selectUserByName(name)

      if(!users.length){
         res.statusCode = 404
         throw new Error("No recipes found")
      }

      res.status(200).send(users)
      
   } catch (error) {
      console.log(error)
      res.send(error.message || error.sqlMessage)
   }
}