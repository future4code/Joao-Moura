import { connection } from "..";
import {User} from '../types/User'

export const selectUserPage = async(page: number):Promise<User[]> => {
   const result = await connection.raw(`
      SELECT * FROM aula48_exercicio
      LIMIT 5 
      OFFSET ${page < 0 ? 0 : page*5 - 1 };
   `)

   return result[0]
}