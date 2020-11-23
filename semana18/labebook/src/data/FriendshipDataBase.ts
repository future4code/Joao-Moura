import { Friendship } from "../model/Friend"
import BaseDataBase from "./BaseDataBase"

class FriendshipDataBase extends BaseDataBase{
    private tableName: string = "labook_friendship"

    public async createFriendship (friendship:Friendship) {
        await BaseDataBase.connection
            .insert({
                id_user: friendship.getIdUser(),
                id_friend: friendship.getIdFriend(),
            }).into(this.tableName)
    }

    public async getFriendship (friendship:Friendship):Promise<any> {
        const [result] = await BaseDataBase.connection
                        .select("*")
                        .from(this.tableName)
                        .where({ 
                            id_user: friendship.getIdUser(),
                            id_friend: friendship.getIdFriend() 
                        })
        return result
    }

    public async undoFriendship (friendship:Friendship) {
        await BaseDataBase
            .connection(this.tableName)
            .where({ 
                id_user: friendship.getIdUser(),
                id_friend: friendship.getIdFriend() 
            })
            .del()
    }
}

export const friendshipDataBase: FriendshipDataBase = new FriendshipDataBase()