import React, {useState, useEffect}from 'react'
import axios from 'axios'
import {BASE_URL} from '../../constants/BASE_URL'
import styled from 'styled-components'
import {useHistory} from  'react-router-dom'
import {goToDashBord, goToLogin} from '../../Router/goToPages'

const LoginPage = () => {
    const history = useHistory()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    useEffect(() => {
        const token = window.localStorage.getItem("token");

        if (token) {
            goToDashBord(history)
        } else {
            goToLogin(history)
        }

    }, [history]);



    const login = () => {
        const body = {
                "email": email,
                "password": password
        }

        axios.post(`${BASE_URL}/login`, body)
        .then((response)=>{
            localStorage.setItem("token", response.data.token)
            goToDashBord(history)
        })
        .catch((err)=>{
            alert('Dados Invalidos')
        })
    }


    const onChangeEmail = (event) => {
        setEmail(event.target.value)
    }
    const onChangePassword = (event) => {
        setPassword(event.target.value)
    }


    

    return (
        <LoginContainer>
            <h2>Login</h2>
            <Form>
                <Email>
                    <label>E-mail</label>
                    <InputEmail
                        value={email}
                        onChange={onChangeEmail}
                    />
                </Email>
                <Password>
                    <label>Senha</label>
                    <InputPassword
                        type={'password'}
                        value={password}
                        onChange={onChangePassword}
                    />
                </Password>
                
                <BtnLogin onClick={login}>Entra</BtnLogin>
                
            </Form>
        </LoginContainer>
    )
}

export default LoginPage

const LoginContainer = styled.div`
background-color: #EEE;
height: 100vh;
width: 100vw;
box-sizing: border-box;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
const Form = styled.div`
background-color: #FFF;
width: 35%;
min-width:300px;
height: 45%;
padding: 10px;
`

const Email = styled.div`
display: flex;
flex-direction: column;
font-size: 22px;
width: 100%;
height: 30%;
`
const Password = styled.div`
display: flex;
flex-direction: column;
width: 100%;
height: 30%;`

const InputEmail = styled.input`
width: 80%;
height: 30%;
background-color: #EEE;
border: none;
`
const InputPassword= styled.input`
width: 80%;
height: 30%;
background-color: #EEE;
border: none;
`

const BtnLogin = styled.button`
width: 25%;
height: 15%;
background-color:  #4083ff;
color: #fff;
font-size: 20px;
border: none;
cursor: pointer;
`

