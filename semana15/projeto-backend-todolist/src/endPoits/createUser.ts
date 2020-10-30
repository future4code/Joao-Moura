import { Request, Response} from 'express'
import {insertUser} from '../data/queries'

export const createUser = async (req:Request, resp: Response): Promise<void> => {
    try {
        const {name, nickname, email} = req.body

        if(!name || !nickname || !email){
            throw new Error("Invalid request body")
        }

        const result = await insertUser(name, nickname, email)

        if (!result) {
            throw new Error("It was not possible to register the user")
        }

        resp.status(200).send({Sucesso:"Create user"})
    } catch (error) {
        resp.status(200).send({ sql: error.sqlMessage, message: `${error}` })
    }
}
