import {connection} from ".."

export const deleteUserDb = async (id: string): Promise<void> => {
    try {
        await connection("User")
            .delete()
            .where({id})
        
    } catch (error) {
        throw new Error(error.slqMessage || error.message)
    }
}