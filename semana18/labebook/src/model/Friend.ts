export class Friendship {
    constructor(
        private idUser: string,
        private idFriend: string,
    ){}

   public getIdUser = () => this.idUser
   public getIdFriend = () => this.idFriend
}

export interface inputFriendship {
    userToken: string,
    idFriend: string
}