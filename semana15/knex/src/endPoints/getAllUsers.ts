import { Request, Response } from "express";
import {selectAllActor} from  '../data/queries'

export const getAllActor = async (req:Request, res:Response): Promise<void> =>{
    try {
      const listActor = await selectAllActor()

      if(!listActor){
          throw new Error("It was not possible to find the list of actors")
      }
  
      res.status(200).send(listActor)
    } catch (error) {
      res.status(400).send(error.message)
    }
}