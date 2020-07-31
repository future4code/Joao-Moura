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
console.log("---------------------------------------------")
console.log(" >>>>> Bem vindo ao jogo de Blackjack! <<<<<")
console.log("---------------------------------------------")

let jogar = confirm("Quer iniciar uma nova rodada?")

if(jogar){
   let usuarioCards = []
   let computadorCards = []
   let somaUsuario = 0
   let somaComputador = 0

   for(let i = 0; i < 2; i++){
      usuarioCards.push(comprarCarta())
      computadorCards.push(comprarCarta())

      somaUsuario += usuarioCards[i].valor
      somaComputador += computadorCards[i].valor
   }

   console.log(`  Usuário - cartas:  ${usuarioCards[0].texto} ${usuarioCards[1].texto} - pontuação ${somaUsuario} `)
   console.log(`  Computador - cartas: ${computadorCards[0].texto} ${computadorCards[1].texto} - pontuação ${somaComputador}`)
   
   console.log("---------------------------------------------")
   if( somaUsuario > somaComputador){
      console.log(" *** O usuário ganhou ***")
   } else if( somaComputador > somaUsuario){
      console.log(" *** O computador ganhou ***")
   } else {
      console.log(" *** Deu empate haha! ***")
   }

}else{
   console.log("O jogo acabou!")
}
