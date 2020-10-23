export type user = {
    name : string
    cpf : string
    dt_birth: Date 
    balance: number
}

export const accounts: user[] = [
    {
        name : "Maria da Silva",
        cpf : "1234567896",
        dt_birth: new Date("1889-08-10"), //yyyy-mm-dd
        balance: 0
    }
]

export const checkAge = (date: Date): boolean =>{
    return true
}

export const formattedDate = (date: string): Date =>{
    const [dd, mm, yyyy] = date.split("/")
    const newDate: Date = new Date(`${yyyy}-${mm}-${dd}`) 

    return newDate
}

export const beRegistered = (cpf: string): boolean => {
    const resp: number = accounts.findIndex((user)=> user.cpf === cpf)

    if(resp === -1) return false

    return true

}