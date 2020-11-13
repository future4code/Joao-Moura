import { connection } from ".."

export const selectUser = async(query: string): Promise<any> =>{
    try {
        const[user] = 
            await connection
            .select("*")
            .from("Cookenu_User")
            .where("email", "=",query)
            .orWhere("id","=",query)      

        return user

    } catch (error) {
        throw new Error("selectUserByEmail -> não foi possível buscar usuário | ");
    }
}