import { throws } from "assert"
import {Request, Response} from "express"
import { selectUserByEmail } from "../data/selectUserByEmail"
import { generateToken } from "../services/generateToken"
import { validadeAccount } from "../services/validateAccount"

export const login = async(req: Request, resp: Response): Promise<void> => {
    try {
        const { email, password } = req.body

        const err: string | boolean = validadeAccount(email, password)

        if(err) throw new Error(`${err}`)

        const user = await selectUserByEmail(email, password)

        if(!user){
             throw new Error("Invalid email or password!")
        }

        const token: string = generateToken(user.id)

        resp.status(200).send({token})
        
    } catch (error) {
        resp.status(401).send({message: error.message || error.sqlMessage})
    }
}