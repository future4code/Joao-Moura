import {connection} from ".."

export const selectUserByEmail = async(email: string): Promise<any> => {

        const [user] = await connection
        .select("*")
        .from("User")
        .where({email})

        return user
    
}