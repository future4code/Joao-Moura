### Exercício 01
a)Qual a sua opinião em relação a usar strings para representar os ids?
 Você concorda que seja melhor do que usar números?
 > R: Usar strings é bem melhor, pois juntando vários tipos de caracteres
 > diferente podemos gerar um ID mais difícil de se repetir

 b)Crie uma função para gerar um id:
```ts
import {v4} from "uuid"

export const generateId = (): string => {
    return v4()
}
```