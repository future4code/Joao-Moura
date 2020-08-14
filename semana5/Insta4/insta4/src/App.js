import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {
  render() {
    return (
      <div className={'app-container'}>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />

        <Post
          nomeUsuario={'Octocat'}
          fotoUsuario={'https://avatars0.githubusercontent.com/u/46500265?s=400&u=66e72037cec8530d6a90c9a97ebd0a8bc77fe761&v=4'}
          fotoPost={'https://pbs.twimg.com/media/DLAzxKaVoAACEAB.png'}
        
        />
        <Post
          nomeUsuario={'Tux'}
          fotoUsuario={'https://miro.medium.com/max/2560/1*LwNjUGU8Ao4OGfHjyiHfHQ.png'}
          fotoPost={'https://www.kindpng.com/picc/m/749-7499993_linux-tux-hd-png-download.png'}
        />
      </div>
    );
  }
}

export default App;
