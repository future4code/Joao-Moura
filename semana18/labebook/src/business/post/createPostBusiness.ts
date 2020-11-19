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
 
        const inputPost: Post = {
            id: generateId(),
            photo: post.photo,
            description: post.description,
            type: post.type,
            createdAt: new Date(),
            authorId: author.id
        }
        
        await postDataBase.createPost(inputPost)

    } catch (error) {
        if(error.message.includes("jwt expired")){
            throw new Error("Token expired");
        }
        throw new Error(error);
    }
}