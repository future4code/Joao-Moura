type pokemon = {
	name: string,
    types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}

// ==== letra a)
// na pasta do arquivo é só executar
// $ tsc exercicio-4.ts

// ==== letra b)
// Caso o arquivo esteja em outra pasta
// e so executar o passando o caminho
// $ tsc ./src/exercicio-4.ts

// ==== letra c)
// Caso de multiplos arquivos 
// executar-se apenas o tsc ou passar o nome/ou caminho
// separado pro espaço
// $ tsc 
// $ tsc ./src/exe.ts exe2.ts exe3.ts

// ==== letra d)
// não entendi muito bem as seguintes configuraçôes:
    // "sourceMap": true,  
    // "noImplicitAny": true
// outras configuraçôes que mudaram eu consegui entender como:
// "target": "es6",   // usar o ecmascript versão 6
// "outDir": "./build", // colocar os arquivos transpilados .js nessa pasta
// "rootDir": "./src", // pegas os arquivos .ts e apartir dessa pasta transpila-los 