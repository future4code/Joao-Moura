import React from 'react';
import { useHistory } from 'react-router-dom';
import { goToFeedPage, goToSingUpPage } from '../../routes/Coordinator';


const LoginPage = () => {
    const history = useHistory()
    return ( 
        <div>
            <h2>Login</h2>
            <form onSubmit={()=>goToFeedPage(history)}>
                <div>
                    <label>E-mail</label>
                    <input type="email"/>
                </div>
                <div>
                    <label>Senha</label>
                    <input type="password"/>
                </div>
                <button type="submit">login</button>
            </form>
            <button onClick={()=>goToSingUpPage(history)}>cadastre-se</button>
        </div>
    );
}
 
export default LoginPage;