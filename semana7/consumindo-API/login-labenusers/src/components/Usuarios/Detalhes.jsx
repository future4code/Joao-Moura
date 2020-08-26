import React from 'react'
import axios from 'axios'
import IconDelete from '../img/delete.png'
import styled from 'styled-components'
import {apiUrl, headers} from '../ApiConfig/ApiConfig'

export default class Detalhes extends React.Component {
  
  state = {
    detalhes: '',
    editar: true,
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
      console.log(resposta.data)
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
        await axios.get(`${apiUrl}/${this.props.idUser}`, body, headers)
        this.buscarDetalhes()
    } catch (error) {
        alert('Não foi possivel salva')
    }
  }
  
  
  render(){
      const campoEdicao = 
                        <div>
                            <input placeholder={'Nome'} onChange={this.InputNome}/>
                            <input placeholder={'E-mail'} onChange={this.InputEmail}/>
                            <button onClick={this.salvar}>Salvar</button>
                        </div>


    return(
      <ContainerUsuarios>
        <h1>Detalhes do Usuário</h1>
        <Lista>
            <li>Nome: {this.state.detalhes.name}</li>
            <li>Email: {this.state.detalhes.email}</li>
            <img src={IconDelete} onClick={()=>this.deleteUser(this.state.detalhes.name, this.state.detalhes.id)} alt={'icone excluir'}/>
        </Lista>
        {this.state.editar && campoEdicao}
        <div>
            <button onClick={()=>this.props.telaLogin('usuarios')}>Voltar</button>
            <button onClick={this.abrirCampos}>Editar</button>
        </div>
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
align-items: center;

div {
    display:flex;
}
`

const Lista = styled.ul`
  list-style-type: none;
  width: 80%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  width: 50%;
  img {
    width: 20px;
    cursor: pointer;
    grid-column: 2/3;
    grid-row: 1/1;
  }
`