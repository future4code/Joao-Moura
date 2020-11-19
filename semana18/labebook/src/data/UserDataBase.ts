import { User } from "../model/User";
import { connection } from "./connection";

class UserDataBase {
    private tableName: string = "labook_users"
    
    async createUser (data: User) {
        await connection
            .insert({
                id: data.id,
                name: data.name,
                email: data.email,
                password: data.password
            }).into(this.tableName)
    }

    async getUser (email: string):Promise<any> {
        const [user] = await connection
                        .select("*")
                        .from(this.tableName)
                        .where({ email })
        return user
    }
}

export const userDataBase: UserDataBase = new UserDataBase()