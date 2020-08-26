import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import Login from './components/Login/Login'
import Usuarios from './components/Usuarios/Usuarios'

export default class App extends React.Component {
  state = {
    usuarios: [
      {
        id: 1,
        name: 'jose',
        email: 'jose@gmail.com'
      },
      {
        id: 2,
        name: 'bruna',
        email: 'bruna@gmail.com'
      }
    ],
    valueName: '',
    valueEmail: '',
    telaLogin: true
  }

//======== Limpa os campos de input ============
  limpaCampos = () =>{
    this.setState({valueName: ''})
    this.setState({valueEmail: ''})
  }



//===== Monitorando campos de input =========
  InputNome = (event) =>{
    this.setState({valueName: event.target.value})
  }

  InputEmail = (event) =>{
    this.setState({valueEmail: event.target.value})
  }



//======== Criando um novo usuario =======
  CriarUsuario = () =>{
      const newUser = {
        name: this.state.valueName,
        email: this.state.valueEmail
        
      }
      this.EnviarDadosApi(newUser)
      this.limpaCampos()
  }



//====== Criando novo usuario na API ======
  EnviarDadosApi = (body) => {
     axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', body,{
      headers: {
        Authorization: 'joao-paulo-moura-jackson'
      }
    }).then((resposta)=>{
      alert("Criado com sucesso!", resposta)
    }).catch((erro)=>{
      alert('ocorreu um erro:',erro)
      console.log(erro)
    })
  }




//===============
  trocarTela = () =>{
    this.setState({telaLogin: !this.state.telaLogin})
  }

    render(){
      let tela = <Login
                      onChangeNome={this.InputNome}
                      onChangeEmail={this.InputEmail}
                      onClickCriar={this.CriarUsuario}
                      onClickVerUsuarios={this.trocarTela}
                      />
     if(!this.state.telaLogin){
         tela = <Usuarios onClickVerUsuarios={this.trocarTela}>

                </Usuarios>
    }
     
        return(
          <ContainerApp>
           {tela}
          </ContainerApp>
        )
    }
}

const ContainerApp = styled.div`
  background-color: #9ff;
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;

`