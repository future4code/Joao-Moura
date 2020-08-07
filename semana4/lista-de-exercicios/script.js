// >>>>>>>>> EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO <<<<<<<

// EXERCICIO 1)
// RESPOSTA:
    //O QUE ELE FAZ: 
        //retorna o valor um valor em dólar multiplicado pela cotação.
    //COMO FAZ:
        //existe uma função que recebe como paramentro um valor em dólar,
        //que quando executada, pede ao usuário que insira o valor da contação,
        // e retorna o valor do dolar multiplicado pela cotação para uma variavel,
        //que e impressa pelo console.log()
    //VALOR IMPRESSO:
        // será impresso no console o valor inserido pelo usuário
        // multiplicado por 100. EX: se o usuario digitar 3, no console
        // será impresso R$300


// EXERCICIO 2)
// RESPOSTA:
    //O QUE ELE FAZ: 
        //ele mostar o valor de retorno de um investimento feito pelo usuário.
    //COMO FAZ:
        //existe uma função que recebe como paramentros o tipo de investimento e o valor
        //desse investimento. a função faz uma verificação condicional do tipo de investimento,
        //escolhido pelo usuario e multiplica esse valor de acordo com  esse tipo de investimento
        //e retorna esse valor alterado. Caso o usuário informe um um tipo de investimento invalido,
        //a função retorna uma mensagem invformando o erro.
    //VALOR IMPRESSO:
        // primeiro console.log: 165
        // segundo console.log: 'TIPO DE INVESTIMENTO INFORMADO INCORRETO!'
        

// EXERCICIO 3)
// RESPOSTA:
    //O QUE ELE FAZ: 
        // mostra a quantidade total de números de um array, a quantidade de números pares,
        // e a quantidade de números impares
    //COMO FAZ:
        //é usado um 'for of' para percorer o array principal com os números, dentro
        //desse for, e feita uma verificação condicional para verificar cada item do array,
        // e se caso o item for um número par ele é adicionado a um novo array so com números pares,
        // e caso seja impar é adicionado a outro array som com números impares.
    //VALOR IMPRESSO:
        // primeiro console.log: 'Quantidade total de números 14'
        // segundo console.log: '6'
        // tercriro console.log: '8'

// EXERCICIO 4)
// RESPOSTA:
    //O QUE ELE FAZ: 
        // dado um array de número, mostra qual o maior e o menor número desse array.
    //COMO FAZ:
        // com o array com os números ja pronto, declara-se duas variaveis, uma para armazena
        // o menor valor(inicializada com um número maior do que os dentro do array), e outra
        // para armazena o maior valor(inicializada com zero). E então realizado um 'for of' para percorre
        // o array com os números e dentro do for uma condicional é feita para verificar cada item do array
        // e ver se ele é maior ou menor que os outros, sendo esses items armazenados em suas respectivas variaveis.
        // No final e impresso o valor do maior e menor número do array de números
    //VALOR IMPRESSO:
        // primeiro console.log: 1590
        // segundo console.log: -10
        

    
// >>>>>>>>> EXERCÍCIOS DE LÓGICA DE PROGAMAÇÃO <<<<<<<

// EXERCICIO 1)
// RESPOSTA:
        //const lista = [10, 20, 30]
    //usando um "for"
        // for(let i = 0; i < lista.length; i++){
        //     console.log(lista[i])
        // }
    //usando "while"
        // let i = 0
        // while(i < lista.length){
        //     console.log(lista[i])
        //     i++
        // }
    //usando o "foreach"
        // lista.forEach(item =>{ console.log(item) })

// EXERCICIO 2) 
// RESPOSTA:
    //a) false
    //b) false
    //c) true
    //d) true
    //e) true

// EXERCICIO 3) 
// RESPOSTA:
    //nao funcionava, era necessario atribuir um valor a'quantidadeDeNumerosPares'
    //mudar a comparação do while de (<=) para (<), e adiciona +1 a svariavel 'i' dentro so while
        // const quantidadeDeNumerosPares = 5
        // let i = 0
        // while(i < quantidadeDeNumerosPares) {
        //     console.log(i*2)
        //     i++
        // }

// EXERCICIO 4) 
// RESPOSTA:
    // function tipoTriagulo(a,b,c){
    //     if(a === b && b === c){
    //         return 'triagulo equilátero'
    //     } else if( a !== b && b !== c) {
    //         return 'triagulo escaleno'
    //     } else {
    //         return 'triangulo isósceles'
    //     }
    // }
    // console.log(tipoTriagulo(9,8,10))

// EXERCICIO 5) 
// RESPOSTA:
    // function comparcao(num1, num2){
    //     let maior = num1
    //     let menor = num2

    //     if(num1 > num2){
    //         maior = num1
    //         menor = num2
    //     } else if (num2 > num1){
    //         maior = num2
    //         menor = num1
    //     } 
        
    //     console.log(`O maior é: ${maior}`)

    //     if(num1 % num2 === 0){
    //         console.log(`${num1} é divisivel por ${num2}`)
    //     } else {
    //         console.log(`${num1} não é divisivel por ${num2}`)
    //     }

    //     if(num2 % num1 === 0){
    //         console.log(`${num2} é divisivel por ${num1}`)
    //     } else {
    //         console.log(`${num2} não é divisivel por ${num1}`)
    //     }

    //     console.log('A diferença entre eles é', maior-menor)
    // }

    // comparcao(10, 40)