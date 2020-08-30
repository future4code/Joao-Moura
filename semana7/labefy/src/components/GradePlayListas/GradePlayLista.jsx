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
            <ContainerPlaylista>
                <Header>
                    <h1>Crie sua Playlist</h1>
                    <div>
                        <input placeholder={'Nome'} onChange={this.InputCriarPlaylista}/>
                        <button onClick={this.CriarPLaylista}>Criar</button>
                    </div>
                </Header>
                <ConteinerConteudo>
                    <Grid>
                        {this.state.playlistas.map((lista)=>{
                            return (
                            <CardLista key={lista.id}>
                                <p>{lista.name}</p>
                                <button onClick={()=>this.verMusicas(lista.id, lista.name)}>Ver</button>
                                <button onClick={()=>this.apagarPlaylista(lista.id)}>Excluir</button>
                            </CardLista>
                            )
                        })}
                    </Grid>
                    <Musicas visibilidade={this.state.mostraMusicas}>
                         {this.state.mostraMusicas && musicas()}
                    </Musicas>
                </ConteinerConteudo>
            </ContainerPlaylista>
        )
    }
}

export default GradePlayLista

const ContainerPlaylista = styled.div`
    margin: 0;
    padding:0;
    width: 100%;
    height: 100%;

`

const Header = styled.header`
    background-color:#f8f8f8;
    display: flex;
    height: 13%;
    padding: 5px;
    justify-content: flex-start;
    align-items: flex-end;

    h1{
       color:#7b7b7b;
       font-size: 41px;
       margin: 0;
    }

    div{
        margin-left: 20%;

        input{
            height: 30px;
            width: 230px;
            border:none;
            box-shadow: 0px 0px 2px 0px black;
            outline:none;
            :hover {
                box-shadow: 0px 0px 3px 0px black;
            }
        }

        button {
            height: 32px;
            width: 65px;
            margin-left: 4px;
            border: none;
            background-color: #c5c5c5;
            box-shadow: 0px 0px 1px 0px black;
            outline: none;
            :hover {
                box-shadow: 0px 0px 4px 0px black;
            }
            
        }
    }

    

`

const ConteinerConteudo = styled.div`
display: flex;
width: 90%;
height: 80%;
margin: 10px auto;
/* border: 1px solid black; */
/* background-color: #55fbe5; */
align-items:center;
justify-content:center;
overflow-y: scroll;
`

const Grid = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-wrap: wrap;

`
const Musicas = styled.div`
 background-color: #f6ff9d;
width: 100%;
height: 100%;
margin: 0;
display: ${props => props.visibilidade? 'block': 'none'};

`

const CardLista = styled.div`
width: 190px;
height: 200px;
margin: 10px 0 0 10px;
border: 1px solid black;
`