/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
alert(" >>>>> Bem vindo ao jogo de Blackjack! <<<<<")

let jogar = confirm("Quer iniciar uma nova rodada?")

if(jogar){
   let usuarioCards = []
   let computadorCards = []
   let somaUsuario = 0
   let somaComputador = 0
   let usertxtCards = ''
   let comptxtCards = ''

   let i = 1
   while(jogar){
      usuarioCards.push(comprarCarta())
      computadorCards.push(comprarCarta())

      somaUsuario += usuarioCards[i-1].valor
      somaComputador += computadorCards[i-1].valor

      //feito 2 loops verifica os dados
      if(i >= 2){
         //zera os dados caso tenha saido 2 cards 'Ás'
         if ( (usuarioCards[0].valor === 11) && (usuarioCards[1].valor === 11) || (computadorCards[0].valor === 11) && (computadorCards[1].valor === 11) ) {
            i = 0
            usuarioCards = []
            computadorCards = []
            somaUsuario = 0
            somaComputador = 0
         }

         usertxtCards = ''
         comptxtCards = ''

         for( let item of usuarioCards){
            usertxtCards += item.texto + " "
         }
         for( let item of computadorCards){
            comptxtCards += item.texto + " "
         }

         if(somaUsuario < 21 || somaComputador < 21){

            let resp = confirm(` Suas cartas são ${usertxtCards}. A carta revelada do computador é ${computadorCards[0].texto}. Deseja comprar mais uma carta? `)
            if(!resp){
               jogar = false
            }

         } else{
            jogar = false
         }

      } 

      i++
   }

   alert(`Suas cartas são ${usertxtCards} . Sua pontuação é ${somaUsuario}.` )
   alert(`As cartas do computador são ${comptxtCards}. A pontuação do computador é ${somaComputador}.`)
   let ganhador = ''

   if( somaUsuario > somaComputador && somaUsuario < 22 ){
         ganhador = " *** O usuário ganhou ***"
         alert(ganhador)
   } else if( somaComputador > somaUsuario && somaComputador < 22){
         ganhador = " *** O computador ganhou ***"
         alert(ganhador)
   } else if(somaUsuario === somaComputador){
      ganhador = " *** Deu empate! haha! ***"
      alert(ganhador)
   } else {
      ganhador = " *** Os dois Perderam! haha! ***"
      alert(ganhador)
   }

   //Resultado no console
   console.log(`Suas cartas são ${usertxtCards} . Sua pontuação é ${somaUsuario}.` )
   console.log(`As cartas do computador são ${comptxtCards}. A pontuação do computador é ${somaComputador}.`)
   console.log(ganhador)

} else {
   console.log("O jogo acabou!")
}

