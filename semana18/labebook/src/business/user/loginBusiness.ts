
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
   
        const user: User = new User (
          queryResult.id,
          queryResult.name,
          queryResult.email,
          queryResult.password
        )
   
        const passwordIsCorrect: boolean = await hashManage.compare(login.password, user.getPassword())
   
        if (!passwordIsCorrect) throw new Error("Invalid credentials")
   
        return generateToken({id: user.getId()})

    } catch (error) {
        throw new Error(error);
    }
}