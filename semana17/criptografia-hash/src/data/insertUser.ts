import {connection} from ".."
import { ROLE } from "../types/AuthenticationData"

export const insertUser = async (
    id: string, email: string, password: string, role?:ROLE
): Promise<void> => {

    try {
        await connection
            .insert({id, email, password, role})
            .into("User")
        
    } catch (error) {
        throw new Error(error.slqMessage || error.message)
    }
}