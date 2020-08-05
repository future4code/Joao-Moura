
const arrayDePosts = []
const containerPosts = document.getElementById("container-de-posts")

function armazenaDados(){

    //selecionando DOM
    const inputTitulo = document.getElementById("titulo-post")
    const inputAutor = document.getElementById("autor-post")
    const inputImagem = document.getElementById("imagem-post")
    const inputConteudo = document.getElementById("conteudo-post")
    
    //verificar campos vazios
    if(inputTitulo.value === '' || inputAutor.value === '' ||inputConteudo.value ==='' ){
        alert("os campos estao vazios")
    } else {
        //cria objeto
        const post = {
            titulo: inputTitulo.value,
            autor: inputAutor.value,
            imagem: inputImagem.value,
            conteudo: inputConteudo.value
        }
        
        //adiciona no array
        arrayDePosts.push(post)
        
        //imprimee no console
        console.log(post)
        console.log(arrayDePosts)
    
        //limpa os campos
        inputTitulo.value = ''
        inputAutor.value = ''
        inputImagem.value = ''
        inputConteudo.value =''
        
        
        return post

    }
    
}


function criarPost(){
    let postagem = armazenaDados()

    if(postagem.imagem !== ''){
        containerPosts.innerHTML += `
            <div class="postagem">
            <h1>${postagem.titulo}</h1>
            <h3>${postagem.autor}</h3>
            <img src='${postagem.imagem}' alt='imagem'>
            <p>${postagem.conteudo}</p>
            </div>`  
    }else{
        containerPosts.innerHTML += `
        <div class="postagem">
        <h1>${postagem.titulo}</h1>
        <h3>${postagem.autor}</h3>
        <p>${postagem.conteudo}</p>
        </div>`  
    }
}
