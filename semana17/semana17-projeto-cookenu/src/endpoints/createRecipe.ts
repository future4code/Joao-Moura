import {Request, Response} from "express"
import { insertRecipe } from "../data/insertRecipe"
import { insertUser } from "../data/insertUser"
import { selectUser } from "../data/selectUser"
import { checkToken } from "../services/checkToken"
import { generateId } from "../services/generateId"
import { generateToken } from "../services/generateToken"
import { hash } from "../services/hash"
import { validateDataSingup } from "../services/validadeDataSingup"
import { Authorization } from "../types/Authorization"
import { Recipe } from "../types/recipe"
import { User } from "../types/user"

export const createRecipe = async(req:Request, res:Response):Promise<any> =>{
    try {
        const {title, description} = req.body
        const token = req.headers.authorization as string
        
        if(!title || !description) throw new Error("Insira o 'title' e 'description'");
        if (!token)throw new Error("insira seu token")

        const authenticationDate: Authorization = checkToken(token) 

        const profile = await selectUser(authenticationDate.id)

        if(!profile)throw new Error("Usuario nao encontrado");
        
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