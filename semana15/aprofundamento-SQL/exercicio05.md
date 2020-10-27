### Exercício 4
a) comando: 
```sql
SELECT COUNT(*), gender
FROM Actor
GROUP BY gender;
```
> verifica os valores iguais de uma coluna  e junta eles em grupo, além de mostra a quantidade de repetição. 

b) comando: 
```sql
SELECT id, name FROM Actor
ORDER BY name DESC;
```
c) comando: 
```sql
SELECT salary, name FROM Actor
ORDER BY salary ASC;
```
d) comando: 
```sql
SELECT salary, name FROM Actor
ORDER BY salary DESC LIMIT 3;
```
e) comando: 
```sql
SELECT AVG(salary), gender FROM Actor
GROUP BY gender;
```