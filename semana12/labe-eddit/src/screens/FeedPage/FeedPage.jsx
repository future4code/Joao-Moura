import React from 'react';
import { useHistory } from 'react-router-dom';
import { goToCommentsPage, goToLogout } from '../../routes/Coordinator';

const FeedPage = () => {
    const history = useHistory()
    return ( 
        <>
            <p>Feed</p>
            <button onClick={()=>goToCommentsPage(history)}>comentarios</button>
            <button onClick={()=>goToLogout(history)}>Logout</button>
        </>
    );
}
 
export default FeedPage;
