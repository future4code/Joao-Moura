import * as jwt from "jsonwebtoken"
import { AuthenticationData } from "../types/types"

function getTokenData(
    token: string
 ): AuthenticationData {
    const result: any = jwt.verify(
       token,
       process.env.JWT_KEY as string
    )
 
    return { id: result.id, }
 }