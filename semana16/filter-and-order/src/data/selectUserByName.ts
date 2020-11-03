import { connection } from "..";
import {User} from '../types/User'

export const selectUserByName = async (name: string):Promise<User[]> => {
   const result = await connection.raw(`
      SELECT * FROM aula48_exercicio
      WHERE name LIKE "%${name}%";
   `)

   return result[0]
}