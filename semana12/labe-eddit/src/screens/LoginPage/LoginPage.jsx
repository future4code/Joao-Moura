import React, { useEffect ,useState} from 'react';
import { useHistory } from 'react-router-dom';
import FormLogin from '../../components/FormLogin/FormLogin';
import {postLogin} from '../../request/ApiRequest'
import { goToFeedPage, goToLoginPage, goToSingUpPage } from '../../routes/Coordinator';
import{BtnSingUp, ContentLogin} from './styled'


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

        if(form.email.trim() !== '' && form.password.trim() !== ''){
            postLogin(form, history)
        }else{
            alert("campos vazios")
        }
    }

    return (
        <ContentLogin>
            <h2>Login</h2>
            <FormLogin
                submit={login}
                emailValue={form.email}
                passwordValue={form.password}
                change={handleForm}
            />
            <BtnSingUp onClick={()=>goToSingUpPage(history)}>Não tem conta? cadastre-se</BtnSingUp>
        </ContentLogin>
    );
}
 
export default LoginPage;

