import { postDataBase } from "../../data/PostDataBase";
import { AuthenticationData, Post } from "../../model/Post";
import { getTokenData } from "../../services/getTokenData";

export const getPostBusiness = async (id:string, token: string): Promise<Post> => {
    try {
        
        if(!id) throw new Error("Enter the Post Id")
        if(!token) throw new Error("Invalid token");
        
        const author: AuthenticationData = getTokenData(token)
        if(!author.id) throw new Error("Invalid token");

        const result = await postDataBase.getPost(id)
        if (!result) throw new Error("Post not found")

        const post: Post = {
            id: result.id,
            photo: result.photo,
            description: result.description,
            type: result.type,
            createdAt: result.created_at,
            authorId: result.author_id,
        }

        return post

    } catch (error) {
        if(error.message.includes("jwt expired")){
            throw new Error("Token expired");
        }
        throw new Error(error);
    }
}