import { Request, Response } from "express";
import {selectAvgSalaryByGender} from "../data/queries"

export const getAvgSalary = async (req:Request, res:Response): Promise<void> =>{
    try {
        const {gender} = req.params

        if(!gender){
            throw new Error("the gender was not informed")
        }

        const average = await selectAvgSalaryByGender(String(gender))

        if(!average.average){
            throw new Error("it was not possible to check the average salary")
        }

        res.status(200).send(average)
    } catch (error) {
        res.status(400).send({Error: error.message})
    }
}