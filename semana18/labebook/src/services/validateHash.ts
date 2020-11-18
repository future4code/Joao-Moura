import * as bcrypt from "bcryptjs"

export const validateHash = async (
    plainText: string, cypherText: string
): Promise<boolean> => {
    return bcrypt.compare(plainText, cypherText)
}