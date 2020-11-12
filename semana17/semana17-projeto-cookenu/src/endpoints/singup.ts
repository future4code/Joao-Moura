import {Request, Response} from "express"
import { insertUser } from "../data/insertUser"
import { generateId } from "../services/generateId"
import { generateToken } from "../services/generateToken"
import { hash } from "../services/hash"
import { validateSingup } from "../services/validadeSingup"
import { User } from "../types/user"

export const singup = async(req:Request, res:Response):Promise<any> =>{
    try {
        const {name, email, password} = req.body
        
        validateSingup(name, email, password)

        const dataUser: User = {
            id: generateId(),
            password: await hash(password),
            name,
            email,
        }

        await insertUser(dataUser)
        const token: string = generateToken(dataUser.id)
    
        res.status(201).send({token})

    } catch (error) {
        res.status(400).send({message:error.message || error.sqlMessage})
    }
}