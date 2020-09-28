import React from 'react';
import { useHistory } from 'react-router-dom';
import { goToFeedPage } from '../../routes/Coordinator';

const SingUpPage = () => {
    const history = useHistory()
    return (
        <div>
            <h2>Cadastre-se</h2>
            <form onSubmit={()=>goToFeedPage(history)}>
                <div>
                    <label>Nome</label>
                    <input type="text"/>
                </div>
                <div>
                    <label>E-mail</label>
                    <input type="email"/>
                </div>
                <div>
                    <label>Senha</label>
                    <input type="password"/>
                </div>
                <button type="submit">Criar</button>
            </form>
        </div>
    );
}
 
export default SingUpPage;