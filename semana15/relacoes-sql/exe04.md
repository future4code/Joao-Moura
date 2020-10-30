### EXERCÍCIO 4

a)Escreva uma query que retorne todos os filmes e suas avaliações (com essa avaliação existindo ou não). A sua query deve retornar somente o nome, id, nota do filme e comentário.

```sql
SELECT Movies.id, Movies.name, Rating.rate 
FROM Movies JOIN  Rating
ON Rating.movie_id = Movies.id
```

b)Escreva uma query que retorne todas as relações de elenco, junto com as informações do filme. A sua query deve retornar o id do filme, título do filme e id do ator.

```sql
SELECT Movies.id, Movies.name, MovieCast.actor_id
FROM Movies JOIN  MovieCast
ON Movies.id = MovieCast.movie_id;
```

c) Escreva uma query que retorne a média das avaliações de todos os filmes agrupada em relação aos filmes (mesmo que ele não tenha sido avaliado ainda)

```sql
SELECT AVG(rate), Movies.name
FROM Movies JOIN  Rating
ON Movies.id = Rating.movie_id
GROUP BY Movies.name;
```