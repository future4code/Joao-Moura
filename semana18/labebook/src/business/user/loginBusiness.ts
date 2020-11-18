import { selectUser } from "../../data/user/selectUser";
import { generateToken } from "../../services/generateToken";
import { Login, User } from "../../types/types";
import {validateHash} from "../../services/validateHash"

export const loginBusiness = async (input:Login): Promise<string> =>{
    try {
        if (!input.email || !input.password) {
            throw new Error('"email" and "password" must be provided')
        }
   
        const queryResult = await selectUser(input.email)
   
        if (!queryResult) throw new Error("Invalid credentials")
   
        const user: User = {
            id: queryResult.id,
            name: queryResult.name,
            email: queryResult.email,
            password: queryResult.password
        }
   
        const passwordIsCorrect: boolean = await validateHash(input.password, user.password)
   
        if (!passwordIsCorrect) throw new Error("Invalid credentials")
   
        return generateToken({id: user.id})

    } catch (error) {
        throw new Error(error);
    }
}