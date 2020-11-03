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
INSERT INTO Rating
VALUES("004","Bastante engraçado ", 20, "007");
```

c)Tente criar uma avaliação para um filme que não existe (ou seja, um id inválido). Anote e explique o resultado da query.
- comando:
```sql
INSERT INTO Rating
VALUES("004","Bastante engraçado ", 20, "1000");
```
- erro:
```sql
Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`jackson-joao-paulo-pereira`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movies` (`id`))
```
> ele mostra uma restrição de chave estrangeira, pois não encontrou esse ID na tabela de referência.

d)Altere a tabela de filmes para que ela não tenha mais uma coluna chamada rating.
```sql
ALTER TABLE Movies
DROP rating;
```

e) Tente apagar um filme que possua avaliações. Anote e explique o resultado da query.
- comando:
```sql
DELETE FROM Movies 
WHERE id = "007";
```
- erro:
```sql
Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`jackson-joao-paulo-pereira`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movies` (`id`))
```
> não conseguimos apagar pois esse registro faz referência a outra tabela.   