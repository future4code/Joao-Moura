import * as jwt from "jsonwebtoken"
import { Authorization } from "../types/Authorization"

export const checkToken = (token:string): Authorization => {
    const payload = jwt.verify(token, process.env.JWT_KEY as string) as any

    return {
        id: payload.id
    }
}