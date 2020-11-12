import {Request, Response} from "express"
import { insertUser } from "../data/insertUser"
import { generateHash } from "../services/generateHash"
import { generateId } from "../services/generateId"
import { generateToken } from "../services/generateToken"
import { validateAccount } from "../services/validateAccount"

export const singUp = async(req:Request, resp:Response): Promise<void> => {
    try {
        const { email, password, role} = req.body

        const err: string | boolean = validateAccount(email, password, role)
        if(err) throw new Error(`${err}`)

        const id: string = generateId()
        const hashPassword: string = await generateHash(password)
        
        await insertUser(id, email, hashPassword, role)
        const token: string = generateToken({id, role}) 
        
        resp.status(201).send({message: "User created", token})

    } catch (error) {
        resp.status(400).send({message: error.message || error.sqlMessage})
    }
}