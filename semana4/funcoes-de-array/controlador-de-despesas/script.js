let arrayDespesas = [] // ARRAY PRINCIPAL


//EXIBI A LISTAGEM DE DESPESAS
function exibirDados(arrayDespesas){
    const lista = document.getElementById('lista')
    lista.innerHTML=''

    for(let item of arrayDespesas){
        lista.innerHTML += `
            <li>
                <h3>${item.tipo}</h4>
                <p>${item.descricao}</p>
                <p>R$${item.valor}</p>
            </li>`

    }
}

//LIMPA OS CAMPOS DO FORMULARIO DE CADASTRO E DE FILTRAGEM
function limparCampos(id){
    if(id === "bnt-cadastrar"){
        document.getElementById('valor').value =''
        document.getElementById('descricao').value =''
    } else if(id === "bnt-limpar-filtros") {
        document.getElementById('valor-min').value =''
        document.getElementById('valor-max').value =''
    }
    
}

//EXIBI O VALOR TOTAL DOS GASTOS
function exibirExtrato(arrayDespesas){
    let total = 0
    for(let item of arrayDespesas){
        total += item.valor
    }
    const extrato = document.getElementById('total')
    extrato.innerHTML = `<h1>R$ ${total}</h1>`
}

//BUSCA OS DADOS DO FORMULARIO DE CADASTRO E ADICIONA OS OBJETOS AO ARRAY
function dadosCadastro(evento){ 
    evento.preventDefault()
   

    const valor = document.getElementById('valor').value
    const tipoDespesa = document.getElementById('despesa').value
    const descricao = document.getElementById('descricao').value

    if(valor !== '' && tipoDespesa !== '' && descricao !==''){
        const despesa = {
            valor: Number(valor),
            tipo: tipoDespesa,
            descricao: descricao
        }
        arrayDespesas.push(despesa)
        
        limparCampos(evento.target.id)
        exibirDados(arrayDespesas)
        exibirExtrato(arrayDespesas)

    } else {
        alert('Campos vazios')
    }
   
}

//ENVIA OS CAMPOS DO FORMULARIO FILTRO PARA SEREM LIMPOS #linha 20
function limparFiltros(evento){
    evento.preventDefault()
    limparCampos(evento.target.id)

}

//BUSCA OS DADOS DO FORMULARIO FILTRO E REALIZA A FILTRAGEM
function dadosFiltro(evento){
    evento.preventDefault()

    const tipoDespesa = document.getElementById('filtro-despesa').value
    const valorMin = Number(document.getElementById('valor-min').value) 
    const valorMax = Number(document.getElementById('valor-max').value) 


    if( valorMin !== '' && valorMax !=='' ){

        if(arrayDespesas.length !== 0){
            const arrayFiltrado = arrayDespesas.filter((item)=>{
                if(item.valor >= valorMin && item.valor <= valorMax && item.tipo === tipoDespesa){
                    return true
                }
            })
            
            limparCampos(evento.target.id)
            exibirDados(arrayFiltrado)

        } else {
            alert('Nenhuma despesa encontrada!')
        }

    } else {
        alert('Campos vazios')
    }
}

