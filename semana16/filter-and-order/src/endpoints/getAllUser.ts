import { Request, Response } from "express"
import {selectAllUsers} from "../data/selectAllUsers"
import {TYPE} from '../types/Type'
import {Filter} from '../types/Filter'

export const getAllUser = async(req: Request,res: Response): Promise<void> =>{
   try {

      const users = await selectAllUsers()

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