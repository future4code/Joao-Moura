### Exercício 7
a) comando: 
```sql
SELECT COUNT(*) FROM Movies
WHERE playing_limit_date > CURDATE()
AND rating > 7.5;
```
> resposta: 2

b) comando: 
```sql
SELECT AVG(rating) FROM Movies;
```
> resposta: 7.5

c) comando: 
```sql
SELECT COUNT(*) FROM Movies
WHERE playing_limit_date > curdate();
```
> resposta: 2

d) comando: 
```sql
SELECT COUNT(*) FROM Movies
WHERE release_date > CURDATE();
```
> resposta: 1

e) comando: 
```sql
SELECT rating, name FROM Movies
ORDER BY rating DESC LIMIT 1;
```
> resposta: 10 Doce de Mãe

f) comando: 
```sql
SELECT rating, name FROM Movies
ORDER BY rating ASC LIMIT 1;
```
> resposta: 3, Se EU Fosse Você