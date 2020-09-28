import React from 'react';
import { useHistory } from 'react-router-dom';
import { goToFeedPage } from '../../routes/Coordinator';

const SingUpPage = () => {
    const history = useHistory()
    return (
        <>
            <p>SingUpPage</p> 
            <button onClick={()=>goToFeedPage(history)}>Criar</button>
        </>
    );
}
 
export default SingUpPage;