import { insertUser } from "../../data/user/insertUser";
import { generateHash } from "../../services/generateHash";
import { generateToken } from "../../services/generateToken";
import { User } from "../../types/types"

export const createUser = async (input:User): Promise<string> => {
    try {

        if (!input.name || !input.email || !input.password) {
            const message = '"name", "email" and "password" must be provided'
            throw new Error(message)
        }
   
        input.password = await generateHash(input.password);

        await insertUser(input)
   
        const token: string = generateToken({id: input.id})
        if(!token) throw new Error("Invalid token");

        return token

    } catch (error) {
        throw new Error(error)
    }
}