import { Casino, LOCATION, NACIONALITY, Result, User } from "../src/model/Casino"
import { verifyAge } from "../src/verifyAge"

describe("very age",()=>{

    test("allows entry of a Brazilian of legal age",()=>{
        const casino: Casino = {
            name: "Boate Azul",
            location: LOCATION.BRAZIL
        }

        const userList: User[] = [
            {
                name: "mario",
                age: 18,
                nacionality: NACIONALITY.BRAZILIAN
            }
        ]

        const result : Result = verifyAge (casino, userList)

        expect(result.brazilians.allowed).toHaveLength(1)
    })

    test("allows entry of a minor American",()=>{
        const casino : Casino = {
            name: "LotoMania",
            location: LOCATION.BRAZIL
        }

        const userList: User[] = [
            {
                name: "Gib",
                age: 18,
                nacionality: NACIONALITY.AMERICAN
            }
        ]

        const result: Result = verifyAge(casino, userList)

        expect(result.americans.allowed).toHaveLength(1)
    })

    test("does not allow children under 21",()=>{
        const casino : Casino = {
            name: "LotoMania",
            location: LOCATION.EUA
        }

        const userList: User[] = [
            {
                name: "Gib",
                age: 19,
                nacionality: NACIONALITY.AMERICAN
            },
            {
                name: "Josue",
                age: 19,
                nacionality: NACIONALITY.AMERICAN
            },
            {
                name: "Rafael",
                age: 19,
                nacionality: NACIONALITY.BRAZILIAN
            },
            {
                name: "Pedro",
                age: 19,
                nacionality: NACIONALITY.BRAZILIAN
            }
        ]

        const result: Result = verifyAge(casino, userList)

        expect(result.americans.allowed).toHaveLength(0)
        expect(result.americans.unallowed).toHaveLength(2)
        expect(result.brazilians.allowed).toHaveLength(0)
        expect(result.brazilians.unallowed).toHaveLength(2)
    })

    test("does not allow children under 21",()=>{
        const casino : Casino = {
            name: "LotoMania",
            location: LOCATION.EUA
        }

        const userList: User[] = [
            {
                name: "Gib",
                age: 21,
                nacionality: NACIONALITY.AMERICAN
            },
            {
                name: "Josue",
                age: 21,
                nacionality: NACIONALITY.AMERICAN
            },
            {
                name: "Rafael",
                age: 19,
                nacionality: NACIONALITY.BRAZILIAN
            },
            {
                name: "Pedro",
                age: 19,
                nacionality: NACIONALITY.BRAZILIAN
            }
        ]

        const result: Result = verifyAge(casino, userList)

        expect(result.americans.allowed).toHaveLength(2)
        expect(result.americans.unallowed).toHaveLength(0)
        expect(result.brazilians.allowed).toHaveLength(0)
        expect(result.brazilians.unallowed).toHaveLength(2)
    })

    test("brazilians.allowed.length must be less than 2 and greater than zero",()=>{
        const casino: Casino = {
            name: "Boate Azul",
            location: LOCATION.BRAZIL
        }

        const userList: User[] = [
            {
                name: "mario",
                age: 18,
                nacionality: NACIONALITY.BRAZILIAN
            }
        ]

        const result : Result = verifyAge (casino, userList)

        expect(result.brazilians.allowed.length).toBeLessThan(2)
        expect(result.brazilians.allowed.length).toBeGreaterThan(0)
    })

    test("americans.unallowed.length must be equal to 2", ()=>{
        const casino: Casino = {
            name: "Boate Azul",
            location: LOCATION.BRAZIL
        }

        const userList: User[] = [
            {
                name: "mario",
                age: 18,
                nacionality: NACIONALITY.AMERICAN
            }
        ]

        const result : Result = verifyAge (casino, userList)
        expect(result.americans.unallowed.length).toEqual(0)
    })

    test("americans.unallowed contains the names of minors",()=>{
        const casino : Casino = {
            name: "LotoMania",
            location: LOCATION.EUA
        }

        const userList: User[] = [
            {
                name: "Gib",
                age: 19,
                nacionality: NACIONALITY.AMERICAN
            },
            {
                name: "Josue",
                age: 19,
                nacionality: NACIONALITY.AMERICAN
            },
            {
                name: "Rafael",
                age: 19,
                nacionality: NACIONALITY.BRAZILIAN
            },
            {
                name: "Pedro",
                age: 19,
                nacionality: NACIONALITY.BRAZILIAN
            }   
        ]

        const result: Result = verifyAge(casino, userList)
        expect(result.americans.unallowed).toContain("Gib")
        expect(result.americans.unallowed).toContain("Josue")
        expect(result.americans.unallowed).not.toContain("Rafael")
        expect(result.americans.unallowed).not.toContain("Pedro")
    })

    test("checks the size of the unallowed and allowed arrays",()=>{
        const casino : Casino = {
            name: "LotoMania",
            location: LOCATION.EUA
        }

        const userList: User[] = [
            {
                name: "Gib",
                age: 21,
                nacionality: NACIONALITY.AMERICAN
            },
            {
                name: "Josue",
                age: 21,
                nacionality: NACIONALITY.AMERICAN
            },
            {
                name: "Rafael",
                age: 19,
                nacionality: NACIONALITY.BRAZILIAN
            },
            {
                name: "Pedro",
                age: 19,
                nacionality: NACIONALITY.BRAZILIAN
            }   
        ]

        const result: Result = verifyAge(casino, userList)
        expect(result.brazilians.unallowed.length).toBeGreaterThan(1)
        expect(result.americans.unallowed.length).toBeLessThan(1)
        expect(result.americans.allowed.length).toEqual(2)
    })
})