import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { postSignUp } from '../../request/ApiRequest';
import { BtnSubmit, ContentInput, ContentSingUp, Form } from './styled'

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
            <Form onSubmit={createUser}>
                <ContentInput>
                    <label>Nome</label>
                    <input
                        name={"username"}
                        value={form.username}
                        onChange={handleForm}
                        type="text"
                        required
                    />
                </ContentInput>
                <ContentInput>
                    <label>E-mail</label>
                    <input
                        name={"email"}
                        value={form.email}
                        onChange={handleForm}
                        type="email"
                        required
                     />
                </ContentInput>
                <ContentInput>
                    <label>Senha</label>
                    <input
                        name={"password"}
                        value={form.password}
                        onChange={handleForm}
                        type="password"
                        required 
                    />
                </ContentInput>
                <BtnSubmit type="submit">Criar</BtnSubmit>
            </Form>
        </ContentSingUp>
    );
}
 
export default SingUpPage;