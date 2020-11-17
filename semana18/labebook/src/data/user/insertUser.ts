import { connection } from "../connection"

export const insertUser = async () :Promise<void> =>{
    try {

        await connection('labook_users')
        .insert({
           id,
           name,
           email,
           password: cypherPassword
        })
        
    } catch (error) {
        
    }
}