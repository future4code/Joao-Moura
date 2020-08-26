import React from 'react'
import styled from 'styled-components'
import Login from './components/Login/Login'
import Usuarios from './components/Usuarios/Usuarios'

export default class App extends React.Component {
  state = {
    telaLogin: true
  }


  trocarTela = () =>{
    this.setState({telaLogin: !this.state.telaLogin})
  }

    render(){
      let tela = <Login onClickVerUsuarios={this.trocarTela}/>

      if(!this.state.telaLogin){
         tela = <Usuarios onClickVerUsuarios={this.trocarTela}/>
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