import { insertPost } from "../../data/post/insertPost";
import { generateId } from "../../services/generateID";
import { getTokenData } from "../../services/getTokenData";
import { AuthenticationData, Post, POST_TYPES } from "../../types/types"

export const createPostBusiness = async (
    photo:string, description:string, type:POST_TYPES, token: string
): Promise<void> => {
    try {
        if(!photo || !description || !type){
            throw new Error("Request body invalid");
        }

        if(!(type.toUpperCase() in POST_TYPES)){
            throw new Error("escolha o tipo 'normal' ou 'event'")
        }

        if(!token) throw new Error("token invalido");

        const author: AuthenticationData = getTokenData(token)

        if(!author.id) throw new Error("Não autorizado");
 
        const inputPost: Post = {
            id: generateId(),
            photo,
            description,
            type,
            createdAt: new Date(),
            authorId: author.id
        }
        
        await insertPost(inputPost)

    } catch (error) {
        if(error.message.includes("jwt expired")){
            throw new Error("Token expirado");
        }
        throw new Error(error);
    }
}