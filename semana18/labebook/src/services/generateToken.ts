import * as jwt from "jsonwebtoken"
import { AuthenticationData } from "../types/types"

export function generateToken( payload: AuthenticationData): string {
    return jwt.sign(
       payload,
       process.env.JWT_KEY as string,
       {
          expiresIn: process.env.JWT_EXPIRES_IN
       }
    )
}

