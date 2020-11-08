import { connection } from "..";
import {User} from '../types/User'

export const selectAllUsers = async():Promise<User[]> => {
   const result = await connection.raw(`
      SELECT * FROM aula48_exercicio;
   `)

   return result[0]
}