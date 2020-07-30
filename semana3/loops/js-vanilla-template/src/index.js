// -------> Exercícios de interpretação de código <---------

//EXERCICIO 1
//RESPOSTA:
    // o progama esta realizando um laço de repetição
    // onde um numero e somado a variavel a cada repetição.
    // Sera impresso o numero 10

//EXERCICIO 2
//RESPOSTA:
    // a) valor impresso :  19, 21, 23, 25, 27, 30
    // b) Sim, desde que voce use outra variavel para verificar o indice.
    //    ex:
            // const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
            // let indice = 0

            // for (let numero of lista) {
            //   if (numero > 18) {
            // 		console.log(`O ${numero} esta no indice ${indice} da lista`)
            //     }
            //     indice++
            // }




// -------> Exercícios de escrita de código <---------

//EXERCICIO 3
//RESPOSTA:
// a)-------------
    // let arrayNumeros = [1,2,3,4,5,6,7,8,9]

    // for(let item of arrayNumeros){
    //     console.log(item)
    // }

// b)-------------
    // let arrayNumeros = [100,200,300,400,500,600,700,800,900]

    // for(let item of arrayNumeros){
    //     console.log(item/10)
    // }

// c)-------------
    // let arrayNumeros = [1,2,3,4,5,6,7,8,9]
    // let arrayPares = []

    // for(let item of arrayNumeros){
    //     if( item % 2 === 0){
    //         arrayPares.push(item)
    //     }
    // }
    // console.log(arrayNumeros)
    // console.log(arrayPares)

// d)-------------
    // let arrayNumeros = [88,77,66,55,44,33,22,11,00]
    // let arrayTexto = []
    
    // for(let i = 0; i < arrayNumeros.length; i++){
    //     arrayTexto.push(`O elemento do índex ${i} é ${arrayNumeros[i]}`)
    // }
    // console.log(arrayTexto)

// e)-------------
    // let arrayNumeros = [1,0,20,-5,30, -1]
    // let valorMaximo = arrayNumeros[0]
    // let valorMinimo = arrayNumeros[0]

    // for(let item of arrayNumeros){

    //     if( item > valorMaximo){
    //         valorMaximo = item
    //     } else if ( item < valorMinimo){
    //         valorMinimo = item
    //     } 
    // }
    // console.log(`O maior valor é ${valorMaximo} e o menor é ${valorMinimo}`)
