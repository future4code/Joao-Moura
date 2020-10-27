### Exercício 1
a) comando: 
```sql
ALTER TABLE Actor DROP COLUMN salary;
```
> apaga a coluna salary da tabela Actor

b) comando:
```sql
ALTER TABLE Actor CHANGE gender sex VARCHAR(6);
```
> altera  o nome é o tipo de uma coluna

c) comando:
```sql
ALTER TABLE Actor CHANGE gender gender VARCHAR(255);
```
> altera o tipo de uma coluna

d) comando:
```sql
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);
```
