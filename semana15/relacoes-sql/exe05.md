### EXERCÍCIO 5

```sql
SELECT * FROM Movies m
LEFT JOIN MovieCast mc ON m.id = mc.movie_id
JOIN Actor a ON a.id = mc.actor_id;
```

a) Explique, com suas palavras essa query. Por que há a necessidade de dois JOIN?
> Porque como são 3 tabelas, ele faz primeiro a junção de duas, e o resultado ele junta com a terceira.

b)Altere a query para que ela retorne o id e o título do filme, e o id e o nome do ator. Coloque alias para facilitar o endentimento do retorno da query

```sql
SELECT
	 m.id AS movie_id,
     m.name AS title,
     a.id AS actor_id,
     a.name AS actor  
FROM
	Movies AS m 
LEFT JOIN 
	MovieCast AS mc ON m.id = mc.movie_id 
JOIN 
	Actor AS a ON a.id = mc.actor_id;
```
c) A query abaixo deveria ser a resposta do item b. Tente rodá-la. Anote e explique o resultado.

```sql
SELECT m.id as movie_id, m,title, a.id as actor_id, a.name FROM Movie m
LEFT JOIN MovieCast mc ON m.id = mc.movie_id
JOIN Actor a ON a.id = mc.actor_id;
```
- erro:
```sql
 Error Code: 1054. Unknown column 'm' in 'field list'
```
> eu não entendi muito bem essa sintaxe


d) A query abaixo deveria ser a resposta do item b. Tente rodá-la. Anote e explique o resultado.

```sql
SELECT
     a.name AS actor, 
     m.name AS movie,
	 r.rate As rate,
     r.comment As comment
FROM Movies AS m 
LEFT JOIN MovieCast AS mc ON m.id = mc.movie_id 
JOIN Actor AS a ON a.id = mc.actor_id
JOIN Rating AS r ON r.movie_id = mc.movie_id;
```

