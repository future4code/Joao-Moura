export class User {

    constructor (
       private id: string,
       private name: string,
       private email: string,
       private password: string
    ){}
    
    public getId = () => this.id
    public getName = () => this.name
    public getEmail = () => this.email
    public getPassword = () => this.password
}

export interface LoginInput  {
    email: string,
    password: string
}

export interface SignupInput {
    name: string,
    email: string,
    password: string
}