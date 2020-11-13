import { Request, Response } from "express";
import { selectUser } from "../data/selectUser";
import { checkHash } from "../services/checkHash";
import { generateToken } from "../services/generateToken";
import { validateDataLogin } from "../services/validadeDataLogin";
import { User } from "../types/user";

export const login = async(req:Request, res:Response):Promise<void> => {
    try {
        const {email, password} = req.body
        validateDataLogin(email, password)

        const user:User| undefined = await selectUser(email)

        if(!user) throw new Error("Invalid email or password!");

        const isCorrect = await checkHash(password, user.password)

        if(!isCorrect) throw new Error("Invalid email or password!");

        const token: string = generateToken(user.id)

        res.status(200).send({Success:"login", token})
        
    } catch (error) {
        res.status(400).send({message:error.message || error.sqlMessage})
    }

}