import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import backgroundHeader from '../../img/header.jpg'
import play from '../../img/play.jpg'

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
            alert('Criada com Sucesso!')
            
        } catch (error) {
            console.log('Erro Criar Play lista', error)
        }
      }


      apagarPlaylista = async (id) => {
        if(window.confirm('Deseja excluir playlist?')){

            try {
              await axios.delete(`${apiUrl}/${id}`, headers)
              this.carregarPlaylistas()
              alert('Deletada')
            } catch (error) {
              console.log('Erro ao Apagar playlista', error)
            }
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
                <Header imagem={backgroundHeader}>
                    <h1>Crie sua Playlist</h1>
                    <div>
                        <input placeholder={'Nome'} onChange={this.InputCriarPlaylista}/>
                        <button onClick={this.CriarPLaylista}>Criar</button>
                    </div>
                </Header>
                <ConteinerConteudo>
                    <Grid>
                        {this.state.playlistas.map((lista, indice)=>{
                            return (
                            <CardLista key={lista.id} cardFundo={`https://picsum.photos/id/1${indice}/200/300/?blur=3`}>
                                <h2>{lista.name}</h2>
                                <div>
                                    <BntVer onClick={()=>this.verMusicas(lista.id, lista.name)}>Ver</BntVer>
                                    <BntExcluir onClick={()=>this.apagarPlaylista(lista.id)}>Excluir</BntExcluir>
                                </div>
                            </CardLista>
                            )
                        })}
                    </Grid>
                    <Musicas visibilidade={this.state.mostraMusicas} fundo={play}>
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
    background: url(${props => props.imagem});
    display: flex;
    flex-direction: column;
    height: 40%;
    padding-bottom: 1%;
    justify-content: flex-end;
    align-items: flex-end;

    h1{
       color:#fff;
       font-size: 50px;
       line-height: 60px;
       margin:0 10% 1% 0;
    }

    div{
        margin-right: 12%;
        

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
            color: #fff;
            font-size: 17px;
            border: none;
            background-color: #09f77c;
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
width: 90vw;
height: 100vh;
margin: 10px auto;
/* border: 1px solid black; */
/* background-color: #55fbe5; */
align-items:center;
justify-content:space-between;
/* overflow-y: scroll; */
`

const Grid = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-wrap: wrap;

`
const Musicas = styled.div`
background: url(${props => props.fundo});
width: 80%;
height: 100%;
margin: 0;
margin-top: 17px;

display: ${props => props.visibilidade? 'block': 'none'};
opacity:0.8;

`

const CardLista = styled.div`
width: 190px;
height: 200px;
margin: 10px;
background: url(${props => props.cardFundo});
box-shadow: -1px 3px 8px 0px #ffc5d0;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;



h2 {
    font-size: 28px;
    box-shadow: 1px 1px 1px 0px #54f52a;
    color: #fff;
    width: 80%;
    text-align: center;
    margin:10px 0 0;
}

div{
   display: flex;
   flex-direction: column;
   width: 100%;
   align-items: center;
}

`
const BntVer = styled.button`
    width: 99%;
    padding: 10px 0;
    border: none;
    color: #fff;
    font-size: 18px;
    background-color: #09f77c;
    box-shadow: 0px 0px 1px 0px black;
    outline: none;
    :hover {
        font-size: 19px;
        box-shadow: 0px 0px 4px 0px black;
    }
` 
const BntExcluir = styled(BntVer)`
 color: #a09e9e;
 background-color: #ffffff;
 font-size: 17px;
 :hover {
        color: #ff7b7b;
        font-size: 18px;
    }
`