import { Request, Response } from "express";
import { selectUser } from "../data/selectUser";
import { checkToken } from "../services/checkToken";
import { Authorization } from "../types/Authorization";

export const myProfile = async (req:Request, res:Response):Promise<void> => {
    try {
        const token = req.headers.authorization as string
        
        if (!token){
            throw new Error("insira seu token");
        }
        
        const authenticationDate: Authorization = checkToken(token) 

        const user = await selectUser(authenticationDate.id)

        if(!user)throw new Error("Usuario nao encontrado");

        res.status(200).send({
            id: user.id,
            name: user.name,
            email: user.email 
        })
        
    } catch (error) {

        if(error.message === "jwt malformed"){
            res.status(400).send({message:"Token invalido"})
        }

        if(error.message === "jwt expired"){
            res.status(401).send({message: "Expired token"})
        }

        res.status(400).send({message: error.message || error.sqlMessage})
    }
}