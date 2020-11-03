### EXERCÍCIO 2 
>Criação da tabela de relacionamentos
```sql
CREATE TABLE MovieCast (
	movie_id VARCHAR(255),
	actor_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id),
    FOREIGN KEY (actor_id) REFERENCES Actor(id)
);
```
a) Explique, com as suas palavras, essa tabela
> Ela possui as referências entre atores e filmes 

b) Crie, ao menos, 6 relações nessa tabela
```sql
INSERT INTO MovieCast
VALUES(005, "003");
```
c) Tente criar uma relação com um filme ou um ator inexistente. Anote e explique o resultado da query
```sql
SELECT Actor.name , Movies.name
FROM Actor JOIN MovieCast
ON MovieCast.actor_id = Actor.id
JOIN Movies ON MovieCast.movie_id = Movies.id;
```
> mostra o nome do ator relacionado a um filme

d) Tente apagar um ator que possua uma relação nessa tabela. Anote e explique o resultado da query
- comando:
```sql
DELETE FROM Actor 
WHERE id = "002";
```
- erro:
```sql
Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`jackson-joao-paulo-pereira`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))
```
> não conseguimos apagar pois esse registro faz referência a outra tabela.  