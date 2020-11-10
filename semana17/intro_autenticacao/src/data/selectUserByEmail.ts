import {connection} from ".."

export const selectUserByEmail = async(email: string, password: string): Promise<any> => {

        const [user] = await connection
        .select("*")
        .from("User")
        .where({email, password})

        return user
    
}