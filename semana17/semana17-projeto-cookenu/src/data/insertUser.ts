import { connection } from ".."
import { User } from "../types/user"

export const insertUser = async(user: User): Promise<void> => {
    try {
        await connection
            .insert({
                id: user.id,
                name: user.name,
                email: user.email,
                password: user.password
            })
            .into("Cookenu_User")
        
    } catch (error) {
        throw new Error("Could not create user");
    }
}