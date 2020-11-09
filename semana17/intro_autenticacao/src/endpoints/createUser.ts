import {Request, Response} from "express"
import { insertUser } from "../data/insertUser"
import { generateId } from "../services/generateId"
import { validadeAccount } from "../services/validateAccount"

export const createUser = async(req:Request, resp:Response): Promise<void> => {
    try {
        const { email, password} = req.body

        const err: string | boolean = validadeAccount(email, password)

        if(err){
            throw new Error(`${err}`); 
        }

        const id: string = generateId() 
        await insertUser(id, email, password)

        resp.status(200).send({message: "Usuario criado"})

    } catch (error) {

        resp.status(400).send({message: error.message || error.sqlMessage})
    }
}