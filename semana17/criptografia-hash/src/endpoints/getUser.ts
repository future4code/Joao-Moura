
import {Request, Response} from "express"
import { selectUserById } from "../data/selectUserById"
import { checkToken } from "../services/checkToken"
import { AuthenticationData } from "../types/AuthenticationData";

export const getUser = async(req: Request, resp: Response): Promise<void> => {
    try {
        const token = req.headers.authorization as string;

        const authenticationData: AuthenticationData = checkToken(token)

        if(authenticationData.role === "NORMAL"){
            throw new Error("Not authorized")
        }
        
        const user = await selectUserById(authenticationData.id)

        resp.status(200).send({
            id: user.id,
            email: user.email,
            role: user.role
        })
        
    } catch (error) {

        if(error.message === "jwt expired"){
            resp.status(401).send({message: "Expired token"})
        }else{
            resp.status(400).send({message: error.message || error.sqlMessage})
        }

    }
}