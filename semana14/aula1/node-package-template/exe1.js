
// =============== Exercício 01 =======================
// RESPOSTAS:
// a) podemos guarda em uma variável da seguinte forma:
//   const parm = process.argv[2]
const chalk = require('chalk');

const [node, file, name, age] = process.argv
if(name && age){
    console.log(chalk.green(`Olá, ${name}! Você tem ${age} anos. Em sete anos você terá ${Number(age)+7}`));
}else{
    console.log(chalk.red("Esperado dois parâmetros > [nome] [idade]"));
}
