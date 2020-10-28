### Exercício 8
a) comando: 
```sql
SELECT name FROM Movies
ORDER BY name ASC;
```
b) comando: 
```sql
SELECT name FROM Movies
ORDER BY name DESC LIMIT 5;
```
c) comando: 
```sql
SELECT name, release_date FROM Movies
WHERE release_date < curdate()
ORDER BY release_date DESC LIMIT 3;
```
c) comando: 
```sql
SELECT name, rating FROM Movies
ORDER BY rating DESC LIMIT 3;
```