// =============== Exercício 02 =======================
// RESPOSTAS:
const chalk = require('chalk');
const [node, file, op, num1, num2] = process.argv
const calc = (op, num1, num2) => {

    if(op && num1 && num2 ){
        switch (op) {
            case "add":
                return Number(num1)+Number(num2)
            case "sub":
                return Number(num1)-Number(num2)
            case "div":
                return Number(num1)/Number(num2)
            case "mult":
                return Number(num1)*Number(num2)
            default:
                break;
        }
    }else{
        console.log("Esperado três parâmetros > [operação] [num1] [num2]");
    }
}

console.log(calc(op, num1, num2));