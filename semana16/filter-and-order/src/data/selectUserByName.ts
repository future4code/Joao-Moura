import { connection } from "..";
import { Filter } from "../types/Filter";
import {User} from '../types/User'

export const selectUserByName = async (filter: Filter):Promise<User[]> => {
   const result = await connection.raw(`
      SELECT * FROM aula48_exercicio
      WHERE name LIKE "%${filter.name}%"
      ORDER BY ${filter.order};
   `)

   return result[0]
}