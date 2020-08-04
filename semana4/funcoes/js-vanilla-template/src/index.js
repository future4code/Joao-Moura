// >>> Exercícios de interpretação de código <<<

//EXERCICIO 1
//RESPOSTA:
    // a) 10
    //    50
    // b) não seria impresso nada no console

//EXERCICIO 2
//RESPOSTA:
    // a) sera impresso "Darvas" depois "Goli"
    // b) "Amanda" e "Caio"

//EXERCICIO 3
//RESPOSTA:
    // ele recebe um array, e retorna um novo array com
    // os items que forem pares ao quadrado.
    // Um nome melhor oara a função seria numParAoQuadrado()




// >>> Exercícios de escrita de código <<<
//EXERCICIO 4
//RESPOSTA:
    // a)
    //  function mensagem(){
    //      console.log("Eu sou João Paulo, tenho 22 anos, moro em Altos e sou estudante.")
    //  }
    //  mensagem()

// b)
    // function mensagem(nome, idade, cidade, estuda){
    //     let resp  = "não sou" 
    //     if(estuda){
    //         resp = "sou"
    //     }

    //     return `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e ${resp} estudante.`
    // }

    // console.log(mensagem("João Paulo", 22, "Altos", false))


//EXERCICO 5
//RESPOSTA:
// a)
    // function soma(num1, num2){
    //     return num1 + num2
    // }
    // console.log(soma(5,10))

// b)
    // function verificarNumero(num1, num2){
    //     if(num1 >= num2){
    //         return `${num1} é maior ou igual à ${num2}? ${true}`
    //     } else {
    //         return `${num1} é maior ou igual à ${num2}? ${false}`
    //     }
    // }

    // console.log(verificarNumero(0, 5))

// c)
    // function repetiMensagem(mensagem){
    //     for(let i = 0; i < 10; i++ ){
    //         console.log(mensagem)
    //     }
    // }
    // repetiMensagem("bom dia")


//EXERCICO 6
//RESPOSTA:
//const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

// a)
    // const numeroDeElementos= (array) => {
    //     return array.length
    // }
    // console.log(numeroDeElementos(array)) 
    
// b)
    // const verificarPar = (num) => {
    //     if(num % 2 === 0){
    //         return true
    //     } else {
    //         return false
    //     }
    // }
    // console.log(verificarPar(3))

// c)
    // const quantidadePares = (array) => {
    //     let contador = 0 
    //     for(let item of array){
    //         if(item % 2 === 0){
    //             contador++
    //         }
    //     }
    //     return contador
    // }
    // console.log(quantidadePares(array))

// d)
    // const quantidadePares = (array) => {
    //     let contador = 0 

    //     for(let item of array){
    //        if(verificarPar(item)){
    //            contador++
    //        }
    //     }

    //     return contador
    // }
    // console.log(quantidadePares(array))



// >>> DESAFIOS <<<

//EXERCICO 1
//RESPOSTA:
    // const funcao1 = (valor) => {
    //     console.log(valor)
    // }

    // const funcao2 = (valor1, valor2) => {
    //     funcao1(valor1+valor2)
    // }

    // funcao2(10,5)


//EXERCICO 2
//RESPOSTA:
const numeros = [0, 8, 23, 16, 10, 15, 41, 12, 13]

// a)
    // const dobroNumeroPar = (array) => {
    //     let novoArray = []

    //     for(let item of array){
    //         if(item % 2 === 0){
    //             novoArray.push(item*2)
    //         }
    //     }

    //     return novoArray
    // }

    // console.log(dobroNumeroPar(numeros))

// b)
    // const maiorNumero = (array) => {
    //     let maior = array[0]

    //     for(let item of array){
    //         if(item > maior){
    //             maior = item
    //         }
    //     }
    //     return maior
    // }

    // console.log(maiorNumero(numeros))

// c)
    // const maiorNumero = (array) => {
    //     let maior = array[0]
    //     let indice = 0

    //     for(let i = 0; i < array.length; i++){
    //         if(array[i] > maior){
    //             maior = array[i]
    //             indice = i
    //         }
    //     }
    //     return indice
    // }

    // console.log(maiorNumero(numeros))

// d)
    // const arrayInverso = (array) => {
    //     let inverso = []

    //     for(let i = array.length-1; i >= 0; i--) {
    //         inverso.push(array[i])
    //     }

    //     return inverso
    // }
    // console.log(arrayInverso(numeros))