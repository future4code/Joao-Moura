import React from 'react'
import styled from 'styled-components'

export function DadosGerais (){
    return(
        <DivDadosGerais>
            <Titulo>ETAPA 1 - DADOS GERAIS</Titulo>
            <Form>
                <Label>1. Qual o seu nome?</Label>
                <Input />

                <Label>2. Qual a sua idade?</Label>
                <Input />

                <Label>3. Qual seu email?</Label>
                <Input />

                <Label>4. Qual a sua escolaridade?</Label>
                <Select>
                    <option value="1">Ensino médio incompleto</option>
                    <option value="2">Ensino médio completo</option>
                    <option value="3">Ensino superior incompleto</option>
                    <option value="4">Ensino superior completo</option>
                </Select>
            </Form>
        </DivDadosGerais>
    )
}

const DivDadosGerais = styled.div`
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
const Select = styled.select `
    width: 220px;
`
