import {Request, Response} from "express"
import {selectUser} from "../data/selectUser"
import { checkHash } from "../services/checkHash"
import { generateToken } from "../services/generateToken"
import { validateAccount } from "../services/validateAccount"

export const login = async(req: Request, resp: Response): Promise<void> => {
    try {
        const { email, password } = req.body

        const err: string | boolean = validateAccount(email, password)
        if(err) throw new Error(`${err}`)

        const user = await selectUser(email)

        const isValidate = await checkHash(password, user.password)
    
        if(!user || !isValidate){
             throw new Error("Invalid email or password!")
        }

        const token: string = generateToken({id: user.id, role: user.role})

        resp.status(200).send({token})
        
    } catch (error) {
        resp.status(401).send({message: error.message || error.sqlMessage})
    }
}