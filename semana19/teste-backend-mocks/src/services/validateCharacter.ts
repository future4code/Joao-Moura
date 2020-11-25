import { Character } from "../model/Character"

export const validadeCharacter = (character: Character): boolean => {
    if(
        !character.name || character.atk < 1 || character.def < 1 || character.lp < 1
    ) return false

    return true
}