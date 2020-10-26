

### Exercício 3
a) comando:

```sql
SELECT * FROM Actor WHERE gender = "female";
```

b) comando:

```sql
SELECT salary FROM Actor WHERE name = "Tony Ramos";
```

c) comando:

```sql
SELECT * FROM Actor WHERE gender = "invalid";
```
> não retorna nada, pois nenhuma coluna possui o valor informado

d) comando:

```sql
SELECT id, name, salary FROM Actor WHERE salary < 500000;
```
e) Comando com erro:
```sql
SELECT id, nome from Actor WHERE id = "002"
```

```
Error Code: 1054. Unknown column 'nome' in 'field list'
```
> o nome da coluna estar escrito errado, "nome" -> "name"

- Solução
```sql
-- alterar para "name"
SELECT id, name from Actor WHERE id = "002"
```