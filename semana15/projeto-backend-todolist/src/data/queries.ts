import {connection} from '../index'
import {success, warn, err} from '../index'
import { STATUS } from '../utils/utils'

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
async(id: string, title: string, limitDate: string, creatorUserId: string, status: STATUS): Promise<any> => {
    const result = await connection("TodoListTask")
    .insert({
        id: Date.now(),
        title, 
        limitDate, //devo converter o formato da data
        creatorUserId: id,
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

export const updateUserById = 
async(id: string, name: string, nickname: string): Promise<any> => {
    const result = await connection("TodoListUser")
    .where({id})
    .update({name, nickname})

    return result
}