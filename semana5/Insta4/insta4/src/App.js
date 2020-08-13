import React from 'react';
import './App.css';
import Post from './components/Post/Post';

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

    const novoArray = [...this.state.posts, novoPost]

    this.setState({ posts: novoArray })
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
        <div className={'formulario'}>
          <input
              value={this.state.inputNomeUsuario}
              onChange={this.addNomeUsuario}
              placeholder={"Seu nome"}
          />

          <input
              value={this.state.inputFotoPerfil}
              onChange={this.addFotoPerfil}
              placeholder={"link da foto de perfil"}
          />

          <input 
              value={this.state.inputFotoPost}
              onChange={this.addFotoPost}
              placeholder={"link da foto de postagem"}
          />
          <button onClick={this.postar}>Postar</button>
       </div>
        {listaDePosts}
      </div>
    );
  }
}

export default App;
