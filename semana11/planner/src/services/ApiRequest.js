import React from 'react'
import axios from 'axios'
import {BASE_URL} from './../constants/BASE_URL'

export const getTasks = (setTasks) => {
    axios.get(`${BASE_URL}`)
    .then((response)=>{
        console.log("get dados: ",response.data)
        setTasks(response.data)
    })
}

export const createTasks = (body) => {
    axios.post(`${BASE_URL}`, body)
    .then((response)=>{
        console.log('criada tarefa')
        console.log(response.data)
    })
}