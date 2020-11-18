export type User = {
    id: string,
    name: string,
    email: string,
    password: string
}

export type LoginInput = {
    email: string,
    password: string
}

export type SignupInput = {
    name: string,
    email: string,
    password: string
}