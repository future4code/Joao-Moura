import React from 'react'
import axios from 'axios'
import IconDelete from '../img/delete.png'
import styled from 'styled-components'
import {apiUrl, headers} from '../ApiConfig/ApiConfig'

export default class Usuarios extends React.Component {
  
  state = {
    listaUsuarios:[ ],
    valueBusca: ''
  }
  
  
  componentDidMount () {
    this.buscarLista()
  }
  
     
//===== Monitorando campo de busca =========
  InputBusca = (event) =>{
    this.setState({valueBusca: event.target.value})
  }
  
//========== Buscar todos os usuarios =============
  buscarLista = async () => {
    
    try {
      const resposta = await axios.get(apiUrl, headers)
      this.setState({listaUsuarios: resposta.data})
      
    } catch (error) {
      alert('Erro ao buscar usuários')
    }
    
  }
  
  
//=========== Deleta um usuario =======================
  deleteUser = async (nome, id) => {
    let resp = window.confirm(`Deseja deletar ${nome} ?`)

    if(resp){
      
      try {
        await axios.delete(`${apiUrl}/${id}`, headers)
        alert('Usuário deletado com sucesso!')
        this.buscarLista()
        
      } catch (error) {
        alert('Erro ao deletar usuários')
      }
    }
    
  }

//========== Buscar um usuário =============
  buscarUsuario = async () => {
    try {
      const resposta = await axios.get(`${apiUrl}/search?name=${this.state.valueBusca}`, headers)
      this.setState({listaUsuarios: resposta.data})
      
    } catch (error) {
      alert('Erro ao buscar usuário')
    }
    
  }
  
  
  
  render(){
    const mensagem = () =>{
      return <p>Nenhum usuário encontrado...</p>
    }

    return(
      <ContainerUsuarios>
        <h1>Lista de Usuários</h1>
        <div>
          <input  placeholder={'Nome usuário'} onChange={this.InputBusca}/>
          <button onClick={this.buscarUsuario}>Buscar</button>
        </div>
        <Lista>
          {this.state.listaUsuarios.map((user, indice) => {
            return (
              <ItemLista key={indice}>
                <li onClick={()=>this.props.telaDetalhes('detalhes',user.id)}>{user.name}</li>
                <img src={IconDelete} onClick={()=>this.deleteUser(user.name, user.id)} alt={'icone excluir'}/>
              </ItemLista>
            ) 
          })}
          {this.state.listaUsuarios.length < 1 && mensagem()}
        </Lista>
        <button onClick={()=>this.props.telaLogin('login')}>Voltar</button>
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