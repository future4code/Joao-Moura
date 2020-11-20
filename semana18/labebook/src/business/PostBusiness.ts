import { postDataBase } from "../data/PostDataBase";
import { Post, PostInput } from "../model/Post";
import authenticator, { AuthenticationData } from "../services/authenticator";
import idGenerator from "../services/idGenerator";

class PostBusiness {
    async createPost (post: PostInput): Promise<void> {
        try {
            if(!post.photo || !post.description || !post.type){
                throw new Error("Invalid request body");
            }
    
            if(!post.token) throw new Error("Invalid token");
    
            const author: AuthenticationData = authenticator.getTokenData(post.token)
    
            if(!author.id) throw new Error("Invalid token");
     
            const newPost: Post = new Post(
                idGenerator.generateId(),
                post.photo,
                post.description,
                post.type,
                new Date(),
                author.id
            )
            
            await postDataBase.createPost(newPost)
    
        } catch (error) {
            if(error.message.includes("jwt expired")){
                throw new Error("Token expired");
            }
            throw new Error(error);
        }
    }

    async getPost (id:string, token: string): Promise<Post> {
        try {
            
            if(!id) throw new Error("Enter the Post Id")
            if(!token) throw new Error("Invalid token");
            
            const author: AuthenticationData = authenticator.getTokenData(token)
            if(!author.id) throw new Error("Invalid token");
    
            const result = await postDataBase.getPost(id)
            if (!result) throw new Error("Post not found")
    
            const post: Post = new Post(
                result.id,
                result.photo,
                result.description,
                result.type,
                result.created_at,
                result.author_id,
            )
    
            return post
    
        } catch (error) {
            if(error.message.includes("jwt expired")){
                throw new Error("Token expired");
            }
            throw new Error(error);
        }
    }
}

export default new PostBusiness()