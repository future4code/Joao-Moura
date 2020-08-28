import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import {apiUrl, headers, detalhesMusicas} from '../../config/configApi'


class ListaDeMusicas extends React.Component {
    state = {
        listaMusicas: [],
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
            name: this.valueMusica, 
            artist: this.valueArtista,
            url: this.valueLink
        }
        try {
            await axios.post(`${apiUrl}/${this.props.idPlayList}/tracks`, novaMusica, headers)
            this.carregarMusicas()   
        } catch (error) {
            console.log('Erro Add Musica', error)
        }
      }



//====================================================   
    carregarMusicas = async () =>{
          try {
              const resposta = await axios.get(`${apiUrl}/${this.props.idPlayList}/tracks`, headers)
              console.log(resposta.data)
              this.setState({ playlistas: resposta.data.result.tracks})
          } catch (error) {
              console.log('Erro ao Carregar Musicas', error)
          }
      }

    render(){
        return(
            <div>
                <h2>Adicionar Música</h2>
                <label>Nome da Musica</label>
                <input placeholder={'Musica'} onChange={this.InputMusica}/>

                <label>Nome do Artista</label>
                <input placeholder={'Artista'} onChange={this.InputArtista}/>

                <label>Link da ListaDeMusicas</label>
                <input placeholder={'link'} onChange={this.InputLink}/>

                <button onClick={this.AdicionarMusica}>Adicionar</button>
                {this.state.listaMusicas.map((musica)=>{
                    return (
                    <CardLista>
                        <p>{musica.name} | {musica.artist}</p>
                        <audio controls>
                            <source src={musica.url} type={'audio/mp4'}></source>
                        </audio>
                    </CardLista>
                    )
                })}
            </div>
        )
    }
}

export default ListaDeMusicas

const CardLista = styled.div`
width: 200px;
height: 50px;
margin: 10px;
border: 1px solid black;
background-color: #Fa8;
`