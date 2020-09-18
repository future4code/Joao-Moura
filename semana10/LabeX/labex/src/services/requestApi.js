import axios from 'axios'
import {BASE_URL} from '../constants/BASE_URL'


export const getTrip = (setTipList) => {
    axios.get(`${BASE_URL}/trips`)
    .then((response)=>{
        setTipList(response.data.trips)
    })
    .catch((err)=>{
        console.log("erro buscar detalhes: ", err)
    })
}


export const getTripDetail = (id) => {
    const token = localStorage.getItem('token')
    axios.get(`${BASE_URL}/trip/${id}`,  {headers: {auth: token}})
    .then((response)=>{
        console.log("resposta: ", response)
    })
    .catch((err)=>{
        console.log("erro buscar detalhes: ", err)
    })
}

export const applyToTrip = (user) => {
   
    const body =  {
        "name": user.name,
        "age": user.age,
        "applicationText": user.applicationText,
        "profession": user.profession,
        "country": user.country
    }

    axios.post(`${BASE_URL}/trips/${user.tripID}/apply`,body)
    .then((response)=>{
        console.log("usuario cadastrado: ", response.data)
        alert('Sua solicitação foi enviada!')
    })
    .catch((err)=>{
        console.log("erro buscar detalhes: ", err)
    })
}