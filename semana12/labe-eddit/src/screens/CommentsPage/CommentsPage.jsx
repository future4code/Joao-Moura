import React from 'react';
import { useHistory } from 'react-router-dom';
import CardComment from '../../components/CardComment/CardComment';
import CardPost from '../../components/CardPost.jsx/CardPost';
import {goToBack,goToLogout} from '../../routes/Coordinator'

const CommentsPage = () => {
    const history = useHistory()
    return ( 
        <div>
            <button onClick={()=>goToBack(history)}>voltar</button>
            <CardPost/>
            <form>
                <img src={"https://api.adorable.io/avatars/40/abott@adorable.png"} alt="Fulano"/>
                <input type="text"/>
                <button>Comentar</button>
            </form>
            <CardComment/>
            <CardComment/>
            <CardComment/>
            <CardComment/>
        </div>
    );
}
 
export default CommentsPage;