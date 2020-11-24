// Deveremos criar um mock para a função performAttack
// já que ela possui uma função de dependência.

const performAttackTrue = jest.fn(():boolean =>{
    return true
})

const performAttackFalse = jest.fn(():boolean =>{
    return false
})

describe("mocks", ()=>{

    test("must return true",()=>{
        expect(performAttackTrue).toBe(true)
    })

    test("must return false",()=>{
        expect(performAttackFalse).toBe(false)
    })

})

