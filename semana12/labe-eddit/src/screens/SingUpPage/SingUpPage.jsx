import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import FormSingUp from '../../components/FormSingUp/FormSingUp';
import { postSignUp } from '../../request/ApiRequest';
import {ContentSingUp } from './styled'

const SingUpPage = () => {
    const [form, setForm] = useState({username:'', email:'', password:''})
    const history = useHistory()

    const handleForm = (event) => {
        const {name, value} = event.target
        setForm({...form, [name]: value})
    }

    const createUser = (event) =>{
        event.preventDefault()
       
        const { username, email, password} = form
        if(username.trim() !== '' && email.trim() !== '' && password.trim() !== ''){
            postSignUp(form, history)
        }else{
            alert("erro")
        }

    }

    return (
        <ContentSingUp>
            <h2>Cadastre-se</h2>
            <FormSingUp
                submit={createUser}
                nameValue={form.username}
                emailValue={form.email}
                passwordValue={form.password}
                change={handleForm}
            />
        </ContentSingUp>
    );
}
 
export default SingUpPage;