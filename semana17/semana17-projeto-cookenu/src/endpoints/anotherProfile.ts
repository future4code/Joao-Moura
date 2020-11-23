import { Request, Response } from "express";
import { selectUser } from "../data/selectUser";
import { checkToken } from "../services/checkToken";
import { Authorization } from "../types/Authorization";

export const anotherProfile = async (req:Request, res:Response):Promise<void> => {
    try {
        const token = req.headers.authorization as string
        const id = req.params.id as string
        
        if (!token) throw new Error("Insert your token")
        
        const authenticationDate: Authorization = checkToken(token) 

        const profile = await selectUser(authenticationDate.id)
        if(!profile.name)throw new Error("Profile not found");

        const user = await selectUser(id)
        if(!user)throw new Error("User id not found");

        res.status(200).send({
            id: user.id,
            name: user.name,
            email: user.email 
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