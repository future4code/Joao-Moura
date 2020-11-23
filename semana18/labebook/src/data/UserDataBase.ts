import { User } from "../model/User";
import BaseDataBase from "./BaseDataBase";

class UserDataBase extends BaseDataBase{
    private tableName: string = "labook_users"
    
    public async createUser (user: User) {
        await BaseDataBase.connection
            .insert({
                id: user.getId(),
                name: user.getName(),
                email: user.getEmail(),
                password: user.getPassword()
            }).into(this.tableName)
    }

    public async getUser (email: string):Promise<any> {
        const [user] = await BaseDataBase.connection
                        .select("*")
                        .from(this.tableName)
                        .where({ email })
        return user
    }
}

export const userDataBase: UserDataBase = new UserDataBase()