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
                        <span>
                            <img src={IconUser} alt="icone usuario"/>
                        </span>
                        <input 
                        placeholder={'Nome'}
                        onChange={this.InputNome}
                        />
                    </Nome>
                    <Email>
                        <span>
                            <img src={IconEmail} alt="icone email"/>
                        </span>
                        <input 
                        placeholder={'E-mail'}
                        onChange={this.InputEmail}
                        />
                    </Email>
                    <div>
                        <button onClick={()=>this.props.telaUsuarios('usuarios')}>Ver lista</button>
                        <button onClick={this.CriarUsuario}>Criar</button>
                    </div>
                </Formulario>
            </ContainerLogin>
            )
        }
    }

const ContainerLogin = styled.div `
background-color: #198;
width: 400px;
height: 500px;
display: flex;
flex-direction: column;
/* justify-content: center; */
align-items: center;
`

const Formulario = styled.form`
/* background-color: #bbb; */
width: 80%;
`
const Nome = styled.div`
    display: flex;
    align-items: center;
    span img {
        width: 20px;
        
    }

`
const Email = styled.div`
    span img {
        width: 20px;
    }

`