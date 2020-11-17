import * as bcrypt from "bcryptjs"

export const compare = async (
    plainText: string, cypherText: string
): Promise<boolean> => {
    return bcrypt.compare(plainText, cypherText)
}