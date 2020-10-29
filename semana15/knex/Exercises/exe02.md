### EXERCICÍO 2

a)Uma função que receba um salário e um id e realiza a atualização do salário do actor em questão:

```js
export const updateSalary = async (id: string, salary: number ): Promise<number> => {
    const result = await connection('Actor').where({id}).update({salary})
    return result
}
```

b) Uma função que receba um `id` e delete um actor da tabela:
```js
export const deleteActorById = async (id: string ): Promise<number> => {
    const result = await connection('Actor').where({id}).delete()
    return result
}
```
c)  Uma função que receba um `gender` e devolva a média dos salários de atrizes ou actores desse gender
```js
export const selectAvgSalaryByGender = async (gender: string ): Promise<any> => {
    const result = await connection('Actor')
    .avg("salary as average")
    .where({ gender })

    return result[0]
}
```