import React from 'react';
import { useHistory } from 'react-router-dom';
import CardPost from '../../components/CardPost.jsx/CardPost';
import { goToCommentsPage, goToLogout } from '../../routes/Coordinator';

const FeedPage = () => {
    const history = useHistory()
    return ( 
        <div>
             <button onClick={()=>goToLogout(history)}>Logout</button>
            <div>
                <form>
                    <img src={"https://api.adorable.io/avatars/40/abott@adorable.png"} alt="Fulano"/>
                    <input type="text"/>
                    <button>postar</button>
                </form>
            </div>
            <section>
                <CardPost/>
                <CardPost/>
                <CardPost/>
            </section>
        </div>
    );
}
 
export default FeedPage;
