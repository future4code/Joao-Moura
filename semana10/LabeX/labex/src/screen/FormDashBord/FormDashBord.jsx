import React from 'react'
import styled from 'styled-components'
import { countries } from '../../constants/countries'
import { useForm } from '../../hooks/useForm'

const FormDashBord = () => {
    //desestruturando função importada
    const { form, onChange, resetState } = useForm(
        {
            trip:''
        })
    
    const handleInputChange = (event) => {
        const { name, value } = event.target;

        onChange(name, value)
    }

    //deve enviar os dados para a API
    const formSubmit = (event) =>{
        event.preventDefault()
        console.log("nome da viagem",form)
        resetState()
    }

    

    return (
        <FormContainer>
            <p>Cadastro de Viagens</p>
            <Form onSubmit={formSubmit}>
                <div>
                    <Label>Nome da viagem</Label>
                    <Input 
                        value={form.trip}
                        name='trip'
                        onChange={handleInputChange}
                        // pattern=""
                        title=""
                        required
                    />
                </div>

                <div>
                    <Label>Planeta</Label>
                    <Select required>
                        {countries.map((country, index)=>{
                            return(
                                <option value={country.nome} key={index}>
                                    {country.nome}
                                </option>
                            )
                        })}
                    </Select>
                </div>
                
                <div>
                    <Label>Data da viagem</Label>
                    <Input type='date' required/>
                </div>

                <div>
                    <Label>Descrição</Label>
                    <textarea type='text'/>
                </div>

                <div>
                    <Label>Duração</Label>
                    <Input type='number' required/>
                </div>

                <button>Criar viagem</button>
            </Form>
        </FormContainer>
    )
}

export default FormDashBord


const FormContainer = styled.div`
background-color: #fff;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const Form = styled.form `
background-color: #cff;
width: 40%;
height:500px;
padding: 10px;

div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* align-items: center; */
    margin: 20px 0;
}
`

const Label = styled.label `
font-size: 20px;
padding: 5px;
`
const Select = styled.select `
width: 300px;
height: 30px;
`
const Input = styled.input `
width: 300px;
height: 30px;

`