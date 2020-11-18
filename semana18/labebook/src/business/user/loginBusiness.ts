import { selectUser } from "../../data/user/selectUser";
import { generateToken } from "../../services/generateToken";
import { User } from "../../model/User";
import {validateHash} from "../../services/validateHash"
import { LoginInput } from "../../model/User";

export const loginBusiness = async (login:LoginInput): Promise<string> =>{
    try {
        if (!login.email || !login.password) {
            throw new Error('"email" and "password" must be provided')
        }
   
        const queryResult = await selectUser(login.email)
   
        if (!queryResult) throw new Error("Invalid credentials")
   
        const user: User = {
            id: queryResult.id,
            name: queryResult.name,
            email: queryResult.email,
            password: queryResult.password
        }
   
        const passwordIsCorrect: boolean = await validateHash(login.password, user.password)
   
        if (!passwordIsCorrect) throw new Error("Invalid credentials")
   
        return generateToken({id: user.id})

    } catch (error) {
        throw new Error(error);
    }
}