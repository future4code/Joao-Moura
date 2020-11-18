import { User } from "../../types/types"
import { connection } from "../connection"

export const insertUser = async (data: User) :Promise<void> =>{
    try {
 
        await connection
            .insert({
                id: data.id,
                name: data.name,
                email: data.email,
                password: data.password
            })
            .into("labook_users")

    } catch (error) {
        throw new Error(`${error}`)
    }
}