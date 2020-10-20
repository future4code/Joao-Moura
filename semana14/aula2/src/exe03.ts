type Post = {
    autor: string,
    texto: string,
}

const posts: Array<Post> = [
    {
      autor: "Alvo Dumbledore",
      texto: "Não vale a pena viver sonhando e se esquecer de viver"
    },
    {
      autor: "Severo Snape",
      texto: "Menos 10 pontos para Grifinória!"
    },
    {
      autor: "Hermione Granger",
      texto: "É levi-ô-sa, não levio-sá!"
    },
    {
      autor: "Dobby",
      texto: "Dobby é um elfo livre!"
    },
    {
      autor: "Lord Voldemort",
      texto: "Avada Kedavra!"
    }
  ]

function buscarPostsPorAutor(posts: Array<Post>, autorInformado: string): Array<Post> {
    return posts.filter(
        (post) => {
            return post.autor === autorInformado
        }
    )
}

// essa função recebe um array de posts e o nome do autor
// e retorna um um array de objetos com os autores
console.log(buscarPostsPorAutor(posts, "Dobby"));