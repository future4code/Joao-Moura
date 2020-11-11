
import {Request, Response} from "express"
import { deleteUserDb } from "../data/deleteUserDb"
import { checkToken } from "../services/checkToken"
import { AuthenticationData } from "../types/AuthenticationData";

export const deleteUser = async(req: Request, resp: Response): Promise<void> => {
    try {
        const id = req.params.id as string
        const token = req.headers.authorization as string;

        const authenticationData: AuthenticationData = checkToken(token)

        if(authenticationData.role === "NORMAL"){
            throw new Error("Not authorized")
        }
        
        await deleteUserDb(id)

        resp.status(200).send({message: "Deleted user"})
        
    } catch (error) {

        if(error.message === "jwt expired"){
            resp.status(401).send({message: "Expired token"})
        }else{
            resp.status(400).send({message: error.message || error.sqlMessage})
        }

    }
}