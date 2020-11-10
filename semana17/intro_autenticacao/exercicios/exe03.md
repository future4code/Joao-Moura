### Exercício 03


a)O que a linha as string faz? Por que precisamos usar ela ali?
 > converte o valor para uma string pós o conteúdo  do .env pode ser numeros também

 b)Agora, crie a função que gere o token. Além disso, crie um type  para representar o input dessa função
```ts
import * as jwt from "jsonwebtoken"
import { AuthenticationData } from "../types/AuthenticationData"

export const generateToken = (id: AuthenticationData):string =>{
   const expiresIn: string = "1min"
   
   return jwt.sign(
        { id },
        process.env.JWT_KEY as string,
        { expiresIn }
    )
}
```
