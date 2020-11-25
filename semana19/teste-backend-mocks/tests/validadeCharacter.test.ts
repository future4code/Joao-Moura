import { Character } from "../src/model/Character"
import { validadeCharacter } from "../src/services/validateCharacter"

describe("validade character",()=>{

    test("duty returns false for an unnamed character",()=>{
        const myCharacter:Character = {
            name: "",
            lp: 4100,
            atk: 2500,
            def: 2100
        } 

        const result: boolean = validadeCharacter(myCharacter)
        expect(result).toBe(false)
    })

    test("must return false for a character with LP equal to 0",()=>{
        const myCharacter:Character = {
            name: "Mago Negro",
            lp: 0,
            atk: 2500,
            def: 21000
        } 

        const result: boolean = validadeCharacter(myCharacter)
        expect(result).toBe(false)
    })


    test("must return false for a character with ATK equal to 0",()=>{
        const myCharacter:Character = {
            name: "Dragão Bebê",
            lp: 4100,
            atk: 0,
            def: 1900
        } 

        const result: boolean = validadeCharacter(myCharacter)
        expect(result).toBe(false)
    })

    test("must return false for a character with DEF equal to 0",()=>{
        const myCharacter:Character = {
            name: "Jinzo",
            lp: 3800,
            atk: 2100,
            def: 0
        } 

        const result: boolean = validadeCharacter(myCharacter)
        expect(result).toBe(false)
    })

    test("must return false for a character with Atk, DEF or LP negative",()=>{
        const myCharacter1:Character = {
            name: "Guardião Celta",
            lp: -10,
            atk: 1400,
            def: 1200
        } 

        const myCharacter2:Character = {
            name: "Dragão Mascarado",
            lp: 3600,
            atk: -1400,
            def: 1200
        }

        const myCharacter3:Character = {
            name: "Frog",
            lp: 300,
            atk: 100,
            def: -610
        }

        const result1: boolean = validadeCharacter(myCharacter1)
        const result2: boolean = validadeCharacter(myCharacter2)
        const result3: boolean = validadeCharacter(myCharacter3)

        expect(result1).toBe(false)
        expect(result2).toBe(false)
        expect(result3).toBe(false)
    })

    test("must return true for a character with all the correct information",()=>{
        const myCharacter:Character = {
            name: "Karibouh",
            lp: 400,
            atk: 300,
            def: 200
        } 

        const result: boolean = validadeCharacter(myCharacter)
        expect(result).toBe(true)
    })
})