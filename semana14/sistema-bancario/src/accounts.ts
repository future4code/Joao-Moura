export type user = {
    name : string
    cpf : string
    dt_birth: Date 
    balance: number
    bankStatement: Array<bankStatement>
}

export type bankStatement = {
    value : number
    description: string
    date: Date
}

export const accounts: user[] = [
    {
        name : "Maria da Silva",
        cpf : "1234567896",
        dt_birth: new Date("1889-08-10"), //yyyy-mm-dd
        balance: 22,
        bankStatement:[
            {
                value: 200,
                description: "boleto da faculdade",
                date : new Date("2020-07-10")
            },
            {
                value: 60,
                description: "Talão de água",
                date : new Date("2020-08-19")
            }
        ]
    }
]

