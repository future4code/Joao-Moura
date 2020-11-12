export type AuthenticationData = {
    id: string,
    role: ROLE
} 

export enum ROLE {
    NORMAL = "NORMAL",
    ADMIN = "ADMIN"
}