### EXERCÍCIO 1
>Criação de tabela com chave estrangeira
```sql
CREATE TABLE Rating (
		id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
		rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id)
)
```

a) Explique o que é uma chave estrangeira
> é a chave primaria de tabela que fazemos referência

b) Crie a tabela e, ao menos, uma avaliação para cada um dos filmes
```sql

```

c)
```sql

```

d)
```sql

```

e)
```sql

```