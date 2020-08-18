import React from 'react'
import styled from 'styled-components'
import {DadosGerais} from '../DadosGerais/DadosGerais'
import {EnsinoSuperior} from '../EnsinoSuperior/EnsinoSuperior'
import {EnsinoGeral} from '../EnsinoGeral/EnsinoGeral'
import {Final} from '../Final/Final'

export class Form extends React.Component {
    state = {
        etapa: 1
    }

    renderizarEtapa = () => { 
        switch(this.state.etapa){
            case 1:
                return <DadosGerais/>
            case 2:
                return <EnsinoSuperior/>
            case 3:
                return <EnsinoGeral/>
            case 4:
                return <Final/>
            
        }
    }

    proximaPagina = () => {
        this.setState({etapa: this.state.etapa + 1 })
    }

    render (){
        const botao = () => {
            if(this.state.etapa< 4){
                return <BotaoNext onClick={this.proximaPagina}>Próxima Etapa</BotaoNext>
            }
        }
        return (
            <Formulario>
                {this.renderizarEtapa()}
                {botao()}
            </Formulario>
        )
    }
}


const BotaoNext = styled.button`
    padding: 5px;
    width: 100px;
    height: 40px;
    margin: 15px 0;
`
const Formulario = styled.div`
   
   display: flex;
   flex-direction: column;
   align-items: center;
`

