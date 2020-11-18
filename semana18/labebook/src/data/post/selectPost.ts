import { connection } from "../connection"

export const selectPost = async (id: string) :Promise<any> =>{
    try {
        const [queryResult]: any = await connection("labook_posts")
            .select("*")
            .where({ id })
            
        return queryResult

    } catch (error) {
        throw new Error(`${error}`)
    }
}