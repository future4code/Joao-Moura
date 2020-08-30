import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import {apiUrl, headers, detalhesMusicas} from '../../config/configApi'


class ListaDeMusicas extends React.Component {
    state = {
        listaMusicas: [],
        idLista: this.props.idPlayList,
        nomeLista: this.props.nomePlaylist,
        valueMusica: '',
        valueArtista: '',
        valueLink: '',
      }

      componentDidMount () {
          this.carregarMusicas()
      }

    
      InputMusica = (event) => {
        this.setState({valueMusica: event.target.value})
      }
      InputArtista = (event) => {
        this.setState({valueArtista: event.target.value})
      }
      InputLink = (event) => {
        this.setState({valueLink: event.target.value})
      }



 
    AdicionarMusica = async () => {
        const novaMusica = {
            name: this.state.valueMusica, 
            artist: this.state.valueArtista,
            url: this.state.valueLink
        }

        try {
            await axios.post(`${apiUrl}/${this.state.idLista}/tracks`, novaMusica, headers)
            this.carregarMusicas()   
            alert("adicionada")
        } catch (error) {
            console.log('Erro Add Musica', error)
            console.log('ID',this.state.idLista)
            console.log('Musica:',novaMusica)
        }
      }

      


//====================================================   
    carregarMusicas = async () =>{
          try {
              const resposta = await axios.get(`${apiUrl}/${this.state.idLista}/tracks`, headers)
              console.log(resposta.data.result.tracks)
              this.setState({ listaMusicas: resposta.data.result.tracks})
          } catch (error) {
              console.log('Erro ao Carregar Musicas', error)
              console.log('ID',this.state.idLista)
              console.log('ID',this.props.idPlayList)
          }
      }

    render(){

        return(
            <ContainerMusicas>
                <h2>{this.state.nomeLista} - Adicionar Música</h2>
                <Form>
                    <input placeholder={'Nome da Musica'} onChange={this.InputMusica}/>
                    <input placeholder={'Nome do Artista'} onChange={this.InputArtista}/>
                    <input placeholder={'link http://'} onChange={this.InputLink}/>
                    <button onClick={this.AdicionarMusica}>Adicionar</button>
                </Form>
                <Lista>
                    {this.state.listaMusicas.map((musica)=>{
                        return (
                        <CardLista key={musica.id}>
                            <p>{musica.name} | {musica.artist}</p><span>X</span>
                            <Audio controls>
                                <source src={musica.url} type={'audio/mp3'}></source>
                            </Audio>
                        </CardLista>
                        )
                    })}
                </Lista>
            </ContainerMusicas>
        )
    }
}

export default ListaDeMusicas

const ContainerMusicas = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: space-between;
    
    h2{
        color: #fff;
        font-size:30px;
        margin: 10px;
    }
`
const Form = styled.div`
    height: 18%;
    display: flex;
    flex-direction: column;
    width: 90%;

    input{
        height: 25%;
        background: none;
        color: #fff;
        width: 50%;
        margin: 2px;
        border: none;
        border-bottom: 2px solid #FFF;
        font-size: 20px;
        outline:none;
        ::-webkit-input-placeholder {
            color: #7133A2;
            font: 12px verdana, arial, sans-serif;
            }
    }
    
    

    button{
        width: 52%;
        padding: 2px 0;
        border: 2px solid #3d0361;
        margin-top: 10px;
        color: #fff;
        font-size: 18px;
        background-color: #8607d4;
        outline: none;
        :hover {
            color: #0F2;
            font-size: 19px;
            box-shadow: 0px 0px 4px 0px black;
        }
    }
`

const Lista = styled.div`
    /* background-color: #11d; */
    height: 70%;
    width: 95%;

    overflow-y: scroll;
    margin-top: 10px;
    margin-left: 26px;
`


const CardLista = styled.div`
    width: 94%;
    height: 10%;
    margin: 5px;
    color: #eee;
    /* border: 1px solid #9b18d4; */
    background-color: #29248a;
    position: relative;

    p{
        margin: 0 10px;
        padding:0;
    }
    span{
        position: absolute;
        font-size: 15px;
        background-color: #bfbfbf;
        border-radius: 12px;
        padding: 3px 7px;
        top: 13px;
        right: 10px;
        color: red;
        cursor:pointer;
        :hover {
            font-size: 16px;
        }
    }
`

const Audio = styled.audio`
width: 90%;
height: 30%;

    source{
        background-color: none;

    }
`