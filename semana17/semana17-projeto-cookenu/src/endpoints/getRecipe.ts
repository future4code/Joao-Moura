import { Request, Response } from "express";
import { selectRecipe } from "../data/selectRecipe";
import { selectUser } from "../data/selectUser";
import { checkToken } from "../services/checkToken";
import { Authorization } from "../types/Authorization";

export const getRecipe = async (req:Request, res:Response):Promise<void> => {
    try {
        const token = req.headers.authorization as string
        const id = req.params.id as string
        
        if (!token) throw new Error("Insert your token")
        
        const authenticationDate: Authorization = checkToken(token) 

        const recipe = await selectRecipe(id)
        if(!recipe)throw new Error("Recipe id not found");

        const profile = await selectUser(authenticationDate.id)
        if(!profile.name)throw new Error("Profile not found");

        res.status(200).send({
            id: recipe.id,
            title: recipe.title,
            description: recipe.description,
            cratedAt: recipe.cratedAt,
        })
        
    } catch (error) {
        if(error.message === "jwt malformed"){
            res.status(400).send({message:"Invalid token"})
        }

        if(error.message === "jwt expired"){
            res.status(401).send({message: "Expired token"})
        }

        res.status(400).send({message: error.message || error.sqlMessage})
    }
}