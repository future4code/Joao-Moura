export type user = {
    name : string
    cpf : string
    dt_birth: Date 
    balance: number
    bankStatement: Array<bankStatement>
}

export type bankStatement = {
    name : string
    balance: number
    description: string
}

export const accounts: user[] = [
    {
        name : "Maria da Silva",
        cpf : "1234567896",
        dt_birth: new Date("1889-08-10"), //yyyy-mm-dd
        balance: 22,
        bankStatement:[
            {
                name : "Fies",
                balance: 200,
                description: "boleto da faculdade"
            },
            {
                name : "Agespisa",
                balance: 60,
                description: "Talão de água"
            }
        ]
    }
]

