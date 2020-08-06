let arrayDespesas = []

function exibirDados(arrayDespesas){
    console.table(arrayDespesas)// remover
    const lista = document.getElementById('lista')
    lista.innerHTML=''

    for(let item of arrayDespesas){
        lista.innerHTML += `
            <li>
                <h3>${item.tipo}</h4>
                <p>${item.descricao}</p>
                <p>R$${item.valor},00</p>
            </li>`

    }
}

function limparCampos(id){
    if(id === "bnt-cadastrar"){
        document.getElementById('valor').value =''
        document.getElementById('descricao').value =''
    } else if(id === "bnt-limpar-filtros") {
        document.getElementById('valor-min').value =''
        document.getElementById('valor-max').value =''
    }
    
}

function dadosCadastro(evento){ 
    evento.preventDefault()
    console.log()

    const valor = document.getElementById('valor').value
    const tipoDespesa = document.getElementById('despesa').value
    const descricao = document.getElementById('descricao').value

    if(valor !== '' && tipoDespesa !== '' && descricao !==''){
        const despesa = {
            valor: valor,
            tipo: tipoDespesa,
            descricao: descricao
        }
        arrayDespesas.push(despesa)
        
        limparCampos(evento.target.id)
        exibirDados(arrayDespesas)

    } else {
        alert('Campos vazios')
    }
   
    
}


function limparFiltros(evento){
    evento.preventDefault()
    limparCampos(evento.target.id)

}

function dadosFiltro(evento){
    evento.preventDefault()

    document.getElementById('filtro-despesa').value
    document.getElementById('valor-min').value 
    document.getElementById('valor-max').value 



}

