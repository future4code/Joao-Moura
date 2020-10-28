import { Request, Response } from "express";
import {updateSalary} from "../data/queries"

export const putUpdateSalary = async (req:Request, res:Response): Promise<void> =>{
    try {
        const {id, salary} = req.body

        if(!name && !salary){
            throw new Error("the body was not informed")
        }

        const result = await updateSalary(String(id), Number(salary))


        res.status(200).send(result)
    } catch (error) {
        res.status(400).send(error.message)
    }
}