import React from 'react'
import styled from 'styled-components'
import { planets } from '../../constants/planets'
import { useForm } from '../../hooks/useForm'

const FormDashBord = () => {
    //desestruturando função importada
    const { form, onChange, resetState } = useForm(
        {
            trip:'',
            country: '',
            date: '',
            description: '',
            duration: 0
        })
    //FALTA VALIDA A DATA

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        onChange(name, value)
    }

    //deve enviar os dados para a API
    const formSubmit = (event) =>{
        event.preventDefault()
        console.log(form)
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
                        pattern="[A-Za-z]{5,}"
                        title="Nome invalido"
                        required
                    />
                </div>

                <div>
                    <Label>Planeta</Label>
                    <Select 
                        value={form.country}
                        name='country'
                        onChange={handleInputChange}
                        required
                    >
                        <option value=''>--selecione o planeta--</option>
                        {planets.map((planet, index)=>{
                            return(
                                <option value={planet} key={index}>
                                    {planet}
                                </option>
                            )
                        })}
                    </Select>
                </div>
                
                <div>
                    <Label>Data da viagem</Label>
                    <Input 
                        value={form.date}
                        name='date'
                        onChange={handleInputChange}
                        pattern=''
                        type='date' 
                        required
                    />
                </div>

                <div>
                    <Label>Descrição</Label>
                    <Textarea 
                        name='description'
                        value={form.description}
                        onChange={handleInputChange}
                        minLength="3" //trocar pra 30
                        required
                    />
                </div>

                <div>
                    <Label>Duração</Label>  
                    <Input
                        value={form.duration}
                        name='duration'
                        onChange={handleInputChange}
                        min='50'
                        type='number'
                        required
                    />
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
height:600px;
padding: 10px;
box-sizing: border-box;

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
width: 200px;
height: 30px;
`
const Input = styled.input `
width: 300px;
height: 30px;

`
const Textarea = styled.textarea `
width: 300px;
height: 80px;
resize: none;

`