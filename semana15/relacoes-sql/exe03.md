### EXERCÍCIO 3

a)Explique, com suas palavras, a query acima. O que é o operador ON?

```sql
SELECT * FROM Movie 
INNER JOIN Rating ON Movie.id = Rating.movie_id;
```
>faz a junção das tabelas Movie e Rating, organizando cada registro pelo id 

b)Escreva uma query que retorne somente o nome, id e nota de avaliação dos filmes que já foram avaliados.

```sql
SELECT Movies.id, Movies.name, Rating.rate 
FROM Movies JOIN  Rating
ON Rating.movie_id = Movies.id
WHERE Rating.rate IS NOT NULL;
```
