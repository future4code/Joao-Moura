import React from 'react'
import axios from 'axios'
import IconDelete from '../img/delete.png'
import styled from 'styled-components'

export default class Usuarios extends React.Component {

  state = {
    listaUsuarios:[ ]
  }
  
  
  componentDidMount () {
   this.buscarLista()
  }

  
//========== Buscar todos os usuarios =============
 buscarLista = () => {
  axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', {
    headers: {
      Authorization: 'joao-paulo-moura-jackson'
    }
  }).then((resposta)=>{
    this.setState({listaUsuarios: resposta.data})
  }).catch((erro)=>{
    alert('ocorreu um erro:',erro)
  })
 }


//=========== Deleta um usuario =======================
deleteUser = (id) => {
  axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`, {
    headers: {
      Authorization: 'joao-paulo-moura-jackson'
    }
  }).then((resposta)=>{
    alert('Usuario deletado')
    this.buscarLista()
  }).catch((erro)=>{
    alert('ocorreu um erro:',erro)
  })
}


render(){
  return(
    <ContainerUsuarios>
      <h1>Lista de Usuários</h1>
      <Lista >


        {this.state.listaUsuarios.map((user, indice) => {
          return (
            <ItemLista key={indice}>
              <li>{user.name}</li><img src={IconDelete} onClick={()=>this.deleteUser(user.id)}/>
            </ItemLista>
            ) 
        })}


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
const ItemLista = styled.li`
  display: flex;
  justify-content: space-around;
  width: 50%;
  img {
    width: 20px;
    cursor: pointer;
  }
`