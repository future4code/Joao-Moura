import { Character } from "../model/Character";
import { validadeCharacter } from "./validateCharacter";

// Dessa forma quando essa função fosse testada, 
// não teriamos controle sobre a função validadeCharacter
export const perfomAttack1 = (
    attacker: Character, defender: Character
):void => {
    try {
        if(
            validadeCharacter(attacker) ||
            validadeCharacter(defender) 
        ) throw new Error("Invalid Character")

        if(attacker.atk > defender.def) {
            defender.lp = defender.def - attacker.atk
        }
        
    } catch (error) {
        console.log(error.message)
    }

}


// Já aqui quando forem realizado os testes podemos criar uma função
// validadeCharacter mocada e tendo total controle do seu retorno 
export const perfomAttack2 = (
    attacker: Character, defender: Character,
    validadeCharacter: (character:Character) => boolean
):void => {
    try {
        if(
            !validadeCharacter(attacker) ||
            !validadeCharacter(defender) 
        ) throw new Error("Invalid Character")
        
        if(attacker.atk > defender.def) {
            defender.lp -= attacker.atk - defender.def
        }
        
    } catch (error) {
       throw new Error(error.message);
    }

}