import React from 'react'
import styled from 'styled-components'

export function Final (){
    return(
        <DivFinal>
            <Titulo>O FORMULÁRIO ACABOU</Titulo>
            <p>Muito obrigado por participar! Entraremos em contato!</p>
        </DivFinal>
    )
}

const DivFinal = styled.div`
    display: flex;
    flex-direction: column;
    width: 500px;
    height: 400px;
    align-items: center;
    margin: 0 auto;
`
const Titulo = styled.h1`
    font-size: 22px;
`

