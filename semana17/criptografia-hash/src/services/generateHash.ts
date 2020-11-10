import * as bcrypt from "bcryptjs"

export const generateHash = async(password: string): Promise<string> => {
    const rounds = Number(process.env.HASH_COST)
    const salt = await bcrypt.genSalt(rounds)

    return bcrypt.hash(password, salt)
}