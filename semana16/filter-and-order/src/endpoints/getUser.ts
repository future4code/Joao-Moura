import { Request, Response } from "express"
import {selectUserByName} from "../data/selectUserByName"
import {TYPE} from '../types/Type'
import {Filter} from '../types/Filter'

export const getUser = async(req: Request,res: Response): Promise<void> =>{
   try {
      const query: Filter = {
         name : req.query.name as string,
         order : req.query.order as string || "name"
      }

      if(!query.name){
         throw new Error("o nome não foi informado na busca")
      }

      const validadeOrder = ["name", "type"]

      if(!validadeOrder.includes(query.order)){
         throw new Error("os valores de order devem ser 'name' ou 'type' ")
      }

      const users = await selectUserByName(query)

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