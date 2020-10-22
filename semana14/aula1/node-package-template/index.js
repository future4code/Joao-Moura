

// =============== Exercício 01 =======================
// RESPOSTAS:
// a) podemos guarda em uma variável da seguinte forma:
//   const parm = process.argv[2]

// b)
    // const [node, file, name, age] = process.argv
    // console.log(`Olá, ${name}! Você tem ${age} anos.`);

// c)
    // const [node, file, name, age] = process.argv
    // console.log(`Olá, ${name}! Você tem ${age} anos. Em sete anos você terá ${Number(age)+7}`);

// =============== Exercício 02 =======================
// RESPOSTAS:
// const [node, file, op, num1, num2] = process.argv
// const calc = (op, num1, num2) => {
//     switch (op) {
//         case "add":
//             return Number(num1)+Number(num2)
//         case "sub":
//             return Number(num1)-Number(num2)
//         case "div":
//             return Number(num1)/Number(num2)
//         case "mult":
//             return Number(num1)*Number(num2)
//         default:
//             break;
//     }
// }

// console.log(calc(op, num1, num2));

// =============== Exercício 03 =======================
// RESPOSTAS:
// const [node, file, newTask] = process.argv
// const taskList = ["Lavar roupas", "Jogar bola"]
// const addNewTask = (task) =>{
//     taskList.push(task)
//     console.log('Tarefa adicionada')
//     return `Sua lista: ${taskList}`
// }

// console.log(addNewTask(newTask))

// =============== Exercício 04 =======================
// RESPOSTAS: