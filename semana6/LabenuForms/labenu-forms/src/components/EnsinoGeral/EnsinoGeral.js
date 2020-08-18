import React from 'react'
import styled from 'styled-components'

export function EnsinoGeral (){
    return(
        <DivEnsinoGeral>
            <Titulo>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</Titulo>
            <Form>
                <Label>5. Por que você não terminou um curso de graduação?</Label>
                <Input />

                <Label>6. Você fez algum curso complementar?</Label>
                <Input />
            </Form>
        </DivEnsinoGeral>
    )
}

const DivEnsinoGeral = styled.div`
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

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Label = styled.label`
    margin: 15px 0;
`

const Input = styled.input`
    width: 220px;
    
`
