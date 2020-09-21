import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { planets } from '../../constants/planets'
import { useForm } from '../../hooks/useForm'
import { goToLogin } from '../../Router/goToPages'
import {createTrip} from '../../services/requestApi'
import {FormContainer,Form,Label,Select,Input,Textarea} from './styled'

const FormDashBord = () => {
    const history = useHistory()

    useEffect(() => {
        const token = window.localStorage.getItem("token");
    
        if (token) {
            history.push('/dashbord/form')
        } else {
            goToLogin(history)
        }
    }, [history]);


    
    const { form, onChange, resetState } = useForm(
        {
            name:'',
            planet: '',
            date: '',
            description: '',
            durationInDays: 0
        })
    

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        onChange(name, value)
    }

    const dataValidate = () => {
        let dateForm = form.date
        dateForm = Date.parse(dateForm)

        let atual = new Date()
        atual = Date.parse(atual)

        if(dateForm > atual){
            resetState()
            return true
        }else{
            return false
        }
       
    }

    const formSubmit = (event) =>{
        event.preventDefault()
        dataValidate() ? createTrip(form) : alert("Data invalida") 
    }

    return (
        <FormContainer>
            <p>Cadastro de Viagens</p>
            <Form onSubmit={formSubmit}>
                <div>
                    <Label>Nome da viagem</Label>
                    <Input 
                        value={form.name}
                        name='name'
                        onChange={handleInputChange}
                        pattern="^[a-z\u00C0-\u00ff A-Z]{5,}"
                        title="Nome invalido"
                        required
                    />
                </div>

                <div>
                    <Label>Planeta</Label>
                    <Select 
                        value={form.planet}
                        name='planet'
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
                        minLength="30" 
                        required
                    />
                </div>

                <div>
                    <Label>Duração</Label>  
                    <Input
                        value={form.durationInDays}
                        name='durationInDays'
                        onChange={handleInputChange}
                        min='50'
                        type='number'
                        
                    />
                </div>

                <button>Criar viagem</button>
            </Form>
        </FormContainer>
    )
}

export default FormDashBord


