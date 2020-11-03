### EXERCICÍO 1

a) Explique como é a resposta que temos quando usamos o raw
> é retornado um array com um com os dados e outro com os metadados.

ex:
```js
[
    [
        {dados},
        {},
        {}
    ],
    [
        {metadados},
        {},
        {}
    ]
]
```

b) Faça uma função que busque um actor pelo nome;

```ts
export const getUser = async (req:Request, res:Response): Promise<void> =>{
    try {
        const {name} = req.query

        if(!name){
            throw new Error("the name was not informed")
        }

        const result = await connection.raw(`
            SELECT * FROM Actor
            WHERE LOWER(name) = LOWER("${name}")
        `)

        if(!result[0].length){
            throw new Error("It was not possible to find the list of actors")
        }

        res.status(200).send(result[0])
    } catch (error) {
        res.status(400).send(error.message)
    }
}
```

c) Faça uma função que receba um `gender` retorne a quantidade de itens na tabela `Actor` com esse `gender`.
   Para atrizes, `female` e para actores `male`.
```ts
export const selectQuantityByGender = async (gender: string): Promise<any> => {
    const result = await connection.raw(`
            SELECT COUNT(*) AS "Count of ${gender}" FROM Actor
            WHERE LOWER(gender) = LOWER("${gender}");
    `)

    return result[0]
}
```