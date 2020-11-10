import { Request, Response} from 'express'
import {updateUserById} from '../data/queries'

export const updateUser = async (req:Request, resp: Response): Promise<void> => {
    try {
        const {id} = req.params
        const {name, nickname} = req.body

        if(!id || !name || !nickname){
            throw new Error("Invalid request Body")
        }

        const result = await updateUserById(String(id),name, nickname)

        if (!result) {
            throw new Error("It was not possible to register the user")
        }
       
        resp.status(200).send({Success: "update" })
    } catch (error) {
        resp.status(200).send({ sql: error.sqlMessage, message: `${error}` })
    }
}
