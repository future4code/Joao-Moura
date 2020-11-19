
import { userDataBase } from "../../data/UserDataBase";
import { SignupInput, User } from "../../model/User";

import { generateId } from "../../services/generateID";
import { generateToken } from "../../services/generateToken";
import { hashManage } from "../../services/HashManage";

export const createUser = async (signup:SignupInput): Promise<string> => {
    try {

        if (!signup.name || !signup.email || !signup.password) {
            const message = '"name", "email" and "password" must be provided'
            throw new Error(message)
        }
   
        signup.password = await hashManage.hash(signup.password);

        const user: User = {...signup, id: generateId()}

        await userDataBase.createUser(user)
   
        const token: string = generateToken({id: user.id})
        if(!token) throw new Error("Invalid token");

        return token

    } catch (error) {
        throw new Error(error)
    }
}