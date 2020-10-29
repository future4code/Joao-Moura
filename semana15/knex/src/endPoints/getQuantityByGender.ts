import { Request, Response } from "express";
import {selectQuantityByGender} from "../data/queries"

export const getQuantityByGender = async (req:Request, res:Response): Promise<void> =>{
    try {
        const {gender} = req.query
        console.log(gender);
        if(!gender){
            throw new Error("the gender was not informed")
        }

        const quantity = await selectQuantityByGender(String(gender))

        if(!quantity){
            throw new Error("It was not possible to find the list of actors")
        }

        res.status(200).send(quantity)
    } catch (error) {
        res.status(400).send(error.message)
    }
}