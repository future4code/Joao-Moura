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
        <Busca>
          <input  placeholder={'Nome usuário'} onChange={this.InputBusca}/>
          <button onClick={this.buscarUsuario}>Buscar</button>
        </Busca>
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
        <Botao onClick={()=>this.props.telaLogin('login')}>Voltar</Botao>
      </ContainerUsuarios>
    )
    }
  }

const ContainerUsuarios = styled.div `
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

const Busca = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 90%;
height: 50px;
  input{
  width: 75%;
  height: 75%;
  border-radius: 10px;
  border: none;
  font-size: 20px;
  }

  button {
  width: 20%;
  height: 40px;
  border: none;
  font-size: 20px;
  color: #333;
  background-color: #eee;
  :hover{
      color: #333;
      width: 21%;
      height: 40px;
      background-color: #ddd;
  }
}
`

const Lista = styled.ol`
background-color: #efefef;
width: 80%;
max-height:50%;
overflow-y: scroll;
color: #333;
font-size: 23px;
`

const ItemLista = styled.li`
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin: 10px 0;
  color: #333;
  font-size: 23px;
  cursor: pointer;

  :hover{
    font-size: 24px;
    }

  img {
    width: 25px;
    height: 25px;
    cursor: pointer;
    :hover{
      width: 26px;
      height: 26px;
    }
  }
`

const Botao = styled.button`
width: 88%;
height: 40px;
border: none;
font-size: 20px;
color: #333;
background-color: #eee;
:hover{
    color: #333;
    height: 40px;
    background-color: #ddd;
}
`