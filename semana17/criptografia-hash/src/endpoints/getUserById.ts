
import {Request, Response} from "express"
import { selectUserById } from "../data/selectUserById"

export const getUserById = async(req: Request, resp: Response): Promise<void> => {
    try {
        const id = req.params.id as string;

        if(!id) throw new Error("Enter an id")
        
        const user = await selectUserById(id)

        if(!user) throw new Error("Unregistered user!")
        
        resp.status(200).send({
            id: user.id,
            email: user.email
        })
        
    } catch (error) {
        resp.status(400).send({message: error.message || error.sqlMessage})
    }
}