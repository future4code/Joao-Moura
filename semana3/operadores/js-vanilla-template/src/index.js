/*
**Exercícios de interpretação de código**

1)----------------------
    a. false
    b. false
    c. true
    e. boolean

2)-----------------------
    a. undefined
    b. null
    c. 11
    d. 3
    e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
    f. 9
*/

// Exercícios de escrita de código

//1)------------------------------

// let suaIdade = Number(prompt("Qual a sua idade?"))
// let idadeAmigo = Number(prompt("Qual a idade do seu(ua) melhor amigo(a) ?"))

// console.log("Sua idade é maior do que a do seu melhor amigo? ", suaIdade > idadeAmigo)

// console.log("A diferença de idade é ", suaIdade - idadeAmigo,"anos")



//2)------------------------------

// let par = Number(prompt("Digite um numero par: "))

// console.log("O resto de", par,"dividido por 2 é ", par%2)
// //o resto da divisão de um numero par por 2 é sempre zero
// //o resto da divisão de um numero impar por 2 é sempre 1


//3)------------------------------

// let listaDeTarefas = []

// listaDeTarefas.push(prompt("Qual a 1° tarefa que você precisa realizar? "))
// listaDeTarefas.push(prompt("Qual a 2° tarefa que você precisa realizar? "))
// listaDeTarefas.push(prompt("Qual a 3° tarefa que você precisa realizar? "))

// console.log(listaDeTarefas)

// let indice = Number(prompt("Qual o indice da tarefa que você ja concluiu?"))
// listaDeTarefas.splice(indice, 1)

// console.log(listaDeTarefas)




//4)------------------------------

// let nomeDoUsuario = prompt("Insira seu nome:")
// let emailDoUsuario = prompt("Insira seu email:")

// console.log("O e-mail",emailDoUsuario,"foi cadastrado com sucesso. Seja bem-vinda(o),",nomeDoUsuario,"!")



// -----DESAFIOS----

// 1)---------------
//a)
// let fahrenheit = 77
// let kelvin = (fahrenheit - 32) * (5/9) + 273.15
// console.log(fahrenheit+"°F é igual à "+ kelvin +"°K")

//b)
// let celsius = 80
// let fahrenheit = celsius * (9/5) + 32
// console.log(celsius+"°C é igual à "+ fahrenheit +"°F")

//c)
// let celsius = 30
// let fahrenheit = celsius * (9/5) + 32
// let kelvin = (fahrenheit - 32) * (5/9) + 273.15
// console.log(celsius+"°C é igual à "+ fahrenheit +"°F e "+ kelvin +"°K")

//d)
// let celsius = Number(prompt("insira uma temperatura em celsius: "))
// let fahrenheit = celsius * (9/5) + 32
// let kelvin = (fahrenheit - 32) * (5/9) + 273.15
// console.log(celsius+"°C é igual à "+ fahrenheit +"°F e "+ kelvin +"°K")



// 2)---------------
//a)
// let kwh = 280
// let consumo = kwh * 0.05
// console.log("consumo de "+ kwh +"kwh é igual à R$" + consumo)

// let desconto = consumo - (15/100 * consumo)

// console.log("Com desconto de 15% ficara R$"+ desconto)



//3)---------------
//a)
// let libra = 20
// let kg = libra * 0.45
// console.log(libra+"lb equivalem a "+ kg +"kg")

//b)
// let onca = 10.5
// let kg = onca * 0.0283495
// console.log(onca +"oz equivalem a "+ kg +"kg") 

//c)
// let milha = 100
// let metro = milha * 1609.34
// console.log(milha + "mi equivalem a "+ metro +"m") 

//d)
// let pes = 50
// let metro = pes * 0.3048
// console.log(pes + "ft equivalem a "+ metro +"m") 

//e)
// let galao = 103.56
// let litro = galao * 3.78541
// console.log(galao + "gal equivalem a "+ litro +"l") 

//f)
// let xicara = 450
// let litro = xicara * 0.24
// console.log(xicara + "xic equivalem a "+ litro +"l") 

//g
// let galao = Number(prompt("Digite a quatidade de galoes: "))
// let litro = galao * 3.78541
// console.log(galao + "gal equivalem a "+ litro +"l") 

