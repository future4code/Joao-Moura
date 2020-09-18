import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useForm } from '../../hooks/useForm'
import { countries } from '../../constants/countries'
import { applyToTrip, getTrip } from '../../services/requestApi'

const FormUserPage = () => {
    const [tripList, setTripList] = useState([])
    useEffect(()=>{
        getTrip(setTripList)

    },[])

    //desestruturando função importada
    const { form, onChange, resetState } = useForm(
        {
            name:'',
            tripID: '',
            age: 0,
            applicationText: '',
            profession: '',
            country: ''
        })



    const handleInputChange = (event) => {
        const { name, value } = event.target;
        onChange(name, value)
    }

    //deve enviar os dados para a API
    const formSubmit = (event) =>{
        event.preventDefault()
        console.log(form)
        applyToTrip(form)
        resetState()
    }

    return (
        <FormContainer>
            <p>Dados pessoais</p>
            <Form onSubmit={formSubmit}>
                <div>
                    <Label>Nome</Label>
                    <Input 
                        value={form.name}
                        name='name'
                        onChange={handleInputChange}
                        pattern="[A-Za-z]{3,}"
                        title="Nome invalido"
                        required
                    />
                </div>

                <div>
                    <Label>Idade</Label>
                    <Input
                        value={form.age}
                        name='age'
                        onChange={handleInputChange}
                        min='18'
                        type='number'
                        required
                    />
                </div>
                

                <div>
                    <Label>Profissão</Label>
                    <Input 
                        name='profession'
                        value={form.profession}
                        onChange={handleInputChange}
                        pattern="[A-Za-z]{10,}"
                        required
                    />
                </div>

                <div>
                    <Label>País</Label>
                    <Select 
                        value={form.country}
                        name='country'
                        onChange={handleInputChange}
                        required
                    >
                        <option value=''>--selecione o país--</option>
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
                    <Label>Viagem</Label>  
                    <Select 
                        value={form.tripID}
                        name='tripID'
                        onChange={handleInputChange}
                        required
                    >
                        <option value=''>--selecione a viagem--</option>
                        {tripList.map((trip, index)=>{
                            return(
                                <option value={trip.id} key={index}>
                                    {trip.name}
                                </option>
                            )
                        })}
                    </Select>
                </div>

                <div>
                    <Label>Por que você merece essa viagem?</Label>
                    <Textarea 
                        name='applicationText'
                        value={form.applicationText}
                        onChange={handleInputChange}
                        minLength="3" //trocar pra 30
                        required
                    />
                </div>

                <button>Solicitar viagem</button>
            </Form>
        </FormContainer>
    )
}

export default FormUserPage


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
    margin: 10px 0;
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