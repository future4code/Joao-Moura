import { Request, Response } from "express"
import {selectUserPage} from "../data/selectUserPage"
import {TYPE} from '../types/Type'
import {Filter} from '../types/Filter'

export const getUserPage = async(req: Request,res: Response): Promise<void> =>{
   try {

      const page = req.params.page

      const users = await selectUserPage(Number(page))

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