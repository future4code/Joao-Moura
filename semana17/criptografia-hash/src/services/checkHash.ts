import * as bcrypt from "bcryptjs"

export const checkHash = async(password: string, hash: string): Promise<boolean> => {
    return bcrypt.compare(password, hash)
}