import {ROLE} from "./AuthenticationData"

export type InputSingUp = {
    email: string,
    password: string,
    cep: number,
    number: number,
    complement: string,
    role: ROLE
}