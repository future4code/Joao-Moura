import React from 'react'
import styled from 'styled-components'
import Login from './components/Login/Login'
import Usuarios from './components/Usuarios/Usuarios'
import Detalhes from './components/Usuarios/Detalhes'

export default class App extends React.Component {
  state = {
    telaAtual: 'login',
    idDetalhes: ''
  }


  trocarTela = (tela, idUser) =>{
    this.setState({telaAtual: tela, idDetalhes: idUser})
  }

    render(){
      let tela

      switch(this.state.telaAtual){
        case 'login':
          tela = <Login telaUsuarios={this.trocarTela}/>
          break
        case 'usuarios':
          tela =  <Usuarios telaLogin={this.trocarTela} telaDetalhes={this.trocarTela}/>
          break
        case 'detalhes':
          tela =  <Detalhes telaLogin={this.trocarTela} idUser={this.state.idDetalhes}/>
          break
        default:
           break
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