import { Request, Response } from "express"
import {selectUsers} from "../data/selectUsers"
import {Query} from '../types/Query'
import {Filter} from '../types/Filter'

export const getUsers = async(req: Request,res: Response): Promise<void> =>{
   try {

      const query : Query = {
         name: req.params.name as string || "",
         type: req.params.type as string || "",
         order: req.params.order as string || "name",
         page: Number(req.params.page) as number || 1
      }

      const users = await selectUsers(query)

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