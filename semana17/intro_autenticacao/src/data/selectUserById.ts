import {connection} from ".."

export const selectUserById = async(id: string): Promise<any> => {

        const [user] = await connection
        .select("*")
        .from("User")
        .where({id})

        return user
    
}