import axios from 'axios'
import {BASE_URL} from "../constants/BASE_URL"
import { goToFeedPage } from '../routes/Coordinator'

export const postSignUp = (body, history) =>{
    axios.post(`${BASE_URL}/signup`, body)
    .then((response)=>{
        localStorage.setItem("token", response.data.token)
        goToFeedPage(history)
    })
}

export const postLogin = (body, history) =>{
    axios.post(`${BASE_URL}/login`, body)
    .then((response)=>{
        localStorage.setItem("token", response.data.token)
        goToFeedPage(history)
    })
    .catch((erro)=>{
        alert('Usuário ou senha invalido')
    })
}

export const createPost = (body) =>{
    const token = localStorage.getItem("token")

    axios.post(`${BASE_URL}/posts`, body, {headers: {Authorization: token}})
    .then((response)=>{
        console.log("post criado", response.data)
    })
}

export const getPost = (setPosts) =>{
    const token = localStorage.getItem("token")

    axios.get(`${BASE_URL}/posts`, {headers: {Authorization: token}})
    .then((response)=>{
        setPosts(response.data.posts)
    })
}


