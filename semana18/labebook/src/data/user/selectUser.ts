import { connection } from "../connection"

export const selectUser = async (email: string): Promise<any> =>{
    try {
        const [user] = await connection
                        .select("*")
                        .from("labook_users")
                        .where({ email })
        return user

    } catch (error) {
        throw new Error("Erro ao busca usuario no banco");
    }
}