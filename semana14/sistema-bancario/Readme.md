### F4 Bank

### O que funciona
- Lista os usuários
- Cadastrar novo usuário 
- Busca por um usuário
- Realiza deposito
- Agenda pagamento
- Atualizar e realiza os pagamentos agendados

### O que não funciona
- Realizar transferência

### EndPoins
------------------------------
- GET /users
retorna lista de usuários
-----------------------------
- POST /users
cria um novo usuario
> Body
{
    "name": "João Paulo",
    "cpf": "999605",
    "dt_birth": "23/10/2003"
}
----------------------------------
- GET /users/:cpf
busca um usuário especifico
--------------------------------
- PUT /users
realizar um deposito
> Body
{
    "name": "Maria da silva",
    "cpf": "1234567896",
    "value": 300
}
-------------------------
- POST /users/payment
agenda um pagamento (caso não passe a data, será agendado para o dia atual)
> Body
{
    "description": "Material escolar",
    "cpf": "1234567896",
    "value": 10,
    "date": "10/11/2020"
}
-----------------------------------
- PUT /users/payment
realizar os pagamentos caso esteja na data correta e possua saldo suficiente
> Body 
{
    "cpf": "1234567896"
}







