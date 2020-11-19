import { postDataBase } from "../../data/PostDataBase";
import { AuthenticationData, Post, PostInput } from "../../model/Post";
import { generateId } from "../../services/generateID";
import { getTokenData } from "../../services/getTokenData";

export const createPostBusiness = async (post: PostInput): Promise<void> => {
    try {
        if(!post.photo || !post.description || !post.type){
            throw new Error("Invalid request body");
        }

        if(!post.token) throw new Error("Invalid token");

        const author: AuthenticationData = getTokenData(post.token)

        if(!author.id) throw new Error("Invalid token");
 
        const newPost: Post = new Post(
            generateId(),
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