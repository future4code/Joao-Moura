import { Request, Response } from "express";
import {updateSalary} from "../data/queries"

export const putUpdateSalary = async (req:Request, res:Response): Promise<void> =>{
    try {
        const {id, salary} = req.body
        
        if(!id || !salary){
            throw new Error("Invalid request body")
        }

        const result = await updateSalary(String(id), Number(salary))
        
        if(!result){
            throw new Error("Unable to perform the update")
        }

        res.status(200).send({Success: "Updated salary"})
    } catch (error) {
        res.status(400).send({Error: error.message})
    }
}