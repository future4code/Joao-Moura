import React from 'react'
import styled from 'styled-components'
import IconEmail from '../img/email.png'
import IconUser from '../img/user.png'

export default class Login extends React.Component {

    naoRecarregar = (event) =>{
        event.preventDefault()
    }

    render(){
        return(
           <ContainerLogin>
               <h1>Cadastro de usuário</h1>
               <Formulario onSubmit={this.naoRecarregar}>
                   <Nome>
                        <span>
                            <img src={IconUser} alt=""/>
                        </span>
                        <input 
                            placeholder={'Nome'}
                            onChange={this.props.onChangeNome}
                        />
                   </Nome>
                   <Email>
                        <span>
                            <img src={IconEmail} alt=""/>
                        </span>
                        <input 
                            placeholder={'E-mail'}
                            onChange={this.props.onChangeEmail}
                        />
                   </Email>
                   <div>
                       <button onClick={this.props.onClickVerUsuarios}>Ver lista</button>
                       <button onClick={this.props.onClickCriar}>Criar</button>
                   </div>
               </Formulario>
           </ContainerLogin>
        )
    }
}

const ContainerLogin = styled.div `
background-color: #198;
width: 400px;
height: 500px;
display: flex;
flex-direction: column;
/* justify-content: center; */
align-items: center;
`

const Formulario = styled.form`
/* background-color: #bbb; */
width: 80%;
`
const Nome = styled.div`
    display: flex;
    align-items: center;
    span img {
        width: 20px;
        
    }

`
const Email = styled.div`
    span img {
        width: 20px;
    }

`