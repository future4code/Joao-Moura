import { connection } from ".."
import { Recipe } from "../types/recipe";

export const insertRecipe = async(recipe: Recipe): Promise<void> => {
    try {
        await connection
            .insert({
                id: recipe.id,
                title: recipe.title,
                description: recipe.description,
                crated_At: recipe.cratedAt,
                id_User: recipe.idUser
            })
            .into("Cookenu_Recipe")
        
    } catch (error) {
        throw new Error("Could not create recipe");
    }
}