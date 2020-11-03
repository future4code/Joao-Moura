### Exercício 6
a) comando: 
```sql
ALTER TABLE Movies
ADD playing_limit_date DATE;
```
b) comando: 
```sql
ALTER TABLE Movies CHANGE ranking rating FLOAT;
```
c) comando: 
```sql
UPDATE Movies SET 
playing_limit_date = "2020-01-01"
WHERE id = "002";
```
 
```sql
UPDATE Movies SET 
playing_limit_date = "2020-12-30"
WHERE id = "003";
```
d) comando:
```sql
DELETE FROM Movies 
WHERE id = "001";
```
```sql
DELETE FROM Movies 
WHERE id = "001";
```
```
0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0
```
> o comando rodou mas não realizou nenhuma alteração

