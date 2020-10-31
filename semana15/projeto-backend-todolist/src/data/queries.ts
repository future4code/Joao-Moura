import {connection} from '../index'
import {success, warn, err} from '../index'
import { STATUS, formattedDate } from '../utils/utils'

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

export const insertTask = 
    async(title: string, limit_date: string, description: string, creator_user_id: string, status: STATUS): Promise<any> => {
        const result = await connection("TodoListTask")
        .insert({
            id: Date.now(),
            title, 
            limit_date: formattedDate(limit_date),
            description,
            creator_user_id,
            status: status
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

export const selectTaskById = 
    async(id: string): Promise<any> => {
        const result = await connection.raw(`
            SELECT tt.*, tu.nickname from TodoListTask as tt
            JOIN TodoListUser AS tu ON tu.id = tt.creator_user_id
            where tt.creator_user_id = "001"; 
        `)
        
    return result[0]
}


export const updateUserById = 
    async(id: string, name: string, nickname: string): Promise<any> => {
        const result = await connection("TodoListUser")
        .where({id})
        .update({name, nickname})

    return result
}