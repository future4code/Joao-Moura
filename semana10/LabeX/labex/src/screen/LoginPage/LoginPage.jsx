import React, {useState, useEffect}from 'react'
import {useHistory} from  'react-router-dom'
import {goToDashBord, goToLogin} from '../../Router/goToPages'
import {goLogin} from './../../services/requestApi'
import {LoginContainer,Form,InputEmail,InputPassword,Email,Password,BtnLogin,} from './styled'

const LoginPage = () => {
    const history = useHistory()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    useEffect(() => {
        const token = window.localStorage.getItem("token");

        if (token) {
            goToDashBord(history)
        } else {
            goToLogin(history)
        }

    }, [history]);


    const onChangeEmail = (event) => {
        setEmail(event.target.value)
    }
    const onChangePassword = (event) => {
        setPassword(event.target.value)
    }


    return (
        <LoginContainer>
            <h2>Login</h2>
            <Form>
                <Email>
                    <label>E-mail</label>
                    <InputEmail
                        value={email}
                        onChange={onChangeEmail}
                    />
                </Email>
                <Password>
                    <label>Senha</label>
                    <InputPassword
                        type={'password'}
                        value={password}
                        onChange={onChangePassword}
                    />
                </Password>
                
                <BtnLogin onClick={()=>goLogin(email,password, goToDashBord, history)}>Entrar</BtnLogin>
                
            </Form>
        </LoginContainer>
    )
}

export default LoginPage

