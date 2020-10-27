### Exercício 7

a) comando:

```sql
SELECT * FROM Movies
WHERE name LIKE "%vida%";
```

b) comando:

```sql
SELECT * FROM Movies
WHERE name LIKE "%Dona%" OR sinopse LIKE "%Dona%"
```
c) comando:

```sq   
SELECT * FROM Movies
WHERE release_date < now();
```
d) comando:

```sql
SELECT * FROM Movies
WHERE release_date < now() AND 
(name LIKE "%Dona%" OR sinopse LIKE "%Dona%") AND
ranking > 7;
```

> OBS: now() vs curedate()
```sql
SELECT NOW();     -- You will get 2010-12-09 17:10:18
SELECT CURDATE(); -- You will get 2010-12-09
```
