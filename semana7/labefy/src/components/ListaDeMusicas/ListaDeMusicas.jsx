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
        valueLink: ''
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
                <input placeholder={'Nome da Musica'} onChange={this.InputMusica}/>
                <input placeholder={'Nome do Artista'} onChange={this.InputArtista}/>
                <input placeholder={'link http://'} onChange={this.InputLink}/>

                <button onClick={this.AdicionarMusica}>Adicionar</button>
                {this.state.listaMusicas.map((musica)=>{
                    return (
                    <CardLista key={musica.id}>
                        <p>{musica.name} | {musica.artist}</p>
                        <Audio controls>
                            <source src={musica.url} type={'audio/mp3'}></source>
                        </Audio>
                    </CardLista>
                    )
                })}
            </ContainerMusicas>
        )
    }
}

export default ListaDeMusicas

const ContainerMusicas = styled.div`
    height: 100%;
`

const CardLista = styled.div`
width: 60%;
height: 100%;
margin: 10px;
border: 1px solid black;
background-color: #f1f3f4;

    p{
        margin: 0 10px;
        padding:0;
    }
`

const Audio = styled.audio`
width: 90%;
height: 30%;

    source{
        background-color: none;

    }
`