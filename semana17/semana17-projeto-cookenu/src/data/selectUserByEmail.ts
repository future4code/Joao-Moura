import { connection } from ".."

export const selectUserByEmail = async(email: string): Promise<any> =>{
    try {
        const[user] = 
            await connection
            .select("*")
            .from("Cookenu_User")
            .where({email})      

        return user

    } catch (error) {
        throw new Error("selectUserByEmail -> não foi possível buscar usuário | ");
    }
}