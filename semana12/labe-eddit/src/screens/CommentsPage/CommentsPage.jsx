import React from 'react';
import { useHistory } from 'react-router-dom';
import {goToBack,goToLogout} from '../../routes/Coordinator'

const CommentsPage = () => {
    const history = useHistory()
    return ( 
        <>
            <p>Comentarios</p>
            <button onClick={()=>goToBack(history)}>voltar</button>
            <button onClick={()=>goToLogout(history)}>Logout</button>
        </>
    );
}
 
export default CommentsPage;