
function adicionaTarefa(tarefa, dia, horario){
    if(tarefa !== ""){
        let divAdicionar = document.getElementById(`${dia}`)
        divAdicionar.innerHTML += `<p onclick='deletar(this)'> ${tarefa}  ás ${horario}</p`
    } else {
        alert("Campo de tarefa vazio!")
    }
}


function pegarDados(){
    
    const textoInput = document.getElementById("tarefa")
    const diaSemana = document.getElementById("dias-semana")
    const horario = document.getElementById("horario")

    adicionaTarefa(textoInput.value, diaSemana.value, horario.value)

    textoInput.value = ""
    diaSemana.value = "domingo"
    horario.value = ""
}


function deletar(tag){
    tag.style = "text-decoration: line-through;"
}


function resetar(){
    let divDiaSemana = document.querySelectorAll(".semana div")
    for(let tag of divDiaSemana){
        tag.innerHTML = ''
    }
}