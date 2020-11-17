import { User } from "../../types/types"

export const createUser = async (input:User): Promise<string> => {
    try {
        if (!name || !email || !password) {
            res.statusCode = 406
            message = '"name", "email" and "password" must be provided'
            throw new Error(message)
         }
   
         const id: string = generateId()
   
         const cypherPassword = await generateHash(password);
   
   
         const token: string = generateToken({ id })
    } catch (error) {
        
    }

    return "token"
}