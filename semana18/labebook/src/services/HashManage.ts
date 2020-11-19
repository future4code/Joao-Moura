import * as bcrypt from "bcryptjs"

class HashManage {
    private cost: number = Number(process.env.HASH_COST)

    public async hash (plainText: string):Promise<string> {
        const salt = await bcrypt.genSalt(this.cost);
        return bcrypt.hash(plainText, salt)
    }

    public async compare (plainText: string, cypherText: string):Promise<boolean> {
        return bcrypt.compare(plainText, cypherText)
    }
}

export const hashManage: HashManage = new HashManage()