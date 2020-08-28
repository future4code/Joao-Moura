import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import {playlistas, apiUrl, headers} from '../../config/configApi'
import ListaDeMusicas from '../ListaDeMusicas/ListaDeMusicas'


class GradePlayLista extends React.Component {
    state = {
        playlistas: [],
        inputCriarPlaylistaValue: '',
        idPlayList: '',
        nomePlaylist: '',
        mostraMusicas: false
      }

      componentDidMount () {
          this.carregarPlaylistas()
      }


      carregarPlaylistas = async () =>{
          try {
              const resposta = await axios.get(apiUrl, headers)
              console.log(resposta.data.result.list)
              this.setState({ playlistas: resposta.data.result.list})
          } catch (error) {
              console.log('Erro Carregar Play lista', error)
          }
      }
    

      InputCriarPlaylista = (event) => {
        this.setState({inputCriarPlaylistaValue: event.target.value})
      }


    
      CriarPLaylista = async () => {
        const novaPlayLista = {
          id: Date.now(),
          name: this.state.inputCriarPlaylistaValue
        }
        try {
            await axios.post(apiUrl, novaPlayLista, headers)
            this.carregarPlaylistas()
            
        } catch (error) {
            console.log('Erro Criar Play lista', error)
        }
      }


      apagarPlaylista = async (id) => {
          try {
            await axios.delete(`${apiUrl}/${id}`, headers)
            this.carregarPlaylistas()
            alert('Deletada')
          } catch (error) {
            console.log('Erro ao Apagar playlista', error)
          }
      }





      verMusicas= (id, nome) => {
        this.setState({idPlayList: id, mostraMusicas: !this.state.mostraMusicas, nomePlaylist: nome})
      }

    render(){

        const musicas = () =>{
            return  <ListaDeMusicas idPlayList={this.state.idPlayList} nomePlaylist={this.state.nomePlaylist}/>
        }

        return(
            <div>
                <label>Criar Playlista</label>
                <input placeholder={'Nome'} onChange={this.InputCriarPlaylista}/>
                <button onClick={this.CriarPLaylista}>Criar</button>
                <ConteinerConteudo>
                    {this.state.playlistas.map((lista)=>{
                        return (
                        <CardLista key={lista.id}>
                            <p>{lista.name}</p>
                            <button onClick={()=>this.verMusicas(lista.id, lista.name)}>Ver</button>
                            <button onClick={()=>this.apagarPlaylista(lista.id)}>Excluir</button>
                        </CardLista>
                        )
                    })}
                    {this.state.mostraMusicas && musicas()}
                </ConteinerConteudo>
            </div>
        )
    }
}

export default GradePlayLista

const CardLista = styled.div`
width: 100px;
height: 120px;
margin: 10px;
border: 1px solid black;
`
const ConteinerConteudo = styled.div`
display: flex;
width: 80%;
height: 530px;
margin: 10px;
border: 1px solid black;
background-color: #55fbe5;
`