
    let inputInicio = document.querySelector('#inicio');
    let inputFim = document.querySelector('#fim');
    let inputPasso = document.querySelector('#passo');
    let resultado = document.querySelector('#resultado');
    let status = document.querySelector('#status');
    
function contar(){
    resultado.innerHTML='';
    
    if( ( inputInicio.value.length === 0 )||( inputFim.value.length === 0 )
        || (inputInicio.value < inputFim.value)&&(inputPasso.value < 0) ) {
        
        alert(`Campos invalidos!`);

    }else{
        var inicio = Number(inputInicio.value);
        var fim = Number(inputFim.value);
        var passo = Number(inputPasso.value);
        status.innerHTML = `Contando...`;

        if(inicio < fim ){

            if(passo==""){passo = 1;} 
            for(var i = inicio; i <= fim; i +=passo ){
                resultado.innerHTML += `${i} &#128073;&#127997;  `;
            }
        }else if(inicio > fim){
            if(passo==""){
                passo = 1;
            }else if( passo <= 0 ){
                passo *= (-1) ; 
            } 
            for(var i = inicio; i >= fim; i-=(passo) ){
                resultado.innerHTML += `${i} &#128073;&#127997;   `;
            }
        }
        resultado.innerHTML +=`&#127988;`;
    }
}

function limpar(){
    inputInicio.value = '';
    inputFim.value = '';
    inputPasso.value = '';
    resultado.innerHTML = '';
    status.innerHTML = `Preparando contagem...`;
}

