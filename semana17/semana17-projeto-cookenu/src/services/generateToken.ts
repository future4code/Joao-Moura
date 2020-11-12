import * as jwt from "jsonwebtoken"

export const generateToken = (id: string):string =>{
    const expiresIn: string = "2min"

    return jwt.sign(
        {id},
        process.env.JWT_KEY as string,
        {expiresIn}
    )
}