import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import IconEmail from '../img/email.png'
import IconUser from '../img/user.png'
import {apiUrl, headers} from '../ApiConfig/ApiConfig'

export default class Login extends React.Component {
    
    state = {
        valueName: '',
        valueEmail: '',
    }
    
    naoRecarregar = (event) =>{
        event.preventDefault()
    }
     
    
//===== Monitorando campos de input =========
    InputNome = (event) =>{
        this.setState({valueName: event.target.value})
    }
    
    InputEmail = (event) =>{
        this.setState({valueEmail: event.target.value})
    }
    
    
    
//======== Criando um novo usuario =======
    CriarUsuario = async () =>{
        const body = {
            name: this.state.valueName,
            email: this.state.valueEmail
            
        }
        
        try {
            await axios.post(apiUrl, body, headers)
            alert('Usuário criado com sucesso!')
            this.setState({valueName: '', valueEmail: ''})   
        } catch (error) {
            alert('Erro ao criar usuário') 
        }
        
    }
    
    
    render(){
        return(
            <ContainerLogin>
                <h1>Cadastro de usuário</h1>
                <Formulario onSubmit={this.naoRecarregar}>
                    <Nome>
                        <img src={IconUser} alt="icone usuario"/>
                        <input 
                        placeholder={'Nome'}
                        onChange={this.InputNome}
                        />
                    </Nome>
                    <Email>
                        <img src={IconEmail} alt="icone email"/>
                        <input 
                        placeholder={'E-mail'}
                        onChange={this.InputEmail}
                        />
                    </Email>
                    <Botao onClick={this.CriarUsuario}>Criar</Botao>
                    <Botao onClick={()=>this.props.telaUsuarios('usuarios')}>Ver lista</Botao>
                </Formulario>
            </ContainerLogin>
        )
    }
}
    
const ContainerLogin = styled.div `
font-family:'Lucida Sans', 'Lucida Sans Regular';
color: #fff;
line-height:40px;
font-size: 18px;
background-color: #198;
width: 90%;
max-width:500px;
padding: 10px;
border-radius: 10px;
box-shadow: -6px 6px 13px #212121;
height:70vh;
display: flex;
flex-direction: column;
align-items: center;
`

const Formulario = styled.form`
width: 100%;
height: 45%;
box-sizing:border-box;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
`

const Nome = styled.div`
display: flex;
align-items: center;
justify-content: space-evenly;
width: 90%;
height: 50px;
    img {
        width: 30px;  
    }

    input{
    width: 80%;
    height: 75%;
    border-radius: 10px;
    border: none;
    font-size: 20px;
    }
`

const Email = styled.div`
display: flex;
align-items: center;
justify-content: space-evenly;
width: 90%;
height: 50px;
    img {
        width: 30px;  
    }
    
    input{
    width: 80%;
    height: 75%;
    border-radius: 10px;
    border: none;
    font-size: 20px;
    }
`

const Botao = styled.button`
width: 72%;
height: 40px;
margin-left:30px;
border: none;
font-size: 20px;
color: #333;
background-color: #eee;
:hover{
    color: #333;
    width: 73%;
    height: 40px;
    background-color: #ddd;
}
`