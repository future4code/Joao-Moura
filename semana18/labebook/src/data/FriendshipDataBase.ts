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
}

export const friendshipDataBase: FriendshipDataBase = new FriendshipDataBase()