import * as jwt from "jsonwebtoken"
import { AuthenticationData } from "../types/AuthenticationData"

export const generateToken = (data: AuthenticationData):string =>{
   const expiresIn: string = "4min"
   
   return jwt.sign(
        data,
        process.env.JWT_KEY as string,
        { expiresIn }
    )
}