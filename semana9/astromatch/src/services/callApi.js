import axios from 'axios'
import {BASE_URL} from '../constants/configAPI'

export const getProfileToChoose = (setProfile) => {
    axios.get(`${BASE_URL}/person`)
    .then((response)=>{
        if(Object.entries(response.data.profile).length > 0){
            setProfile(response.data.profile)
        }
    })
    .catch((error)=>{})
}

export const getMatches = (setListMatch) => {
    axios.get(`${BASE_URL}/matches`)
    .then((response)=>{
        setListMatch(response.data.matches) 
    })
    .catch((error)=>{ })
}

export const choosePerson = (id) => {
    const body = { "id": `${id}`, "choice": true }

    axios.post(`${BASE_URL}/choose-person`, body)
    .then((response)=>{ })
    .catch((error)=>{ })
}

export const clear = () => {
    axios.put(`${BASE_URL}/clear`)
    .then((response)=>{ })
    .catch((error)=>{ })
}