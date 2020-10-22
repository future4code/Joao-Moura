type Amostra = {
    maior: number,
    menor: number,
    media: number
}

type Estatisticas = {
    numeros: Array<number>,
    obterEstatisticas: (array: Array<number>)=>Amostra
}


function obterEstatisticas(numeros:Array<number>): Amostra {
    const numerosOrdenados: Array<number> = numeros.sort(
        (a, b) => a - b
    )

    let soma: number = 0
    let num: number

    for (num of numeros) {
        soma += num
    }

    const estatisticas: {maior: number, menor: number, media: number} = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

console.log(obterEstatisticas([8,4,5,3]));

// =========== LETRA a)
// essa função recebe um array de números e retorna um objeto 

// =========== LETRA b)
// "numerosOrdenados" -> é um array de numeros ordenados
// "soma" -> é um number, usada para armazena a soma de todos os itens do array
// "num" -> é um number, usado para interar no array de numeros
// "estatisticas" -> é um Object, contem informações dobre o array

// =========== LETRA c)

const amostraDeIdades: Estatisticas = {
    numeros: [21, 18, 65, 44, 15, 18],
    obterEstatisticas
}