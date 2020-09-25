
import axios from 'axios'
import {BASE_URL} from './../constants/BASE_URL'

export const getTasks = (setTasks) => {
    axios.get(`${BASE_URL}`)
    .then((response)=>{
        setTasks(response.data)
    })
}

export const createTasks = async (body) => {
    await axios.post(`${BASE_URL}`, body)
}

export const deleteTasks = async (id) => {
   await axios.delete(`${BASE_URL}/${id}`)
}

