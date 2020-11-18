import { insertUser } from "../../data/user/insertUser";
import { SignupInput, User } from "../../model/User";
import { generateHash } from "../../services/generateHash";
import { generateId } from "../../services/generateID";
import { generateToken } from "../../services/generateToken";

export const createUser = async (signup:SignupInput): Promise<string> => {
    try {

        if (!signup.name || !signup.email || !signup.password) {
            const message = '"name", "email" and "password" must be provided'
            throw new Error(message)
        }
   
        signup.password = await generateHash(signup.password);

        const user: User = {...signup, id: generateId()}

        await insertUser(signup)
   
        const token: string = generateToken({id: user.id})
        if(!token) throw new Error("Invalid token");

        return token

    } catch (error) {
        throw new Error(error)
    }
}