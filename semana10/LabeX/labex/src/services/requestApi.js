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