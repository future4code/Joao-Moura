export type Post = {
    id: string,
    photo: string,
    description: string,
    type: POST_TYPES,
    createdAt: Date,
    authorId: string
}

export enum POST_TYPES {
    NORMAL = "normal",
    EVENT = "event"
}

export type PostInput = {
    photo: string,
    description: string,
    token: string,
    type: POST_TYPES
}

export type AuthenticationData = {
    id: string
}

export const stringToPostTypes = (type: string): POST_TYPES =>{
    if(type.toLowerCase() === POST_TYPES.EVENT){
        return POST_TYPES.EVENT
    }else if(type.toLowerCase() === POST_TYPES.NORMAL){
        return POST_TYPES.NORMAL
    }else{
        throw new Error("Invalid TYPE: choose 'normal' or 'event'");
    }
}

export const postTypesToString = (type:string):string =>{
    if(type === "event") {
        return "admin"
    }

    return "normal"
}