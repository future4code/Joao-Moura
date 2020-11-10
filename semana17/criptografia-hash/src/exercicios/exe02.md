### EXERCICÍCIO 02

a) Para realizar os testes corretamente, qual deles você deve modificar primeiro?
 O cadastro ou o login? Justifique.
 > primeiro modificamos o endpoint de cadastro para assim termos a senha encriptada
 > armazenada no BD, assim podemos fazer uma verificação das hash no momento do login.

 b)No exercício de ontem, nós criamos o endpoint user/profile.
  Também temos que modificar esse endpoint devido à adição da criptografia? Justifique.
  > Não foi necessário