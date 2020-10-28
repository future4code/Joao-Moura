import { Request, Response } from "express";
import {deleteActorById} from "../data/queries"

export const deleteActor = async (req:Request, res:Response): Promise<void> =>{
    try {
        const {id} = req.params
        
        if(!id){
            throw new Error("Invalid ID")
        }

        const result = await deleteActorById(String(id))
        
        if(!result){
            throw new Error("It was not possible to delete the Actor")
        }

        res.status(200).send({Success: "Deleted Actor"})
    } catch (error) {
        res.status(400).send({Error: error.message})
    }
}