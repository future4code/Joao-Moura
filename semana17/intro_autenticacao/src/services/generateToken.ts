import * as jwt from "jsonwebtoken"
import { AuthenticationData } from "../types/AuthenticationData"

export const generateToken = (id: AuthenticationData):string =>{
   const expiresIn: string = "1min"
   
   return jwt.sign(
        { id },
        process.env.JWT_KEY as string,
        { expiresIn }
    )
}

