import {Request, Response} from "express"
import { insertUser } from "../data/insertUser"
import { generateHash } from "../services/generateHash"
import { generateId } from "../services/generateId"
import { generateToken } from "../services/generateToken"
import { validateInputSingUp } from "../services/validateInputSignUp"
import {InputSingUp } from '../types/InputSignUp'
import {ROLE} from "../types/AuthenticationData"
import { AddressUser } from "../types/AddressUse"
import { getAddressByCep } from "../services/getAddressByCep"
import { insertAddressUser } from "../data/insertAddressUser"

export const singUp = async(req:Request, resp:Response): Promise<void> => {
    try {

        const inputSingUp: InputSingUp = {
            email: req.body.email as string,
            password: req.body.password as string,
            cep: req.body.cep as number,
            number: req.body.number as number,
            complement: req.body.complement as string,
            role: req.body.role as ROLE,
        }

        const err: string | boolean = validateInputSingUp(inputSingUp)
        if(err) throw new Error(`${err}`)

        const id: string = generateId()
        const hashPassword: string = await generateHash(inputSingUp.password)

        await insertUser(id, inputSingUp.email, hashPassword, inputSingUp.role)

        const address: AddressUser = await getAddressByCep(inputSingUp.cep)

        await insertAddressUser(address, inputSingUp.number,id, inputSingUp.complement)

        const token: string = generateToken({id:id, role:inputSingUp.role}) 
        
        resp.status(201).send({message: "User created", token})

    } catch (error) {
        resp.status(400).send({message: error.message || error.sqlMessage})
    }
}