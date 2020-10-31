import { Request, Response} from 'express'
import {selectTaskById} from '../data/queries'

export const getTaskById = async (req:Request, resp: Response): Promise<void> => {
    try {
        const {id} = req.params

        if(!id){
            throw new Error("Invalid request Id")
        }

        const result = await selectTaskById(String(id))

        if (!result) {
            throw new Error("It was not possible to register the user")
        }
       
        resp.status(200).send(result)
    } catch (error) {
        resp.status(200).send({ sql: error.sqlMessage, message: `${error}` })
    }
}
