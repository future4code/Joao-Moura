import { connection } from "..";
import {TYPE} from '../types/Type'
import {User} from '../types/User'

export const selectUserByType = async (type: TYPE):Promise<User[]> => {
   const result = await connection.raw(`
      SELECT * FROM aula48_exercicio
      WHERE type LIKE "%${type}%";
   `)
   
   return result[0]
}