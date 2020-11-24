import { Character } from "../src/model/Character"
import { perfomAttack2 } from "../src/services/performAttack"

describe("perfom attack", ()=>{
    test("the defending character must lose 200 LP",()=>{

        const validateMock = jest.fn((character:Character):boolean =>{
            return true
        })

        const myCharacter1:Character = {
            name: "Karibouh",
            lp: 500,
            atk: 400,
            def: 200
        } 

        const myCharacter2:Character = {
            name: "Mago do tempo",
            lp: 500,
            atk: 500,
            def: 200
        } 

        perfomAttack2(
            myCharacter1,
            myCharacter2,
            validateMock
        )
        
        expect(myCharacter1).toMatchObject({
            name: "Karibouh",
            lp: 500,
            atk: 400,
            def: 200
        } )

        expect(myCharacter2).toMatchObject({
            name: "Mago do tempo",
            lp: 300,
            atk: 500,
            def: 200
        } )
        
        expect(validateMock).toHaveBeenCalled()
        expect(validateMock).toHaveBeenCalledTimes(2)
        expect(validateMock).toReturnTimes(2)
    })

    test("the defending character must lose 200 LP",()=>{
        expect.assertions(5)

        const validateMock = jest.fn((character:Character):boolean =>{
            return false
        })

        const myCharacter1:Character = {
            name: "Karibouh",
            lp: 0,
            atk: 400,
            def: 200
        } 

        const myCharacter2:Character = {
            name: "Mago do tempo",
            lp: 500,
            atk: 500,
            def: 200
        } 

        try {
            perfomAttack2(
                myCharacter1,
                myCharacter2,
                validateMock
            )
        } catch (error) {
            expect(error.message).toEqual("Invalid Character")
            expect(validateMock).toHaveBeenCalled()
            expect(validateMock).toHaveBeenCalledTimes(1)
            expect(validateMock).toReturnWith(false)
            expect(validateMock).toReturnTimes(1)
        }
     
    })

})
   