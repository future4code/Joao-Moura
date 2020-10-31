import { Request, Response} from 'express'
import {insertTask} from '../data/queries'

export const createTask = async (req:Request, resp: Response): Promise<void> => {
    try {
        const {title, limitDate, description, creatorUserId, status} = req.body

        if(!title || !limitDate || !creatorUserId || !status){
            throw new Error("Invalid request body")
        }

        const result = await insertTask(title, limitDate, description, creatorUserId, status)

        if (!result) {
            throw new Error("We were unable to create your task")
        }

        resp.status(200).send({Sucesso:"Create Task"})
    } catch (error) {
        resp.status(200).send({ sql: error.sqlMessage, message: `${error}` })
    }
}
