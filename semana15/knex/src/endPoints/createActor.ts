import { Request, Response } from "express";
import {insertNewActor} from "../data/queries"

export const createActor = async (req: Request, res: Response):Promise<void> => {
    try {
        const {id, name, salary, gender, dateOfBirth} = req.body

        if(!id || !name || !salary || !gender || !dateOfBirth){
            throw new Error("Invalid request body")
        }

        const result = await insertNewActor(id, name, salary, gender, dateOfBirth)
    
        
        if(!result){
            throw new Error("It was not possible to create a new actor")
        }
      
        res.status(200).send({Success: "The Actor was created"});
    } catch (err) {
        res.status(400).send({Error: err.message});
    }
}