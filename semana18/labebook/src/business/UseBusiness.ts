import { userDataBase } from "../data/UserDataBase";
import { LoginInput, SignupInput, User } from "../model/User";
import { generateId } from "../services/generateID";
import { generateToken } from "../services/generateToken";
import { hashManage } from "../services/HashManage";

class UseBusiness {
    async signup (signup:SignupInput): Promise<string> {
        try {
    
            if (!signup.name || !signup.email || !signup.password) {
                const message = '"name", "email" and "password" must be provided'
                throw new Error(message)
            }
       
            const cypherPassword: string = await hashManage.hash(signup.password);
    
            const user: User = new User(
                generateId(),
                signup.name,
                signup.email,
                cypherPassword
            )
    
            await userDataBase.createUser(user)
       
            const token: string = generateToken({id: user.getId()})
            if(!token) throw new Error("Invalid token");
    
            return token
    
        } catch (error) {
            throw new Error(error)
        }
    }

    async login (login:LoginInput): Promise<string> {
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
}

export default new UseBusiness()