import React from 'react'
import './CardPequeno.css'

export function CardPequeno(props){
    return (
        <div>
            <div className="CardPequeno-container">
                <img src={props.icoEmail} alt=""/>
                <h4>E-mail: </h4>
                <p>{ props.email }</p>
            </div>
            <div className="CardPequeno-container">
                <img src={props.icoEndereco} alt=""/>
                <h4>Endereço: </h4>
                <p>{ props.endereco }</p>
            </div>
        </div>
    )
}