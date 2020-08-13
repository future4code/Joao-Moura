import React from 'react'
import './Post.css'

import {IconeComContador} from '../IconeComContador/IconeComContador'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'

import {IconeSave} from '../IconeSave/IconeSave'
import iconePreto from '../../img/icon-save.svg'
import iconeBranco from '../../img/icon-not-save.svg'

import {IconeCompartilhar} from '../IconeCompartilhar/IconeCompartilhar'
import iconeShare from '../../img/icon-share.svg'

import {CampoCompartilhar} from '../CampoCompartilhar/CampoCompartilhar'
import instagram from '../../img/instagram-logo.svg'
import facebook from  '../../img/facebook.svg'
import twitter from  '../../img/twitter.svg'

class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0,
    salvo: false,
    compartilhar: false
}

//faz o coração contar +1 ou diminuir
onClickCurtida = () => {
  this.setState({
    curtido: !this.state.curtido
  })

  if(this.state.curtido){
    this.setState({
      numeroCurtidas: this.state.numeroCurtidas - 1
    })
  } else {
    this.setState({
      numeroCurtidas: this.state.numeroCurtidas + 1
    })
  }

}

//Abri a secao de comentarios
onClickComentario = () => {
  this.setState({
    comentando: !this.state.comentando
  })
  
}

//comentario adiciona +1 quando é enviado
aoEnviarComentario = () => {
  this.setState({
    comentando: false,
    numeroComentarios: this.state.numeroComentarios + 1
  })
}

//icone salvar muda
salvar = () => {
  this.setState({
    salvo: !this.state.salvo
  }) 
}

//Abri a secao de compartilhamento
abaCompartilhar = () => {
  this.setState({
    compartilhar: !this.state.compartilhar
  })
  
}

//mostra no console que onde foi compartilhado
compartilhar = (event) => {
  console.log("Post compartilhado no",event.target.alt)
}




render() {
  let iconeCurtida
  let iconeSalvar 
  
  if(this.state.curtido) {
    iconeCurtida = iconeCoracaoPreto
  } else {
    iconeCurtida = iconeCoracaoBranco
  }
  
  this.state.salvo? iconeSalvar = iconePreto : iconeSalvar = iconeBranco
  
  let componenteComentario
  
  if(this.state.comentando) {
    //SecaoComentario  é um componete
    componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario}/>
  }
  
  let secaoCampartilhar

  if(this.state.compartilhar){
    secaoCampartilhar = <CampoCompartilhar 
    onClickCampo={this.compartilhar} 
    imgInstagram={instagram}
    imgFacebook={facebook}
    imgTwitter={twitter}
    />
  }
  
  return (
    <div className={'post-container'}>
      
      <div className={'post-header'}>
      <img className={'user-photo'} src={this.props.fotoUsuario} alt={'Imagem do usuario'}/>
      <p>{this.props.nomeUsuario}</p>
        <IconeSave icone={iconeSalvar}  onClickSave={this.salvar}/>
      </div>
      
      <img className={'post-photo'} src={this.props.fotoPost} alt={'Imagem do post'}/>
      
      <div className={'post-footer'}>
        <IconeComContador
        icone={iconeCurtida}
        onClickIcone={this.onClickCurtida}
        valorContador={this.state.numeroCurtidas}
        />
        
        <IconeCompartilhar 
        icone={iconeShare}
        onClickShare={this.abaCompartilhar}
        />
        
        <IconeComContador
        icone={iconeComentario}
        onClickIcone={this.onClickComentario}
        valorContador={this.state.numeroComentarios}
        />
      </div>
      {secaoCampartilhar}
      {componenteComentario}
    </div>
  )
}
}

export default Post