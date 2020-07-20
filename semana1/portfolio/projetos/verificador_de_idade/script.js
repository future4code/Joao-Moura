function verificar() {
    var dateAtual = new Date(); 
    var anoAtual = dateAtual.getFullYear(); 
    var anoNasc = document.getElementById('txt_ano'); 
    var resp = document.querySelector('#resp');

    
    if (Number(anoNasc.value) > anoAtual || anoNasc.value.length == 0) {
        alert('ERRO!  insira os dados corretamente');
    } else {
        var opSexo = document.getElementsByName('rad_sex');
        var idade = anoAtual - Number(anoNasc.value);
        var genero = '';
        var img = document.createElement('img'); 
        img.setAttribute('id', 'foto'); 

        
        if (opSexo[0].checked) {

            if (idade >= 0 && idade < 11) {
                //CRIANCA
                genero = 'uma criança';
                img.setAttribute('src', 'img/Crianca_Mas.png');
            } else if (idade < 25) {
                //JOVEM
                genero = 'um jovem';
                img.setAttribute('src', 'img/Jovem_Mas.png');
            } else if (idade < 50) {
                //ADULTO
                genero = 'um homen';
                img.setAttribute('src', 'img/Adulto_Mas.png');
            } else {
                //IDOSO
                genero = 'um senhor';
                img.setAttribute('src', 'img/Idoso_Mas.png');
            }

        } else if (opSexo[1].checked) {

            if (idade >= 0 && idade < 11) {
                //CRIANCA
                genero = 'uma criança';
                img.setAttribute('src', 'img/Crianca_Fem.png');
            } else if (idade < 25) {
                //JOVEM
                genero = 'uma jovem';
                img.setAttribute('src', 'img/Jovem_Fem.png');
            } else if (idade < 50) {
                //ADULTO
                genero = 'uma mulher';
                img.setAttribute('src', 'img/Adulto_Fem.png');
            } else {
                //IDOSO
                genero = 'uma senhora';
                img.setAttribute('src', 'img/Idoso_Fem.png');
            }

        }


        resp.style.textAlign = 'center';
        resp.innerHTML = `Foi detectado ${genero} de ${idade} anos.`;
        resp.appendChild(img);
    }
}