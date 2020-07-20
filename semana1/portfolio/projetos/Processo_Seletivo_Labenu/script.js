

function msg(){
    var elementoEmail = document.querySelector('.footer-form-email');
    var email = elementoEmail.value;
    var boasVindas = document.querySelector('#msg');

    //dividi o email em duas partes(usuario@dominio)
    var usuario = email.slice(0, email.indexOf('@')+1);
    var dominio = email.slice(email.indexOf('@')+1, email.length);

    //RegExp para verificar o padrao do email
    var regExpUser = /^[\w_\.\-]+@/;
    var regExpDominio = /^[\w_\.\-]+\.[\w_\.\-]+[^\._\d\-]$/;

    //verificando os padroes
    var validarEmail = regExpUser.test(usuario);
    var validarDominio = regExpDominio.test(dominio);
    
    
    if(validarEmail == true && validarDominio == true){
      alert('E-mail enviado com sucesso! Muito obrigado '+email+', entraremos em contato!');
      boasVindas.innerHTML = ('Damos boas vindas a: '+email);
      elementoEmail.value= '';
      
    } else {
      alert("E-mail inválido!");
    }
  }
