import { connection } from ".."

export const selectRecipe = async(id: string): Promise<any> =>{
    try {
        const[recipe] = 
            await connection
            .select("*")
            .from("Cookenu_Recipe")
            .where({id})     

        return recipe

    } catch (error) {
        throw new Error("Could not fetch recipe");
    }
}