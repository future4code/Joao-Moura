import {connection} from ".."

export const insertUser = async (
    id: string, email: string, password: string
): Promise<void> => {

    try {
        await connection
            .insert({id, email, password})
            .into("User")
        
    } catch (error) {
        throw new Error(error.slqMessage || error.message)
    }
}