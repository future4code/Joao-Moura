import React from 'react'
import axios from 'axios'
import IconDelete from '../img/delete.png'
import styled from 'styled-components'
import {apiUrl, headers} from '../ApiConfig/ApiConfig'

export default class Detalhes extends React.Component {
  
  state = {
    detalhes: '',
    editar: false,
    valueName:'',
    valueEmail:''
  }
  
  
  componentDidMount () {
    this.buscarDetalhes()
  }
  
  
  //========== Buscar detalhes  do usuarios =============
  buscarDetalhes = async () => {
    
    try {
      const resposta = await axios.get(`${apiUrl}/${this.props.idUser}`, headers)
      this.setState({detalhes: resposta.data})
    } catch (error) {
      alert('Erro ao buscar detalhes')
    }
    
  }
  
  
  //=========== Deletar usuario =======================
  deleteUser = async (nome, id) => {
    let resp = window.confirm(`Deseja deletar ${nome} ?`)

    if(resp){
      
      try {
        await axios.delete(`${apiUrl}/${id}`, headers)
        alert('Usuário deletado com sucesso!')
        this.buscarDetalhes()
        
      } catch (error) {
        alert('Erro ao buscar detalhes')
      }
    }
    
  }



  
//===== Monitorando campos de input =========
  InputNome = (event) =>{
    this.setState({valueName: event.target.value})
  }

  InputEmail = (event) =>{
    this.setState({valueEmail: event.target.value})
  }


//========= Abri os campos de edição ============
abrirCampos = () =>{
    this.setState({editar: !this.state.editar})
}



//=========== Editar um usuario =======================
  salvar = async () => {
    const body = {
        name: this.state.valueName,
        email: this.state.valueEmail
    }
    
    try {
        const response = await axios.put(`${apiUrl}/${this.state.detalhes.id}`, body, headers)
        alert("Usuário alterado com sucesso!")
        this.abrirCampos()
        this.buscarDetalhes()
    } catch (error) {
        alert('Não foi possivel salva')
    }
  }
  
  
  render(){
      const campoEdicao = () =>{
          return(
            <Editar>
                <input placeholder={'Nome'} onChange={this.InputNome}/>
                <input placeholder={'E-mail'} onChange={this.InputEmail}/>
                <button onClick={this.salvar}>Salvar</button>
            </Editar>
          )
      }
                        


    return(
      <ContainerUsuarios>
        <h1>Detalhes do Usuário</h1>
        <Info>
            <p>Nome: {this.state.detalhes.name}</p>
            <p>Email: {this.state.detalhes.email}</p>
        </Info>
        {this.state.editar && campoEdicao()}
        <div>
            <Botao onClick={this.abrirCampos}>Editar</Botao>
            <Botao onClick={()=>this.deleteUser(this.state.detalhes.name, this.state.detalhes.id)}>Excluir</Botao>
            <Botao onClick={()=>this.props.telaLogin('usuarios')}>Voltar</Botao>
        </div>
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
  div{
    width: 80%;
  }
`

const Info = styled.div`
  background-color: #efefef;
  width: 80%;
  color: #333;
  font-size: 23px;
`

const Botao = styled.button`
margin-top:5px;
width: 100%;
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

const Editar = styled.div`
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: space-between;
width: 90%;
height: 100px;
  input{
  width: 48%;
  height: 40%;
  border: none;
  font-size: 20px;
  }
  
  button {
  width: 100%;
  height: 40px;
  margin-top:5px;
  border: none;
  font-size: 20px;
  color: #333;
  background-color: #eee;
  :hover{
      color: #333;
      background-color: #ddd;
  }
}
`