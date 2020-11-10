import { Request, Response} from 'express'
import {selectUseById} from '../data/queries'

export const getUserById = async (req:Request, resp: Response): Promise<void> => {
    try {
        const {id} = req.params

        if(!id){
            throw new Error("Invalid request Id")
        }

        const result = await selectUseById(String(id))

        if (!result) {
            throw new Error("It was not possible to register the user")
        }
       
        resp.status(200).send(result)
    } catch (error) {
        resp.status(200).send({ sql: error.sqlMessage, message: `${error}` })
    }
}
