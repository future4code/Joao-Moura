
import * as jwt from "jsonwebtoken"
import { AuthenticationData } from "../types/AuthenticationData";

export const checkToken = (token: string):AuthenticationData => {
    const payload = jwt.verify(token, process.env.JWT_KEY as string) as any 
    const result = {
        id: payload.id,
        role: payload.role,
    }
    
    return result
};