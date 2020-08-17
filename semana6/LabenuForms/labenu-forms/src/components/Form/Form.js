import React from 'react'
import styled from 'styled-components'
import {DadosGerais} from '../DadosGerais/DadosGerais'
import {EnsinoSuperior} from '../EnsinoSuperior/EnsinoSuperior'

export class Form extends React.Component {
    state = {
        etapa: 1
    }

    renderizarEtapa () { 
        switch(this.state.etapa){
            case 1:
                return <DadosGerais/>
            case 2:
                return <EnsinoSuperior/>
        }
    }

   
    proximaPagina = () => {
        this.setState({etapa: this.state.etapa + 1 })
    }

    render (){
        return (
            <div>
                {this.renderizarEtapa()}
                                    {/*proximaPagina() também nao funciona  */}
                <BotaoNext onClick={this.proximaPagina}>Próxima Etapa</BotaoNext>
            </div>
        )
    }
}


const BotaoNext = styled.button`
    padding: 5px;
    width: 100px;
    height: 40px;
    margin: 15px 0;
`

