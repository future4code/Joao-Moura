/* Exercícios de interpretação de código

1) Resultado:
    10
    10 5
------------
2) Resultado:
    10 10 10

*/


//Exercícios de escrita de código

// 1)--------------------------------

let nome
let idade

console.log(typeof(nome))
console.log(typeof(idade))
//os valores retornados são undefined

nome = prompt("Qual seu nome?")
idade = prompt("Qual a sua idade?")

console.log(typeof(nome))
console.log(typeof(idade))
//os tipos das duas variaveis retonaram String

console.log('Olá ',nome,' você tem ',idade,' anos')





// 2)----------------------------------------

let telefone = prompt('1) Qual seu numero de telefone?')
console.log('1) Qual seu numero de telefone?')
console.log('Resposta: ', telefone) 

let melhorEscola = prompt('2) Qual a melhor escola de progamação?')
console.log('2) Qual a melhor escola de progamação?')
console.log('Resposta: ', melhorEscola)

let dominarOMundo = prompt('3) Você acha que posso dominar o mundo?')
console.log('3) Você acha que posso dominar o mundo?')
console.log('Resposta: ', dominarOMundo)

let gostaDeProgramar = prompt('4) Esta gostando de programar?')
console.log('4) Esta gostando de programar?')
console.log('Resposta: ', gostaDeProgramar)

let seuNome = prompt('5) Qual é seu nome mesmo?')
console.log('5) Qual é seu nome mesmo?')
console.log('Resposta: ', seuNome)





// 3)----------------------------------------

let pratosPreferidos = ['Porco assado', 'Hamburguer', 'Pudim', 'Macarrão instataneo', 'Figado acebolado']

console.log(pratosPreferidos)

console.log('Essas são as minhas comidas favoritas: ')
console.log(pratosPreferidos[0])
console.log(pratosPreferidos[1])
console.log(pratosPreferidos[2])
console.log(pratosPreferidos[3])
console.log(pratosPreferidos[4])

pratosPreferidos[1] = prompt('Qual sua comida preferida?')
console.log(pratosPreferidos)






// 4)----------------------------------------

let perguntas = ['Nescal é melhor que Tody?', 'O feijao vai por cima do arroz?', 'Java e JavaScript são iguais?']

let respostas = [true, true, false]

console.log(perguntas[0], respostas[0])
console.log(perguntas[1], respostas[1])
console.log(perguntas[2], respostas[2])