import axios from 'axios'
import {BASE_URL} from '../constants/BASE_URL'


export const getTrip = (setTipList) => {
    axios.get(`${BASE_URL}/trips`)
    .then((response)=>{
        setTipList(response.data.trips)
    })
}

export const goLogin = (email, password, goToDashBord, history) => {
    const body = {
        "email": email,
        "password": password
    }

    axios.post(`${BASE_URL}/login`, body)
    .then((response)=>{
        localStorage.setItem("token", response.data.token)
        goToDashBord(history)
    })
}


export const getTripDetail = (setTrip, setCandidates, id ) => {
    const token = localStorage.getItem('token')
    axios.get(`${BASE_URL}/trip/${id}`,  {headers: {auth: token}})
    .then((response)=>{
        setTrip(response.data.trip)
        setCandidates(response.data.trip.candidates)
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
        alert('Sua solicitação foi enviada!')
    })
}



export const createTrip = (body) => {
    const token = localStorage.getItem('token')

    axios.post(`${BASE_URL}/trips`,body, {headers: {auth: token}} )
    .then((response)=>{
        alert('Sua Viagem foi cadastrada!')
    })
}


export const  decideCandidate = (approve, tripId, candidateId) => {
    const token = localStorage.getItem('token')
    const body = { "approve": approve}

    axios.put(`${BASE_URL}/trips/${tripId}/candidates/${candidateId}/decide`, body , {headers: {auth: token}} )
    .then((response)=>{
        approve ?
        alert("Candidato aprovado! aguarde"):
        alert("Candidato recusado! aguarde")
    })
}
