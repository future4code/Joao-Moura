import React from 'react';
import { useHistory } from 'react-router-dom';
import { goToFeedPage, goToSingUpPage } from '../../routes/Coordinator';


const LoginPage = () => {
    const history = useHistory()
    return ( 
        <>
            <p>LoginPage</p>
            <button onClick={()=>goToFeedPage(history)}>login</button>
            <button onClick={()=>goToSingUpPage(history)}>cadastre-se</button>
        </>
    );
}
 
export default LoginPage;