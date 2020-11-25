import { User } from "../src/model/User"
import performPurchase from "../src/performPurchase"

describe("perform purchase ",()=>{
 
// Faça um teste com um usuário com o saldo maior do que o valor de compra
    test("subtracting less than the balance",()=>{
        const user: User | undefined = performPurchase({name:"joão",balance:100}, 20)
        expect(user?.balance).toEqual(80) //true
    })

// Faça um teste com um usuário com o saldo igual ao valor de compra
    test("subtracting an amount equal to the balance",()=>{
        const user: User | undefined = performPurchase({name:"joão",balance:100}, 100)
        expect(user?.balance).toEqual(0) //true
    })

// Faça um teste com um usuário com o saldo menor do que o valor de compra
    test("subtracting an amount greater than the balance", ()=>{
        const user: User | undefined = performPurchase({name: "joão", balance:100}, 120)
        expect(user).toEqual(undefined) //true
    })
})