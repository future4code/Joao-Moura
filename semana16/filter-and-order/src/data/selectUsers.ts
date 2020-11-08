import { connection } from "..";
import { Query } from "../types/Query";
import {User} from '../types/User'

export const selectUsers = async(query: Query):Promise<User[]> => {
   const result = await connection.raw(`
      SELECT * FROM aula48_exercicio
      WHERE name LIKE "%${query.name}%" 
      OR type LIKE "%${query.type}%"
      ORDER BY ${query.order}
      LIMIT 5 
      OFFSET ${query.page < 0 ? 0 : query.page*5 - 1 };
   `)

   return result[0]
}