import React from 'react'
import axios from  'axios'
import styled from 'styled-components'

class TelaInicial extends React.Component {
    state = {
        valueCep: '',
        dados:''
    }


    InputCep = (event) => {
        this.setState({ valueCep: event.target.value})
    }

    infoCep = async () =>{
        try {
            const resposta = await axios.get(`https://viacep.com.br/ws/${this.state.valueCep}/json`)
            this.setState({dados: resposta.data})
        } catch (erro) {
            alert('ocorreu um erro')
        }
    }

    render(){
        const info = () =>{
            return (
                <Info>
                    <li>Cidade: {this.state.dados.localidade || '----'}</li>
                    <li>Uf: {this.state.dados.uf || '----'}</li>
                    <li>Logradouro: {this.state.dados.logradouro || '---'}</li>
                    <li>Bairro: {this.state.dados.bairro || '----'}</li>
                    <li>Complemento: {this.state.dados.complemento || '----'}</li>
                    <li>DDD: {this.state.dados.ddd || '----'}</li>
                </Info>
            )
        }
        return(
            <ContainerTela>
                <div>
                    <h1>Busque informações do seu CEP</h1>
                    <input  maxlength={'9'} onChange={this.InputCep}/>
                    <button onClick={this.infoCep}>Buscar</button>
                    {this.state.dados && info()}
                </div>
            </ContainerTela>
        )
    }
}

const ContainerTela = styled.div`
background-color: #d6d6d6;
font-family:Arial, Helvetica, sans-serif;
width: 100vw;
height: 100vh;
box-sizing: border-box;
margin: 0;
padding: 0;
display:flex;
justify-content: center;
align-items: center;

    div{
        width: 25%;
        height: 60%;
        background-color: #bbb;
        border: 1px solid #717171;
        display:flex;
        flex-direction: column;
        align-items: center;
        
        h1{
            font-weight: 100;
            font-size: 25px;
            line-height: 35px;
            width: 90%;
            color: #444;
        }

        input {
            width: 90%;
            height: 50px;
            border: none;
            outline: none;
            font-size: 25px;
            color: #777;
        }

        button {
            margin-top: 5px;
            width: 90%;
            height: 50px;
            border: none;
            outline: none;
            color: #6f6f6f;
            font-size: 18px;
            font-weight: lighter;
            cursor: pointer;
            :hover {
                font-size: 19px;
            }
        }
    }
`
const Info = styled.ul`
    list-style-type: none;
    background-color: #aaa;
    width: 80%;
`
export default TelaInicial