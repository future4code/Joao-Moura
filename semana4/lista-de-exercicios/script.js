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



    
// >>>>>>>>> EXERCÍCIOS DE FUNÇÕES <<<<<<<

// EXERCICIO 1) 
// RESPOSTA:
    // function segundoMaiorMenor(array){
    //     let maior = array[0]
    //     let menor = array[0]

    //     for(let i of array){
    //         if(i > maior){
    //             maior = i
    //         } else if(i < menor) {
    //             menor = i
    //         }
    //     }

    //     array.splice(array.indexOf(maior), 1)
    //     array.splice(array.indexOf(menor), 1)

    //     maior = array[0]
    //     menor = array[0]

    //     for(let i of array){
    //         if(i > maior){
    //             maior = i
    //         } else if(i < menor) {
    //             menor = i
    //         }
    //     }
    //     console.log(maior, menor)

    // }

    // const array = [10,25,30,5,4,9] //maior= 20 menor= 5
    // segundoMaiorMenor(array)


// EXERCICIO 2) 
// RESPOSTA:
    // const mensagem = () => {
    //     alert("Hello Future4")
    // }
    // mensagem()


// >>>>>>>>> EXERCÍCIOS DE OBJETOS <<<<<<<

// EXERCICIO 1) 
// RESPOSTA:
    // Array é uma estrutura de dado que armazena varias variaveis e
    // de tipos diferente, e podem ser acessadas atraves de indices.
    // Podemos usar um array quando queremos amazena um conjunto de variaveis
    // como se separacemos em um grupo.

    // Objeto é um tipo de estrutura de dados que possui propriedades, cada uma 
    // com uma chave e um valor.
    // Usamos um objeto quando abstraimos algo do mundo real para o codigo.
    // Eles possui um nivel de abstração mais proximo do ser humano.

// EXERCICIO 2) 
// RESPOSTA:
    // function criaRetangulo(lado1, lado2){

    //     return {
    //         largura: lado1,
    //         altura: lado2,
    //         perimetro: 2 * (lado1 + lado2),
    //         area: lado1 + lado2
    //     }

    // }

    // console.log(criaRetangulo(10,8))


// EXERCICIO 3) 
// RESPOSTA:
    // const filme = {
    //     titulo: 'karate kid',
    //     ano: 1984,
    //     diretor: 'John G. Avildsen',
    //     atores: ['Ralph Macchio', 'Pat Morita']
    // }

    // console.log(`Venha assistir ao filme ${filme.titulo}, de ${filme.ano},
    //  dirigido por ${filme.diretor} e estrelado por ${filme.atores} `)


// EXERCICIO 4) 
// RESPOSTA:
    // const fulano = {
    //     nome: 'Bruna',
    //     idade: 22,
    //     email: 'bruna@hotmail.com',
    //     endereco: 'rua Cesa Galvão N°123'
    // }

    // function anonimizarPessoa(pessoa){
    //     let anonimar = {...pessoa}
    //     anonimar.nome = 'Anonima'
    //     return anonimar
    // }

    // console.log(anonimizarPessoa(fulano))
    // console.log(fulano)



// >>>>>>>>> EXERCÍCIOS FUNÇÕES DE ARRAY <<<<<<<<

// EXERCICIO 1) 
// RESPOSTA:
    // const array = [
    // 	{ nome: "Pedro", idade: 20 },
    // 	{ nome: "João", idade: 10 },
    // 	{ nome: "Paula", idade: 12 },
    // 	{ nome: "Artur", idade: 89 } 
    // ]

    //a) 
        // function adultos(array){
        //     let arrayAdultos = array.filter(i => i.idade >=20) 
        //     return arrayAdultos
        // }
        // console.table(adultos(array))

    //b)
        // function adultos(array){
        //         let arrayCriancas = array.filter(i => i.idade < 20) 
        //         return arrayCriancas
        // }
        // console.table(adultos(array))


// EXERCICIO 2) 
// RESPOSTA:
//const array = [1, 2, 3, 4, 5, 6]
//a)
    //  function dobro(array){
    //      let novoArray = array.map(i => i * 2)
    //      return novoArray
    //  }
    //  console.log(dobro(array))

//b)
    // function dobro(array){
    //     let novoArray = array.map(i => String(i * 3))
    //     return novoArray
    // }
    // console.log(dobro(array))

//c)
    // function dobro(array){
    //     let novoArray = array.map(i => {
    //         if(i % 2 === 0){
    //             return `${i} é par`
    //         } else {
    //             return `${i} é impar`
    //         }
    //     })

    //     return novoArray
    // }
    // console.log(dobro(array))


// EXERCICIO 3) 
// RESPOSTA:
    // const pessoas = [
    //     { nome: "Paula", idade: 12, altura: 1.8},
    //     { nome: "João", idade: 20, altura: 1.3},
    //     { nome: "Pedro", idade: 15, altura: 1.9},
    //     { nome: "Luciano", idade: 22, altura: 1.8},
    //     { nome: "Artur", idade: 10, altura: 1.2},
    //     { nome: "Soter", idade: 70, altura: 1.9}
    // ]
//a)
    // function pessoasPermitidas(array){
    //     let permitidas = array.filter( pessoa => {
    //         if(pessoa.altura >= 1.5 && pessoa.idade > 14 && pessoa.idade < 60 ){
    //             return true
    //         } else {
    //             return false
    //         }
    //     })
    //     return permitidas
    // }
    // console.log(pessoasPermitidas(pessoas))

//b)
    // function pessoasPermitidas(array){
    //     let proibidas = array.filter( pessoa => {
    //         if(pessoa.altura >= 1.5 && pessoa.idade > 14 && pessoa.idade < 60 ){
    //             return false
    //         } else {
    //             return true
    //         }
    //     })
    //     return proibidas
    // }
    // console.log(pessoasPermitidas(pessoas))


// EXERCICIO 4) 
// RESPOSTA:
    // const consultas = [
    // 	{ nome: "João", genero: "masculino", cancelada: true, dataDaConsulta: "01/10/2019" },
    // 	{ nome: "Pedro", genero: "masculino", cancelada: false, dataDaConsulta: "02/10/2019" },
    // 	{ nome: "Paula", genero: "feminino", cancelada: true, dataDaConsulta: "03/11/2019" },
    // 	{ nome: "Márcia", genero: "feminino", cancelada: false, dataDaConsulta: "04/11/2019" }
    // ]


    // function enviarEmail(array){
    //     let mensagens = array.map(paciente =>{
    //         let txt1,txt2
    //         if(paciente.genero === 'masculino'){
    //             txt1 = 'Sr.'
    //             txt2 ='lembrá-lo'
    //         } else {
    //             txt1 = 'Sra.'
    //             txt2 ='lembrá-la'
    //         }

    //         if(paciente.cancelada){
    //             return `Olá, ${txt1} ${paciente.nome}. Infelizmente, sua consulta marcada para o dia ${paciente.dataDaConsulta} foi cancelada. Se quiser, pode entrar em contato conosco para remarcá-la`
    //         } else {
    //             return `Olá, ${txt1} ${paciente.nome}. Estamos enviando esta mensagem para ${txt2} da sua consulta no dia ${paciente.dataDaConsulta}. Por favor, acuse o recebimento deste e-mail.`
    //         }
    //     })

    //     return mensagens
    // }

    // console.log(enviarEmail(consultas))



// EXERCICIO 5) 
// RESPOSTA:
    // const contas = [
    // 	{ cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
    // 	{ cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
    // 	{ cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
    // 	{ cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
    // 	{ cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
    // 	{ cliente: "Soter", saldoTotal: 1200, compras: [] }
    // ]

    // function atualizarSaldo(array){
    //     array.forEach(conta =>{
    //         for(let i of conta.compras){
    //             conta.saldoTotal -= i
    //         }
    //         return conta.saldoTotal
    //     })

    //     return array
    // }

    // console.table(atualizarSaldo(contas))