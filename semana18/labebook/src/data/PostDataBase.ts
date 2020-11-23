import { Post } from "../model/Post";
import BaseDataBase from "./BaseDataBase";

class PostDataBase extends BaseDataBase {
    private tableName: string = "labook_posts"

    public async createPost(post:Post):Promise<void> {
        await BaseDataBase.connection
            .insert({
                id: post.getId(),
                photo: post.getPhoto(),
                description: post.getDescription(),
                type: post.getType(),
                author_id: post.getAuthorId()
            })
            .into(this.tableName)
    }

    public async getPost(id:string):Promise<any> {
        const [queryResult] = await BaseDataBase.connection
        .select("*")
        .from(this.tableName)
        .where({ id })
        
        return queryResult
    }
}

export const postDataBase: PostDataBase = new PostDataBase()