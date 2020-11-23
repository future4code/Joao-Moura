export class Post {

    constructor(
        private id: string,
        private photo: string,
        private description: string,
        private type: POST_TYPES,
        private createdAt: Date,
        private authorId: string
    ){
        switch (type.toLowerCase()) {
            case POST_TYPES.EVENT:
                this.type = POST_TYPES.EVENT
                break;
            case POST_TYPES.NORMAL:
                this.type = POST_TYPES.NORMAL
            default:
                throw new Error("Invalid TYPE: choose 'normal' or 'event'");
        }
    }

   public getId = () => this.id
   public getPhoto = () => this.photo
   public getDescription = () => this.description
   public getType = () => this.type
   public getCreatedAt = () => this.createdAt
   public getAuthorId = () => this.authorId
    
}

export enum POST_TYPES {
    NORMAL = "normal",
    EVENT = "event"
}

export interface PostInput {
    photo: string,
    description: string,
    token: string,
    type: POST_TYPES
}

