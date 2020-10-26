
### Exercício 2
a) comando: 
```sql
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Glória Pires", 
  12000,
  "1963-08-24", 
  "male"
);
```
<br/>
<br/>
<br/>


b)
Erro gerado ao tentar adicionar um dado com a mesma primary key:
```
	Error Code: 1062. Duplicate entry '002' for key 'PRIMARY'	0,065 sec
```
> o erro diz que não podemos duplicar uma primary key.

<br/>
<br/>
<br/>


c) Comando com erro:

```sql
INSERT INTO Actor (id, name, salary)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
```
```
Error Code: 1136. Column count doesn't match value count at row 1
```
> a quantidade de colunas não corresponde a quatidade de valores possados.

- Solução
```sql
-- adicionar as colunas que estavam faltando
INSERT INTO Actor (id, name, salary, birth_date, gender)
-- ou omitir, caso seja passado todos os valores correspondentes.
INSERT INTO Actor
```

<br/>
<br/>
<br/>


d) Comando com erro:
```sql
INSERT INTO Actor (id, salary, birth_date, gender)
VALUES(
  "004",
  400000,
  "1949-04-18", 
  "male"
);
```

```
Error Code: 1364. Field 'name' doesn't have a default value
```
> a coluna 'name' nao pode ser nula é não possui um valor padrão

- Solução
```sql
-- adicionar a coluna name e seu valor
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004",
  "Dona Maria",
  400000,
  "1949-04-18", 
  "male"
);
```

<br/>
<br/>
<br/>


e) Comando com erro:
```sql
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  1979-03-26, 
  "female"
);
```

```
Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1
```
> a coluna 'birth_date' deve receber uma String no formato "yyyy-mm-dd"

- Solução
```sql
-- basta definir a data entre aspas duplas "" 
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);
```