### Exercício 5

a) comando:

```sql
CREATE TABLE Movies (
	id int PRIMARY KEY NOT NULL UNIQUE,
    name VARCHAR(50) NOT NULL,
    sinopse TEXT,
    release_date DATE NOT NULL,
    ranking int
);
```
> cria uma tabela com as colunas: id(inteiro e chave primaria), name(string, não vazia), sinopse(tipo texto),
release_date(uma data não vazia) e ranking(um numero inteiro)


- b, c, d, e)  foi inserido todos os dados.