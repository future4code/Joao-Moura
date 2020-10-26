### Exercício 4

a)
```sql
SELECT * FROM Actor
WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000
```
> buscar todas as informações dos atores que tenha a inicial do nome "A" ou "J", e que recebam um salário maior que 300 mil. 

b) Comando
```sql
SELECT * FROM Actor
WHERE name NOT LIKE "A%" AND salary > 350000
```

c) Comando
```sql
SELECT * FROM Actor
WHERE name LIKE "%G%" OR name LIKE "%g%";
```

d) Comando
```sql
SELECT * FROM Actor WHERE (
name LIKE "%G%" OR
name LIKE "%g%" OR
name LIKE "%A%" OR
name LIKE "%a%" ) AND 
(salary BETWEEN 350000 AND 900000 );
```