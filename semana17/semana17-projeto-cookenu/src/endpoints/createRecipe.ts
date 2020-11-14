import {Request, Response} from "express"
import { insertRecipe } from "../data/insertRecipe"
import { selectUser } from "../data/selectUser"
import { checkToken } from "../services/checkToken"
import { generateId } from "../services/generateId"
import { Authorization } from "../types/Authorization"
import { Recipe } from "../types/recipe"

export const createRecipe = async(req:Request, res:Response):Promise<any> =>{
    try {
        const {title, description} = req.body
        const token = req.headers.authorization as string
        
        if(!title || !description) throw new Error("Enter the 'title' and 'description'");
        if (!token)throw new Error("Insert your token")

        const authenticationDate: Authorization = checkToken(token) 

        const profile = await selectUser(authenticationDate.id)

        if(!profile)throw new Error("User not found");
        
        const dataRecipe: Recipe = {
            id: generateId(),
            title,
            description,
            cratedAt: new Date(),
            idUser: profile.id
        }

        await insertRecipe(dataRecipe)
    
        res.status(201).send({Success:"Created recipe"})

    } catch (error) {
        if(error.message === "jwt malformed"){
            res.status(400).send({message:"Token invalido"})
        }

        if(error.message === "jwt expired"){
            res.status(401).send({message: "Expired token"})
        }
        res.status(400).send({message:error.message || error.sqlMessage})
    }
}