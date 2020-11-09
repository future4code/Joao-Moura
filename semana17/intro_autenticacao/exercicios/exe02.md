### Exercício 02

```ts
const userTableName = "User";

const connection = knex({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE_NAME,
  },
});

const createUser = async (id: string, email: string, password: string) => {
  await connection
    .insert({
      id,
      email,
      password,
    })
    .into(userTableName);
};
```
a)Explique o código acima com as suas palavras.
 > adiciona um usuário a tabela User do banco de dados, passando o
 > ID, E-MAIL e PASSWORD

 b)Comece criando a tabela de usuários. Coloque a query que você utilizou no arquivo de respostas.
```sql
CREATE TABLE User (
	id VARCHAR(255) PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);
```

c)Pela mesma justificativa do exercício anterior, crie uma função para ser responsável
 pela criação de usuários no banco.

 ```ts
import {connection} from ".."

export const insertUser = async (
    id: string, name: string, email: string, password: string
): Promise<void> => {

    try {
        await connection
            .insert({id, name, email, password})
            .into("User")
        
    } catch (error) {
        throw new Error ("Não foi possível criar o usuário")
    }
}
 ```