import { Post } from "../../types/types"
import { connection } from "../connection"

export const insertPost = async (data: Post) :Promise<void> =>{
    try {
        await connection
            .insert({
                id: data.id,
                photo: data.photo,
                description: data.description,
                type: data.type,
                author_id: data.authorId
            })
            .into("labook_posts")

    } catch (error) {
        throw new Error(`${error}`)
    }
}