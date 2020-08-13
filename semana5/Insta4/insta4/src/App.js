import React from 'react';
import './App.css';
import Post from './components/Post/Post';
import styled from 'styled-components';

const Formulario  = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 170px;
  width: 300px;
  margin: 10px;
`

const CamposInput = styled.input `
  width: 230px;
  height: 30px;
`

const BotaoPostar = styled.button `
  border: none;
  background-color: rgb(44, 255, 44);
  width: 110px;
  height: 40px;
  border-radius: 10px;
`

class App extends React.Component {
  state = {
    posts: [
      {
        nomeUsuario: 'paulinha',
        fotoperfil: 'https://picsum.photos/50/50',
        imgPost: 'https://picsum.photos/200/150'
      },
      {
        nomeUsuario: 'Octocat',
        fotoperfil: 'https://avatars0.githubusercontent.com/u/46500265?s=400&u=66e72037cec8530d6a90c9a97ebd0a8bc77fe761&v=4',
        imgPost: 'https://pbs.twimg.com/media/DLAzxKaVoAACEAB.png'
      },
      {
        nomeUsuario: 'Tux',
        fotoperfil: 'https://miro.medium.com/max/2560/1*LwNjUGU8Ao4OGfHjyiHfHQ.png',
        imgPost: 'https://www.kindpng.com/picc/m/749-7499993_linux-tux-hd-png-download.png'
      }
    ],
    inputNomeUsuario: '',
    inputFotoPerfil: '',
    inputFotoPost:''
  }

  addNomeUsuario = (event) => {
    this.setState({ inputNomeUsuario: event.target.value })
  }

  addFotoPerfil = (event) => {
    this.setState({ inputFotoPerfil: event.target.value })
  }

  addFotoPost = (event) => {
    this.setState({ inputFotoPost: event.target.value })
  }

  postar = () => {
    const novoPost = {
      nomeUsuario: this.state.inputNomeUsuario,
      fotoperfil: this.state.inputFotoPerfil,
      imgPost: this.state.inputFotoPost
    } 

    const novoArray = [novoPost,...this.state.posts ]

    this.setState({ posts: novoArray })

    //limpar os campos
    this.setState({ inputNomeUsuario: '' })
    this.setState({ inputFotoPerfil: '' })
    this.setState({ inputFotoPost: '' })

  }

  render() {
    const listaDePosts = this.state.posts.map((post)=>{
      return(
        <Post
          nomeUsuario={post.nomeUsuario}
          fotoUsuario={post.fotoperfil}
          fotoPost={post.imgPost}
        />
      )
    })

    return (
      <div className={'app-container'}>
        <Formulario>
          <CamposInput
              value={this.state.inputNomeUsuario}
              onChange={this.addNomeUsuario}
              placeholder={"Seu nome"}
          />

          <CamposInput
              value={this.state.inputFotoPerfil}
              onChange={this.addFotoPerfil}
              placeholder={"link da foto de perfil"}
          />

          <CamposInput 
              value={this.state.inputFotoPost}
              onChange={this.addFotoPost}
              placeholder={"link da foto de postagem"}
          />
          <BotaoPostar onClick={this.postar}>Postar</BotaoPostar>
       </Formulario>
        {listaDePosts}
      </div>
    );
  }
}

export default App;
