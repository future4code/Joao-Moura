
import {Request, Response} from "express"
import { selectUserById } from "../data/selectUserById"
import { checkToken } from "../services/checkToken"

export const getUser = async(req: Request, resp: Response): Promise<void> => {
    try {
        const token = req.headers.authorization as string;

        const {id} = checkToken(token)

        const user = await selectUserById(id)

        if(!user){
             throw new Error("Token invalido")
        }

        resp.status(200).send({id: user.id, email: user.email})
        
    } catch (error) {

        if(error.message === "jwt expired"){
            resp.status(401).send({message: "Expired token"})
        }else{
            resp.status(400).send({message: error.message || error.sqlMessage})
        }

    }
}