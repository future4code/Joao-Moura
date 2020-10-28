import { Request, Response } from "express";
import {selectActorByName} from "../data/queries"

export const getActorByName = async (req:Request, res:Response): Promise<void> =>{
    try {
        const {name} = req.query

        if(!name){
            throw new Error("the name was not informed")
        }

        const ator = await selectActorByName(String(name))

        if(!ator){
            throw new Error("It was not possible to find the list of actors")
        }

        res.status(200).send(ator)
    } catch (error) {
        res.status(400).send(error.message)
    }
}