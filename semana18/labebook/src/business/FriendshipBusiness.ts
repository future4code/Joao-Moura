import { friendshipDataBase } from "../data/FriendshipDataBase";
import { Friendship, inputFriendship } from "../model/Friend";
import authenticator, { AuthenticationData } from "../services/authenticator";

class FriendshipBusiness {
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

    async undoFriendship (inputFriendship:inputFriendship): Promise<void> {
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

            const queryFriendship = await friendshipDataBase.getFriendship(friendship)

            if(!queryFriendship)throw new Error("User is not part of your friends list")

            await friendshipDataBase.undoFriendship(friendship)
    
        } catch (error) {
            if(error.message.includes("jwt expired")){
                throw new Error("Token expired");
            }
            throw new Error(error);
        }
    }
}

export default new FriendshipBusiness()