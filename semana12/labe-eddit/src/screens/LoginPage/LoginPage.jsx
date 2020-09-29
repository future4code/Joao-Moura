import React, { useEffect ,useState} from 'react';
import { useHistory } from 'react-router-dom';
import {postLogin} from '../../request/ApiRequest'
import { goToFeedPage, goToLoginPage, goToSingUpPage } from '../../routes/Coordinator';
import{BtnSingUp, BtnSubmit, ContentInput, ContentLogin, Form} from './styled'


const LoginPage = () => {
    const [form, setForm] = useState({email:'', password:''})
   
    const history = useHistory()

    useEffect(() => {
        const token = window.localStorage.getItem("token");
        token? goToFeedPage(history) : goToLoginPage(history)
    }, [history]);
    

    const handleForm = (event) => {
        const {name, value} = event.target
        setForm({...form, [name]: value})
    }

    const login = (event) =>{
        event.preventDefault()

        const {email, password} = form

        if(email.trim() !== '' && password.trim() !== ''){
            postLogin(form, history)
        }else{
            alert("campos vazios")
        }

    }

    return (
        <ContentLogin>
            <h2>Login</h2>
            <Form onSubmit={login}>
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
                <BtnSubmit type="submit">login</BtnSubmit>
            </Form>
            <BtnSingUp onClick={()=>goToSingUpPage(history)}>Não tem conta? cadastre-se</BtnSingUp>
        </ContentLogin>
    );
}
 
export default LoginPage;

