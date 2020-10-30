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