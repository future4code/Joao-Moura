import {connection} from '../index'
import {success, warn, err} from '../index'

export const insertUser = 
async(name: string, nickname: string, email: string): Promise<any> => {
    const result = await connection("TodoListUser")
    .insert({
        id: Date.now(),
        name,
        nickname,
        email
    })

    return result
}

export const selectUseById = 
async(id: string): Promise<any> => {
    const result = await connection
    .from("TodoListUser")
    .select("id","name")
    .where({id})

    return result[0]
}

export const updateUserById = 
async(id: string, name: string, nickname: string): Promise<any> => {
    const result = await connection("TodoListUser")
    .where({id})
    .update({name, nickname})

    return result
}