import { selectPost } from "../../data/post/selectPost";
import { getTokenData } from "../../services/getTokenData";
import { AuthenticationData, Post } from "../../types/types"

export const getPostBusiness = async (id:string, token: string): Promise<Post> => {
    try {
        
        if(!id) throw new Error("Enter the Post Id")
        if(!token) throw new Error("Invalid token");
        
        const author: AuthenticationData = getTokenData(token)
        if(!author.id) throw new Error("Invalid token");

        const queryResult = await selectPost(id)
        if (!queryResult) throw new Error("Post not found")

        const post: Post = {
            id: queryResult.id,
            photo: queryResult.photo,
            description: queryResult.description,
            type: queryResult.type,
            createdAt: queryResult.created_at,
            authorId: queryResult.author_id,
        }

        return post

    } catch (error) {
        if(error.message.includes("jwt expired")){
            throw new Error("Token expired");
        }
        throw new Error(error);
    }
}