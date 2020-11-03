import { Request, Response } from "express";
import {selectActorById} from "../data/queries"

export const getActorById = async (req:Request, res:Response): Promise<void> =>{
    try {
        const {id} = req.params

        if(!id){
            throw new Error("the ID was not informed")
        }

        const actor = await selectActorById(String(id))

        if(!actor){
            throw new Error("Actor not found")
        }

        res.status(200).send(actor)
    } catch (error) {
        res.status(400).send({Error: error.message})
    }
}