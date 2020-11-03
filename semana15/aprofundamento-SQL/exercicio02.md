### Exercício 2
a) comando: 
```sql
UPDATE Actor SET 
name = "Fernanda da Silva", 
birth_date = "1920-11-20"
WHERE id = "003";
```
b) comando: 
```sql
UPDATE Actor
SET name = "JULIANA PÃES"
WHERE name = "Juliana Paes";
```
> alterando nome 
```sql
UPDATE Actor
SET name = "Juliana Paes"
WHERE name = "JULIANA PÃES";
```
c) comando: 
```sql
UPDATE Actor SET 
name = "Chaves",
salary = 700000,
birth_date = "1928-10-01",
gender = "male"
WHERE id = "005";
```
d)
c) comando: 
```sql
UPDATE Actor SET 
name = "Fulano",
WHERE id = "111";
```
> o comando é executado mas nenhum dado é altera, pois não foi encontrado nenhum registro com esse id.
