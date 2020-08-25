import React from 'react'
import styled from 'styled-components'

export default class Usuarios extends React.Component {
    render(){
        return(
            <ContainerUsuarios>
               <h1>Lista de Usuários</h1>
               <Lista >
                   <li>fulano</li>
                   <li>cilgaa</li>
                   <li>tobi</li>
                   {this.props.Usuarios}
               </Lista>
               <button onClick={this.props.onClickVerUsuarios}>Voltar</button>
           </ContainerUsuarios>
        )
    }
}

const ContainerUsuarios = styled.div `
background-color: #198;
width: 400px;
height: 500px;
display: flex;
flex-direction: column;
/* justify-content: center; */
align-items: center;
`

const Lista = styled.ol`
/* background-color: #bbb; */
width: 80%;
`