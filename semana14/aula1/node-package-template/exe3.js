// =============== Exercício 03 =======================
// RESPOSTAS:
const fs = require('fs');
const chalk = require('chalk');

const [node, file, newTask] = process.argv

const addNewTask =  (task) =>{

    fs.appendFile('./data.txt',` ${task},`, (err) => {
        if (err) throw err;
        console.log(chalk.green('Tarefa adicionada'))
    });

    fs.readFile('./data.txt', (err, data) => {
        if (err) throw err;
        console.log(chalk.yellow(`Lista de tarefas: ${data}`));
    });
}

console.log(addNewTask(newTask))
