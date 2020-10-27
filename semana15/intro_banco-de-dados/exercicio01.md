### Exercício 1
```sql
CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
	gender VARCHAR(6) NOT NULL
);
```

a) 
- `CREATE TABLE`, cria uma nova tabela.
- id, name, salary, birth_date e gender, são os nomes das colunas.
- `VARCHAR(n°)`: representa um dado do tipo string e a quantidade de caracteres.
- `PRIMARY KEY`: significa que aquela coluna é uma chave primaria e não pode se repetir.
- `NOT NULL`: a coluna não pode ser nula, ou sem valor.
- `DATE`: é um tipo de dado.

b) 
- `SHOW DATABASES`: mostra o nome do schema que estamos usando.
- `SHOW TABLE`: mostra o nome de todas as tablelas do schema.

c)
- `DESCRIBE nome_da_tabela`: mostra a tabela com suas informações, nome das colunas, tipo de dados, restrições e seus valores.
---

