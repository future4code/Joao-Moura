import React, { useState } from 'react'
import { PostContainer, PostHeader, UserPhoto, PostPhoto, PostFooter, CommentContainer } from './styles'

import IconeComContador from '../IconeComContador/IconeComContador'
import SecaoComentario from '../SecaoComentario/SecaoComentario'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'

const Post = (props) => {
  const [curtir, setCurtir] = useState(false)
  const [numCurtidas, setNumCurtidas] = useState(0)

  const [comentar, setComentar] = useState(false)
  const [listaComentarios, setListaComentarios] = useState([])
  const [numComentarios, setNumComentarios] = useState(0)


  const onClickCurtir = () => {
    setCurtir(!curtir)
    curtir? setNumCurtidas(numCurtidas-1) : setNumCurtidas(numCurtidas+1)
  };

  const onClickComentario = () => {
    setComentar(!comentar)
  };

  const enviarComentario = (comentario, limparInput) => {
    if(comentario !== ''){
      const novaLista = [comentario, ...listaComentarios]
      setListaComentarios(novaLista)
      setNumComentarios(numComentarios+1)
      limparInput('')
    }
  }


  return (
    <PostContainer>
      <PostHeader>
        <UserPhoto src={props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={props.fotoPost} alt={'Imagem do post'}/>

      <PostFooter>
        <IconeComContador
          icone={curtir? iconeCoracaoPreto: iconeCoracaoBranco}
          onClickIcone={onClickCurtir}
          valorContador={numCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={onClickComentario}
          valorContador={numComentarios}
        />

      </PostFooter>
        {(comentar && listaComentarios.length > 0) && listaComentarios.map((comentario, index)=>{
          return (
            <CommentContainer key={index}>
              <p>{comentario}</p>
            </CommentContainer>
          )
        })}

        {comentar && <SecaoComentario enviarComentario={enviarComentario} />}
    </PostContainer>
  )
}

export default Post