
import { generateToken } from "../../services/generateToken";
import { User } from "../../model/User";

import { LoginInput } from "../../model/User";
import { hashManage } from "../../services/HashManage";
import { userDataBase } from "../../data/UserDataBase";

export const loginBusiness = async (login:LoginInput): Promise<string> =>{
    try {
        if (!login.email || !login.password) {
            throw new Error('"email" and "password" must be provided')
        }
   
        const queryResult = await userDataBase.getUser(login.email)
   
        if (!queryResult) throw new Error("Invalid credentials")
   
        const user: User = {
            id: queryResult.id,
            name: queryResult.name,
            email: queryResult.email,
            password: queryResult.password
        }
   
        const passwordIsCorrect: boolean = await hashManage.compare(login.password, user.password)
   
        if (!passwordIsCorrect) throw new Error("Invalid credentials")
   
        return generateToken({id: user.id})

    } catch (error) {
        throw new Error(error);
    }
}