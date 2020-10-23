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

export const checkAge = (date: string): boolean =>{
    const dt_birth = formattedDate(date)
    const today = new Date();

    const year = today.getFullYear() - dt_birth.getFullYear();
    const month = today.getMonth() - dt_birth.getMonth();
    const day = today.getDate() - dt_birth.getDate();

    if(year < 18 || year === 18 && month <= 0 && day <= 0 ){
        return false;
    }

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