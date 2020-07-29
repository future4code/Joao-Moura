//=====Exercícios de interpretação de código=====

//EXERCÍCIO 1
    //-RESPOSTA:
    // -O código verifica se um numero é par ou impar
    // -ele responde "Passou no teste" para os numeros
    //   pares, ou seja ,aqueles em que o resto da divisão
    //   por 2 é igual a zero
    // -ele responde "Não passou no teste" para os numeros
    //   impares, ou seja ,aqueles em que o resto da divisão
    //   por 2 é diferente de zero

//EXERCICIO 2
    //-RESPOSTA:
    // a) serve para verificar o preço de um fruta
    // b) "O preço da fruta Maçã é R$ 2.25"
    // c) "O preço da fruta Pêra é R$ 5"

//EXERCICIO 3
    //RESPOSTA:
    // a) esta pedido que o usuario insira um numero, depois
    //     converte esse numero que vem como strig para Number,
    //     e armazena em uma variavel.
    // b) caso ele tenha digitado 10, a mensagem seria "Esse número passou no teste"
    //    e logo após, um erro de variavel nao encontrada.
    //    Caso ele digite -10, apenas seria apresentado um erro
    //    de variavel não encontrada.
    // c) sim vai haver um erro, por conta da variavel 'mensagem'
    //    so estar visivel dentro do escopo do if, e não fora dele,
    //    quando o console.log busca por essa variavel ela não a 
    //    encontra, pois ela não esta visivel para ele.







//======Exercícios de escrita de código=========
//EXERCICIO 4
    // RESPOSTA: 
    // let idade = Number(prompt("Qual a sua idade?"))

    // if(idade > 17){
    //     console.log("Você pode dirigir")
    // } else {
    //     console.log("Você não pode dirigir")
    // }

//EXERCICIO 5
    // RESPOSTA:

    // let turno = prompt("Informe o turno que estuda matutino[M], vespentino[V], noturno[N]")

    // if(turno === "M"){
    //     console.log("Bom Dia!")

    // } else if (turno === "V"){
    //     console.log("Boa Tarde!")

    // } else if (turno === "N"){
    //     console.log("Ba Noite!")
    // } else {
    //     console.log("Turno invalido!")
    // }

//EXERCICIO 6
//RESPOSTA:
    // let turno = prompt("Informe o turno que estuda matutino[M], vespentino[V], noturno[N]")

    // switch(turno){
    //     case "M":
    //         console.log("Bom Dia!")
    //         break
    //     case "V":
    //         console.log("Boa Tarde!")
    //         break
    //     case "N":
    //         console.log("Ba Noite!")
    //         break 
    //     default:
    //         console.log("Turno invalido!")
    //         break
    // }



//EXERCICIO 7
//RESPOSTA:
    // let genero = prompt("Qual gênero de filme você quer assistir?")
    // let preco = Number(prompt("Qual o o preço do ingresso?"))

    // if( genero === "fantasia" && preco < 15){
    //     console.log( "Bom filme!")
    // } else {
    //     console.log("Escolha outro filme :(")
    // }
