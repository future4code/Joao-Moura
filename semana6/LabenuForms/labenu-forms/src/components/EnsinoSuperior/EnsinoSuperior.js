import React from 'react'
import styled from 'styled-components'

export function EnsinoSuperior (){
    return(
        <DivEnsinoSuperior>
            <Titulo>ETAPA 2 - Informações do Ensino Superior</Titulo>
            <Form>
                <Label>5. Qual curso?</Label>
                <Input />

                <Label>6. Qual a unidade de ensino?</Label>
                <Input />
            </Form>
        </DivEnsinoSuperior>
    )
}

const DivEnsinoSuperior = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #bbb;
    width: 500px;
    height: 500px;
    align-items: center;
    margin: 0 auto;
`
const Titulo = styled.h1``

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
