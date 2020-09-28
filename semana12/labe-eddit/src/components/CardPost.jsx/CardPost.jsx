import React from 'react';
import { useHistory } from 'react-router-dom';
import { goToCommentsPage } from '../../routes/Coordinator';

const CardPost = () => {
    const history = useHistory()
    return ( 
        <div>
            <div>
                <img src={"https://api.adorable.io/avatars/40/abott@adorable.png"} alt="Fulano"/>
                <p>Nome</p>
            </div>
            <div>
                <img src={"https://picsum.photos/200/200"} alt=""/>
            </div>
            <div>
                <div>
                    <span>🠯</span><span>0</span><span>🠭</span>
                </div>
                <div>
                    <span>0</span> 
                    <p onClick={()=>goToCommentsPage(history)}>comentarios</p>
                </div>
            </div>
        </div>
     );
}
 
export default CardPost;