export type AuthenticationData = {
    id: string
}

export type User = {
    id: string,
    name: string,
    email: string,
    password: string
}
 
export enum POST_TYPES {
    NORMAL = "normal",
    EVENT = "event"
}
 
export type Post = {
    id: string,
    photo: string,
    description: string,
    type: POST_TYPES,
    createdAt: Date,
    authorId: string
}