import { Post } from "../model/Post";
import { connection } from "./connection";

class PostDataBase {
    private tableName: string = "labook_posts"

    async createPost(data:Post):Promise<void> {
        await connection
            .insert({
                id: data.id,
                photo: data.photo,
                description: data.description,
                type: data.type,
                author_id: data.authorId
            }).into(this.tableName)
    }

    async getPost(id:string):Promise<any> {
        const [queryResult] = await connection
        .select("*")
        .from(this.tableName)
        .where({ id })
        
        return queryResult
    }
}

export const postDataBase:PostDataBase = new PostDataBase()