import axios from 'axios'
import {BASE_URL} from '../constants/configAPI'
// {
//     "id": "71gMbZs2txS9LDvGK5Ew",
//     "age": 26,
//     "name": "Anitta",
//     "photo": "https://images.outgo.com.br/clients/1/events/2923/Anitta-Perfil-4-1.png",
//     "bio": "Amo cachorros e sair para dançar. Procuro alguém animado e sem neuras."
// }


//Retorna um perfil que ainda não foi visto por você.

export const getProfileToChoose = (setProfile) => {
    axios.get(`${BASE_URL}/person`)
    .then((response)=>{
        setProfile(response.data.profile)
    })
    .catch((error)=>{
        console.log('erro ao buscar novo perfil')
    })
}


//Retorna um array de perfis que deram match com você.

export const getMatches = () => {
    axios.get(`${BASE_URL}/matches`)
    .then((response)=>{
        console.log(response.data.matches) 
    })
    .catch((error)=>{
        console.log('erro ao buscar array de matches')
    })
}


//Recebe um id e uma escolha (choice). 
//A escolha é a opção do usuário no momento do swipe. Deve ser true ou false.

export const choosePerson = (idParm) => {
    const body = {
        "id": idParm,
	    "choice": true
    }

    axios.post(`${BASE_URL}/choose-person`, body)
    .then((response)=>{
        console.log('usuario escolhido') 
    })
    .catch((error)=>{
        console.log('erro ao buscar array de matches')
    })
}


//Limpa todos os matches e perfis vistos.
export const clear = () => {
    axios.put(`${BASE_URL}/clear`)
    .then((response)=>{
        console.log('usuario escolhido') 
    })
    .catch((error)=>{
        console.log('erro ao buscar array de matches')
    })
}