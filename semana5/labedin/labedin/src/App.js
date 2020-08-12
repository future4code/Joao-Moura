import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import FotoPerfil from './img/Perfil_Linkidin.png'
import Barroso from './img/barroso.jpg'
import Santana from './img/santana.png'
import { CardPequeno } from './components/CardPequeno/CardPequeno'

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={FotoPerfil} 
          nome={`João Paulo Moura`} 
          descricao={`Oi, sou João Paulo, tenho 22 anos e amo programar. Sou estudante de
            Análise e Desenvolvimento de Sistemas e aluno da Labenu no curso de Full Stack Web.
             Fique a vontade para ver meus trabalhos e um pouco sobre mim nas minhas redes sociais`}
        />
        
        <ImagemButton 
          imagem={`https://image.flaticon.com/icons/png/512/117/117472.png`} 
          texto={`Ver mais`}
        />
      </div>
      <div className="page-section-container">
        <h2>Endereço / Contato</h2>
        <CardPequeno
          icoEmail={`https://lh3.googleusercontent.com/proxy/bkNfgbQxeDF0NC3pJ9LhfDOks4IzRRvygilOsVNbbjXi_Jv76GkD1aXSQsCWwlZg83ZFhX1j6vwtuJZjsOtYgDj5zy1YMiEzXD1NcWlQPqR91BASRYg`}
          email={`Joao@labenu.com`}
          icoEndereco={`https://i.pinimg.com/736x/ba/67/c4/ba67c44d437af206e48a7f9f8048b870.jpg`}
          endereco={`Rua Violeta 123 - Bananinha`}
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem={Santana} 
          nome={`Viação Santana`}
          descricao={`Cobrador Urbano`} 
        />
        
        <CardGrande 
          imagem={Barroso} 
          nome={`Viação Barroso`} 
          descricao={`Cobrador Rodoviário`} 
        />
      </div>

      <div className="page-section-container">
        <h2>Competências</h2>
        <CardGrande 
          imagem={`https://image.flaticon.com/icons/png/512/423/423049.png`} 
          nome={`Desenvolvimento Web`}
          descricao={`Html5 - Css3 - JavaScript - React`}
        />
      </div>
      
      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem={`https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png`} 
          texto={"Facebook"} 
        />        

        <ImagemButton 
          imagem={`https://cdn2.iconfinder.com/data/icons/simple-social-media-shadow/512/14-512.png`} 
          texto={"LinkidIn"} 
        />        
      </div>
    </div>
  );
}

export default App;
