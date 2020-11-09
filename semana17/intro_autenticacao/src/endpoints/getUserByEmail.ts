import { throws } from "assert"
import {Request, Response} from "express"
import { selectUserByEmail } from "../data/selectUserByEmail"

export const getUserByEmail = async(req: Request, resp: Response): Promise<void> => {
    try {
        const { email } = req.body

        if(!email || !email.includes("@")){
            throw new Error("Email invalido!")
        }

        const user = await selectUserByEmail(email as string)

        if(!user){
             throw new Error("Usuario não encontrado")
        }

        resp.status(200).send(user)
        
    } catch (error) {
        resp.status(404).send({message: error.message || error.sqlMessage})
    }
}