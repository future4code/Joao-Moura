import { Request, Response } from "express";
import {insertNewMovie} from "../data/queries"

export const createMovie = async (req: Request, res: Response):Promise<void> => {
    try {
        const {id, name, sinopse, release_date, rating, playing_limit_date} = req.body

        if(!id || !name || !release_date){
            throw new Error("Invalid request body")
        }

        const result = await insertNewMovie(id, name, sinopse, release_date, rating, playing_limit_date)
    
        
        if(!result){
            throw new Error("It was not possible to create a new Movie")
        }
      
        res.status(200).send({Success: "The Movie was created"});
    } catch (err) {
        res.status(400).send({Error: err.message});
    }
}