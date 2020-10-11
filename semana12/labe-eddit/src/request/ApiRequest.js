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

export const putVote = (body, id, setPosts) =>{
    const token = localStorage.getItem("token")
    axios.put(`${BASE_URL}/posts/${id}/vote`, body, {headers: {Authorization: token}})
    .then((response)=>{
       getPost(setPosts) 
    })
}

export const putVoteComment = (body, postId, commentId,setPost, setComments) =>{
    const token = localStorage.getItem("token")
    axios.put(`${BASE_URL}/posts/${postId}/comment/${commentId}/vote`, body, {headers: {Authorization: token}})
    .then((response)=>{
       getPostDetail(postId,setPost,setComments)
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

export const createPost = (body,setPosts) =>{
    const token = localStorage.getItem("token")
    axios.post(`${BASE_URL}/posts`, body, {headers: {Authorization: token}})
    .then((response)=>{
        getPost(setPosts)
    })
}

export const getPost = (setPosts) =>{
    const token = localStorage.getItem("token")
    axios.get(`${BASE_URL}/posts`, {headers: {Authorization: token}})
    .then((response)=>{
        setPosts(response.data.posts)
    })
}


export const getPostDetail = (id, setPost, setComments) =>{
    const token = localStorage.getItem("token")
    axios.get(`${BASE_URL}/posts/${id}`, {headers: {Authorization: token}})
    .then((response)=>{
       setPost(response.data.post)
       setComments(response.data.post.comments)
    })
}


export const createComment = (body,id, setPost,setComments) =>{
    const token = localStorage.getItem("token")
    axios.post(`${BASE_URL}/posts/${id}/comment`, body, {headers: {Authorization: token}})
    .then((response)=>{
        getPostDetail(id,setPost,setComments)
    })
}