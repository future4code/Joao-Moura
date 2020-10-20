// ============ Letra a)

// o typescript não aceita atribuirmos
// uma valor a variável que não seja do 
// mesmo tipo que declaramos

// let minhaString: string = "Labenu"
// minhaString = 10 //erro

// ============ Letra b)
// usando union type
// let meuNumero: number | string = 51
// meuNumero = "Cinquenta e um"

// ============ Letra c)
// const pessoa: {nome: string, idade: number, corFavorita: string} = {
//     nome: "Julia",
//     idade: 28,
//     corFavorita: "Verde"
// }

    
// ============ Letra d) e E)
// enum COR_DO_ARCO_IRIS {
//     VERMELHO = "Vermelho",
//     LARANJA = "Laranja",
//     AMARELO = "Amarelo",
//     VERDE = "Verde",    
//     AZUL = "Azul",
//     ANIL = "Anil",
//     VIOLETA = "Violeta",
// }

// type Pessoa = {
//     nome: string,
//     idade: number,
//     corFavorita: COR_DO_ARCO_IRIS
// }
 
// const p1: Pessoa = {
//     nome: "Rafael",
//     idade: 12,
//     corFavorita: COR_DO_ARCO_IRIS.ANIL
// }

// const p2: Pessoa = {
//     nome: "Fernanda",
//     idade: 75,
//     corFavorita: COR_DO_ARCO_IRIS.AMARELO
// }

// const p3: Pessoa = {
//     nome: "Bruno",
//     idade: 18,
//     corFavorita: COR_DO_ARCO_IRIS.VERDE
// }
