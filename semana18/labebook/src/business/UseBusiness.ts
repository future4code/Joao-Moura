import { friendshipDataBase } from "../data/FriendshipDataBase";
import { userDataBase } from "../data/UserDataBase";
import { Friendship, inputFriendship } from "../model/Friend";
import { LoginInput, SignupInput, User } from "../model/User";
import authenticator, { AuthenticationData } from "../services/authenticator";
import { hashManage } from "../services/HashManage";
import idGenerator from "../services/idGenerator";

class UseBusiness {
    async signup (signup:SignupInput): Promise<string> {
        try {
    
            if (!signup.name || !signup.email || !signup.password) {
                const message = '"name", "email" and "password" must be provided'
                throw new Error(message)
            }
       
            const cypherPassword: string = await hashManage.hash(signup.password);
    
            const user: User = new User(
                idGenerator.generateId(),
                signup.name,
                signup.email,
                cypherPassword
            )
    
            await userDataBase.createUser(user)
       
            const token: string = authenticator.generateToken({id: user.getId()})
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
       
            return authenticator.generateToken({id: user.getId()})
    
        } catch (error) {
            throw new Error(error);
        }
    }

    async createFriendship (inputFriendship:inputFriendship): Promise<void> {
        try {
            if (!inputFriendship.idFriend) {
                throw new Error("Invalid friendship id")
            }

            const use:AuthenticationData = authenticator.getTokenData(inputFriendship.userToken)
            if(!use.id) throw new Error("Invalid token");
            if(use.id === inputFriendship.idFriend){
                throw new Error("'idUse' and 'idFriend' are the same")
            }

            const friendship: Friendship = new Friendship(use.id, inputFriendship.idFriend)

            await friendshipDataBase.createFriendship(friendship)
    
        } catch (error) {
            if(error.message.includes("jwt expired")){
                throw new Error("Token expired");
            }
            if(error.sqlMessage.includes("Duplicate entry")){
                throw new Error("You are already friends");
            }
            throw new Error(error);
        }
    }
}

export default new UseBusiness()